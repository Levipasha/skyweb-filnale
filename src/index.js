import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './suppressWarnings'; // Suppress third-party warnings
import { preloadCriticalResources } from './performance';
import { warmUpAPI, prefetchData, keepBackendAlive } from './utils/api';

// Preload critical resources for faster initial load
preloadCriticalResources();

// Warm up the backend API IMMEDIATELY (wake from cold start)
warmUpAPI();

// Start aggressive prefetching IMMEDIATELY (don't wait)
prefetchData();

// Keep backend alive to prevent it from sleeping (every 10 min)
keepBackendAlive();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
