'use client';

import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white p-3 shadow-[0_2px_8px_rgba(0,0,0,0.05)] dark:bg-zinc-800 dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
      <div className="mx-auto flex w-full max-w-275 items-center justify-between">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl">Bingeria</span>
            <Icon
              icon="twemoji:popcorn"
              className="text-3xl sm:text-4xl md:text-5xl"
            />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <nav>
            <ul className="flex items-center gap-3 text-lg sm:gap-4 sm:text-xl">
              <li>
                <Link
                  href="/watchlist"
                  className={`transition-colors hover:text-black dark:hover:text-zinc-50 ${
                    pathname === '/watchlist'
                      ? 'text-black dark:text-zinc-50'
                      : 'text-zinc-600 dark:text-zinc-300'
                  }`}
                >
                  Watchlist
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className={`transition-colors hover:text-black dark:hover:text-zinc-50 ${
                    pathname === '/about'
                      ? 'text-black dark:text-zinc-50'
                      : 'text-zinc-600 dark:text-zinc-300'
                  }`}
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/rules"
                  className={`transition-colors hover:text-black dark:hover:text-zinc-50 ${
                    pathname === '/rules'
                      ? 'text-black dark:text-zinc-50'
                      : 'text-zinc-600 dark:text-zinc-300'
                  }`}
                >
                  Rules
                </Link>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <Icon
              icon={theme === 'dark' ? 'ph:sun' : 'ph:moon'}
              className="cursor-pointer text-2xl text-zinc-600 transition-colors hover:text-black dark:text-zinc-300 dark:hover:text-zinc-50 sm:text-3xl"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
