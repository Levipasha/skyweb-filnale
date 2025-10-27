/**
 * Suppress specific console warnings
 * This file suppresses styled-components warnings that may come from third-party libraries
 * or browser extensions, since styled-components is not directly used in this project.
 */

// Store the original console methods
const originalWarn = console.warn;
const originalError = console.error;

// List of warning patterns to suppress
const SUPPRESSED_WARNINGS = [
  /styled-components.*unknown prop/i,
  /styled-components.*shouldForwardProp/i,
  /styled-components.*transient props/i,
  /Over \d+ classes were generated for component/i,
];

// Override console.warn
console.warn = (...args) => {
  const message = args.join(' ');
  
  // Check if this warning should be suppressed
  const shouldSuppress = SUPPRESSED_WARNINGS.some(pattern => pattern.test(message));
  
  if (!shouldSuppress) {
    originalWarn.apply(console, args);
  }
};

// Override console.error for React DOM warnings about props
console.error = (...args) => {
  const message = args.join(' ');
  
  // Check if this is a React warning about unknown props that we want to suppress
  const shouldSuppress = SUPPRESSED_WARNINGS.some(pattern => pattern.test(message));
  
  if (!shouldSuppress) {
    originalError.apply(console, args);
  }
};

export default {};

