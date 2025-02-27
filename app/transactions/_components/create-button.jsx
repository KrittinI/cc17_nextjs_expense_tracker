import { PlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function CreateButton() {
    return (
        <Link
            href="/transactions/create"
            className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400"
        >
            <span>Create Transaction</span>
            <PlusIcon className="h-5" />
        </Link>
    );
}
