import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';

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
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        {children}
      </body>
    </html>
  );
}
