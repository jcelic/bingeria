'use client';

import { Icon } from '@iconify/react';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDebouncedSearch } from '@/hooks/useDebouncedSearch';

const SearchInput = () => {
  const searchParams = useSearchParams();
  const param = searchParams.get('q') ?? '';
  const [searchValue, setSearchValue] = useState(param);

  const pathname = usePathname();
  const { replace } = useRouter();
  const debouncedValue = useDebouncedSearch(searchValue);

  useEffect(() => {
    const params = new URLSearchParams();

    if (debouncedValue) {
      params.set('q', debouncedValue);
    }

    const query = params.toString();

    replace(query ? `${pathname}?${query}` : pathname);
  }, [debouncedValue, pathname, replace]);

  return (
    <div className="relative mx-auto mb-10 w-full max-w-160">
      <input
        type="text"
        placeholder="Search shows..."
        className="w-full rounded-xl border-none bg-white px-4 py-3.5 pr-12 text-base text-zinc-900 shadow-[0_2px_8px_rgba(0,0,0,0.05)] outline-none transition-shadow duration-200 placeholder:text-zinc-400 focus:shadow-[0_0_0_3px_rgba(0,0,0,0.08)] dark:bg-zinc-800 dark:text-zinc-50 dark:placeholder:text-zinc-400 dark:shadow-[0_2px_8px_rgba(0,0,0,0.35)] dark:focus:shadow-[0_0_0_3px_rgba(255,255,255,0.14)]"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <Icon
        icon="ph:magnifying-glass"
        className="absolute right-4 top-1/2 z-10 h-6 w-6 -translate-y-1/2 text-zinc-900 dark:text-zinc-300"
      />
    </div>
  );
};

export default SearchInput;
