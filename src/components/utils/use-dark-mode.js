import { useEffect } from 'react';
import useLocalStorage from './use-local-storage';

// Hook
export default function useDarkMode() {
  // Use our useLocalStorage hook to persist state through a page refresh.
  // Read the recipe for this hook to learn more: usehooks.com/useLocalStorage
  const [enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

  // Fire off effect that add/removes dark mode class
  useEffect(
    () => {
      const className = 'dark';
      const element = window.document.body;
      if (enabledState) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [enabledState] // Only re-call effect when value changes
  );

  // Return enabled state and setter
  return [enabledState, setEnabledState];
}
