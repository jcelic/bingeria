'use client';

import { useTheme } from 'next-themes';
import { Toaster } from 'sonner';

const AppToaster = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Toaster
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      position="top-center"
      toastOptions={{
        style: {
          width: 'max-content',
          maxWidth: 'calc(100vw - 32px)',
          left: '50%',
          right: 'auto',
          translate: '-50% 0',
          padding: '12px 16px',
          fontSize: '15px',
        },
      }}
    />
  );
};

export default AppToaster;
