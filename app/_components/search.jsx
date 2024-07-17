'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }) {
    const router = useRouter()
    const params = useSearchParams()
    const pathname = usePathname()

    const handleChangeInput = useDebouncedCallback((e) => {
        const searchParams = new URLSearchParams(params)
        if (e.target.value) {
            searchParams.set('title', e.target.value)
        } else {
            searchParams.delete('title')
        }
        router.replace(`${pathname}?${searchParams.toString()}`)
    }, 1000)

    return (
        <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-none placeholder:text-gray-500"
                placeholder={placeholder}
                onChange={handleChangeInput}
            />
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
        </div>
    );
}