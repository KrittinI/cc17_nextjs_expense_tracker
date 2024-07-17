'use client'

import { usePathname } from 'next/navigation'
import { DocumentCurrencyDollarIcon, HomeIcon, TvIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const links = [
    { name: 'Dashboard', href: '/', icon: <HomeIcon className="w-6" /> },
    {
        name: 'Transactions',
        href: '/transactions',
        icon: <DocumentCurrencyDollarIcon className="w-6" />
    },
    { name: 'About', href: '/about', icon: <TvIcon className="w-6" /> }
];


export default function Navigation() {
    const pathname = usePathname()
    return (
        <div className="flex h-full flex-col p-4 gap-6">
            <Link
                className="flex items-center gap-3 rounded-md bg-gray-900 p-4"
                href="/"
            >
                <Image alt="logo" src="/logo.png" width={40} height={40} />
                <span className="text-yellow-400 font-bold text-lg">
                    Expense Tracker
                </span>
            </Link >
            <div className="flex flex-col grow gap-2">
                {links.map(link =>
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-2 rounded-md ${pathname === link.href ? "bg-rose-50 text-red-500" : "bg-gray-50"} p-4 text-sm font-medium hover:bg-rose-50 hover:text-red-500`}
                    >
                        {link.icon}
                        <p>{link.name}</p>
                    </Link>
                )}
            </div>
        </div >
    )
}
