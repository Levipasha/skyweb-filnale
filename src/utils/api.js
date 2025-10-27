/**
 * API Utilities with Caching and Error Handling
 * Optimized for Render's free tier with cold start handling
 */

const API_BASE_URL = 'http://localhost:5000/api';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

/**
 * Simple in-memory cache
 */
const cache = new Map();

/**
 * Get cached data if available and not expired
 */
const getCachedData = (key) => {
  const cached = cache.get(key);
  if (!cached) return null;
  
  const isExpired = Date.now() - cached.timestamp > CACHE_DURATION;
  if (isExpired) {
    cache.delete(key);
    return null;
  }
  
  return cached.data;
};

/**
 * Set cache data with timestamp
 */
const setCachedData = (key, data) => {
  cache.set(key, {
    data,
    timestamp: Date.now()
  });
  
  // Also store in localStorage for persistence
  try {
    localStorage.setItem(`skyweb_cache_${key}`, JSON.stringify({
      data,
      timestamp: Date.now()
    }));
  } catch (e) {
    console.warn('localStorage not available');
  }
};

/**
 * Get data from localStorage cache
 */
const getLocalStorageCache = (key) => {
  try {
    const cached = localStorage.getItem(`skyweb_cache_${key}`);
    if (!cached) return null;
    
    const parsed = JSON.parse(cached);
    const isExpired = Date.now() - parsed.timestamp > CACHE_DURATION;
    
    if (isExpired) {
      localStorage.removeItem(`skyweb_cache_${key}`);
      return null;
    }
    
    return parsed.data;
  } catch (e) {
    return null;
  }
};

/**
 * Fetch with retry logic for cold starts
 */
const fetchWithRetry = async (url, options = {}, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000); // 15s timeout
      
      const response = await fetch(url, {
        ...options,
        signal: controller.signal
      });
      
      clearTimeout(timeoutId);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      // If it's the last retry, throw the error
      if (i === retries - 1) {
        throw error;
      }
      
      // Wait before retrying (exponential backoff)
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
    }
  }
};

/**
 * Fetch team members with caching
 */
export const fetchTeamMembers = async () => {
  const cacheKey = 'team_members';
  
  // Check memory cache first
  let cached = getCachedData(cacheKey);
  if (cached) return cached;
  
  // Check localStorage cache
  cached = getLocalStorageCache(cacheKey);
  if (cached) {
    setCachedData(cacheKey, cached); // Restore to memory cache
    return cached;
  }
  
  // Fetch from API
  try {
    const data = await fetchWithRetry(`${API_BASE_URL}/teams`);
    
    if (data.success) {
      setCachedData(cacheKey, data.data);
      return data.data;
    }
    
    throw new Error('Failed to fetch team members');
  } catch (error) {
    console.error('Error fetching team members:', error);
    throw error;
  }
};

/**
 * Fetch projects with caching and optional filtering
 */
export const fetchProjects = async (status = null) => {
  const cacheKey = status ? `projects_${status}` : 'projects_all';
  
  // Check memory cache first
  let cached = getCachedData(cacheKey);
  if (cached) return cached;
  
  // Check localStorage cache
  cached = getLocalStorageCache(cacheKey);
  if (cached) {
    setCachedData(cacheKey, cached);
    return cached;
  }
  
  // Fetch from API
  try {
    const url = status 
      ? `${API_BASE_URL}/projects?status=${status}`
      : `${API_BASE_URL}/projects`;
    
    const data = await fetchWithRetry(url);
    
    if (data.success) {
      setCachedData(cacheKey, data.data);
      return data.data;
    }
    
    throw new Error('Failed to fetch projects');
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

/**
 * Fetch pricing packages with caching
 */
export const fetchPricingPackages = async (isActive = true) => {
  const cacheKey = `pricing_${isActive}`;
  
  // Check memory cache first
  let cached = getCachedData(cacheKey);
  if (cached) return cached;
  
  // Check localStorage cache
  cached = getLocalStorageCache(cacheKey);
  if (cached) {
    setCachedData(cacheKey, cached);
    return cached;
  }
  
  // Fetch from API
  try {
    const url = `${API_BASE_URL}/pricing${isActive ? '?isActive=true' : ''}`;
    const data = await fetchWithRetry(url);
    
    if (data.success) {
      setCachedData(cacheKey, data.data);
      return data.data;
    }
    
    throw new Error('Failed to fetch pricing packages');
  } catch (error) {
    console.error('Error fetching pricing packages:', error);
    throw error;
  }
};

/**
 * Prefetch data for faster page loads
 * Call this on app initialization
 */
export const prefetchData = async () => {
  try {
    // Prefetch in background, don't block
    Promise.all([
      fetchTeamMembers().catch(() => {}),
      fetchProjects().catch(() => {}),
      fetchPricingPackages().catch(() => {})
    ]);
  } catch (error) {
    // Silent fail for prefetch
    console.debug('Prefetch failed:', error);
  }
};

/**
 * Clear all cache
 */
export const clearCache = () => {
  cache.clear();
  
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith('skyweb_cache_')) {
        localStorage.removeItem(key);
      }
    });
  } catch (e) {
    console.warn('Could not clear localStorage cache');
  }
};

/**
 * Warm up the backend API (wake from cold start)
 */
export const warmUpAPI = async () => {
  try {
    // Make a lightweight request to wake up the backend
    await fetch(`${API_BASE_URL}/health`, { method: 'HEAD' }).catch(() => {});
  } catch (error) {
    // Silent fail
  }
};

