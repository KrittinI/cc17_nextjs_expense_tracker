'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function Search({ placeholder }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const pathname = usePathname()

    const handleChangeInput = useDebouncedCallback((e) => {
        const params = new URLSearchParams(searchParams)
        if (e.target.value) {
            params.set('title', e.target.value)
        } else {
            params.delete('title')
        }
        router.replace(`${pathname}?${params.toString()}`)
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
