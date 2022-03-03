import React, { createContext, useContext, useCallback } from 'react';

interface LoadingPageContextData {
  setIsLoadingPage(loading: boolean): void;
}

const LoadingPageContext = createContext<LoadingPageContextData>(
  {} as LoadingPageContextData,
);

export const LoadingPageProvider: React.FC = ({ children }) => {
  const setIsLoadingPage = useCallback((loading: boolean): void => {
    document.getElementById('root')?.removeAttribute('disabled');

    if (loading) {
      document.getElementById('root')?.setAttribute('disabled', 'true');
    }
  }, []);

  return (
    <LoadingPageContext.Provider value={{ setIsLoadingPage }}>
      {children}
    </LoadingPageContext.Provider>
  );
};

export const useLoadingPage = (): LoadingPageContextData => {
  const context = useContext(LoadingPageContext);

  if (!context) {
    throw new Error(
      'useLoadingPage must to be used within a LoadingPageProvider',
    );
  }

  return context;
};
