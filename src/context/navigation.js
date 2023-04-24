import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({children}) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handler);

    // if our component is removed from the screen, we want to remove the popstate event too
    return () => {
      window.removeEventListener('popstate', handler);
    }
  }, []);

  const Navigate = (to) => {
    window.history.pushState({}, '', to);
    setCurrentPath(to)
  }

  return (
    <NavigationContext.Provider value={{ currentPath, Navigate }}>
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider }
export default NavigationContext;