/**
 * Keep backend alive with regular pings (prevents cold start)
 * Call this to keep Render free tier from sleeping
 */
export const keepBackendAlive = () => {
  // Ping every 10 minutes to keep backend awake
  const PING_INTERVAL = 10 * 60 * 1000; // 10 minutes
  
  const ping = async () => {
    try {
      await fetch(`${API_BASE_URL}/health`, { method: 'HEAD' }).catch(() => {});
      console.log('[KeepAlive] Backend pinged successfully');
    } catch (error) {
      console.debug('[KeepAlive] Ping failed, backend may be sleeping');
    }
  };
  
  // Initial ping
  ping();
  
  // Set up interval for continuous pinging
  const intervalId = setInterval(ping, PING_INTERVAL);
  
  // Return cleanup function
  return () => clearInterval(intervalId);
};

/**
 * Optimistic data loading - returns cached data immediately while fetching fresh
 */
export const fetchTeamMembersOptimistic = async (onUpdate) => {
  const cacheKey = 'team_members';
  
  // Return cached data immediately if available
  let cached = getCachedData(cacheKey) || getLocalStorageCache(cacheKey);
  if (cached && onUpdate) {
    onUpdate(cached, false); // false = not fresh
  }
  
  // Fetch fresh data in background
  try {
    const data = await fetchWithRetry(`${API_BASE_URL}/teams`, {}, 2); // Fewer retries for speed
    
    if (data.success) {
      setCachedData(cacheKey, data.data);
      if (onUpdate) {
        onUpdate(data.data, true); // true = fresh data
      }
      return data.data;
    }
  } catch (error) {
    // If fetch fails but we have cache, return cache
    if (cached) return cached;
    throw error;
  }
  
  return cached || [];
};

/**
 * Optimistic projects loading
 */
export const fetchProjectsOptimistic = async (status = null, onUpdate) => {
  const cacheKey = status ? `projects_${status}` : 'projects_all';
  
  // Return cached data immediately
  let cached = getCachedData(cacheKey) || getLocalStorageCache(cacheKey);
  if (cached && onUpdate) {
    onUpdate(cached, false);
  }
  
  // Fetch fresh data
  try {
    const url = status 
      ? `${API_BASE_URL}/projects?status=${status}&limit=20` // Limit results
      : `${API_BASE_URL}/projects?limit=20`;
    
    const data = await fetchWithRetry(url, {}, 2);
    
    if (data.success) {
      setCachedData(cacheKey, data.data);
      if (onUpdate) {
        onUpdate(data.data, true);
      }
      return data.data;
    }
  } catch (error) {
    if (cached) return cached;
    throw error;
  }
  
  return cached || [];
};

/**
 * Optimistic pricing loading
 */
export const fetchPricingPackagesOptimistic = async (isActive = true, onUpdate) => {
  const cacheKey = `pricing_${isActive}`;
  
  // Return cached data immediately
  let cached = getCachedData(cacheKey) || getLocalStorageCache(cacheKey);
  if (cached && onUpdate) {
    onUpdate(cached, false);
  }
  
  // Fetch fresh data
  try {
    const url = `${API_BASE_URL}/pricing${isActive ? '?isActive=true' : ''}`;
    const data = await fetchWithRetry(url, {}, 2);
    
    if (data.success) {
      setCachedData(cacheKey, data.data);
      if (onUpdate) {
        onUpdate(data.data, true);
      }
      return data.data;
    }
  } catch (error) {
    if (cached) return cached;
    throw error;
  }
  
  return cached || [];
};

/**
 * Fetch internships with caching
 */
export const fetchInternships = async (isActive = true) => {
  const cacheKey = `internships_${isActive}`;
  
  // Check memory cache first
  let cached = getCachedData(cacheKey);
  if (cached) return cached;
  
  // Check localStorage cache
  cached = getLocalStorageCache(cacheKey);
  if (cached) {
    setCachedData(cacheKey, cached);
    return cached;
  }
  
  // Fetch from API
  try {
    const url = `${API_BASE_URL}/internships${isActive ? '?isActive=true' : ''}`;
    const data = await fetchWithRetry(url);
    
    if (data.success) {
      setCachedData(cacheKey, data.data);
      return data.data;
    }
    
    throw new Error('Failed to fetch internships');
  } catch (error) {
    console.error('Error fetching internships:', error);
    throw error;
  }
};

/**
 * Submit internship enrollment application
 */
export const submitInternshipApplication = async (applicationData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/enrollments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(applicationData)
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit application');
    }
    
    return data;
  } catch (error) {
    console.error('Error submitting application:', error);
    throw error;
  }
};

/**
 * Optimistic internships loading
 */
export const fetchInternshipsOptimistic = async (isActive = true, onUpdate) => {
  const cacheKey = `internships_${isActive}`;
  
  // Return cached data immediately
  let cached = getCachedData(cacheKey) || getLocalStorageCache(cacheKey);
  if (cached && onUpdate) {
    onUpdate(cached, false);
  }
  
  // Fetch fresh data
  try {
    const url = `${API_BASE_URL}/internships${isActive ? '?isActive=true' : ''}`;
    const data = await fetchWithRetry(url, {}, 2);
    
    if (data.success) {
      setCachedData(cacheKey, data.data);
      if (onUpdate) {
        onUpdate(data.data, true);
      }
      return data.data;
    }
  } catch (error) {
    if (cached) return cached;
    throw error;
  }
  
  return cached || [];
};

