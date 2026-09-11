import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import { Toaster } from 'sonner';

const nunito = Nunito({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bingeria',
  description:
    'Browse TV shows, view show details, add series to your watchlist, and write reviews with ratings.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={`${nunito.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-50 text-zinc-900">
        <Header />
        {children}
        <Toaster
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
      </body>
    </html>
  );
}
