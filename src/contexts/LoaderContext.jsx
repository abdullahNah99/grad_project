import { createContext, useContext, useState } from "react";

const LoaderContext = createContext();

function LoaderProvider({ children }) {
  const [isLoaderOpen, setIsLoaderOpen] = useState(true);

  // const showLoader = useCallback(() => {
  //   setIsLoaderOpen(true);
  // }, []);

  // const hideLoader = useCallback(() => {
  //   setIsLoaderOpen(false);
  // }, []);

  return (
    // <LoaderContext.Provider value={{ isLoaderOpen, showLoader, hideLoader }}>
    <LoaderContext.Provider value={{ isLoaderOpen, setIsLoaderOpen }}>
      {children}
    </LoaderContext.Provider>
  );
}

function useLoader() {
  const context = useContext(LoaderContext);
  if (context === undefined)
    throw new Error("LoaderContext was used outside of ChatMessagesProvider");
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { LoaderProvider, useLoader };
