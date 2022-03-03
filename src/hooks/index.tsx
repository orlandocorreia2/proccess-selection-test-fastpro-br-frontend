import React from 'react';
import ReactTooltip from 'react-tooltip';

import { AuthProvider } from './auth';
import { LoadingPageProvider } from './load-page';
import { ToastProvider } from './toast';

export const AppProvider: React.FC = ({ children }) => {
  return (
    <LoadingPageProvider>
      <ReactTooltip
        className="extraClass"
        delayShow={500}
        effect="solid"
        place="bottom"
      />
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
    </LoadingPageProvider>
  );
};
