'use client';

import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="p-3 bg-white fixed top-0 left-0 right-0 shadow-[0_2px_8px_rgba(0,0,0,0.05)] ">
      <div className="mx-auto w-full max-w-275 flex justify-between items-center">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-5xl">Bingeria</span>
            <Icon icon="twemoji:popcorn" className="text-5xl" />
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <nav>
            <ul className="flex items-center gap-4 text-xl">
              <li>
                <Link
                  href="/watchlist"
                  className={`transition-colors hover:text-sky-500 ${pathname === '/watchlist' ? 'text-sky-500' : ''}`}
                >
                  Watchlist
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`transition-colors hover:text-sky-500 ${pathname === '/about' ? 'text-sky-500' : ''}`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/rules"
                  className={`transition-colors hover:text-sky-500 ${pathname === '/rules' ? 'text-sky-500' : ''}`}
                >
                  Rules
                </Link>
              </li>
            </ul>
          </nav>

          <button type="button">
            <Icon
              icon="ph:moon"
              className="text-3xl transition-colors cursor-pointer hover:text-sky-500"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
