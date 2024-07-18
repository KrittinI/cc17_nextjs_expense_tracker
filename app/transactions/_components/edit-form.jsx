import { fetchAllCategory } from '@/app/_lib/data';
import {
    CurrencyDollarIcon,
    ListBulletIcon,
    CalendarDaysIcon,
    DocumentTextIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { updateTransaction } from '../_lib/action';
import prisma from '@/app/_lib/prisma';
import { notFound } from 'next/navigation';

export default async function EditForm({ id }) {
    const categories = await fetchAllCategory()
    const transaction = await prisma.transaction.findFirst({ where: { id } })
    console.log(transaction.date.toISOString().split("T")[0]);

    if (!transaction) {
        notFound()
    }

    return (
        <form action={updateTransaction.bind(null, id)}>
            <div className="rounded-md bg-gray-50 p-6">
                <div className="mb-4">
                    <label htmlFor="category" className="mb-2 block text-sm font-medium">
                        Category
                    </label>
                    <div className="relative">
                        <select
                            id="category"
                            name="categoryId"
                            className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={transaction.categoryId}
                        >
                            <option value="" disabled>
                                Select a category
                            </option>
                            {categories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <ListBulletIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                </div>

                {/* Amount */}
                <div className="mb-4">
                    <label htmlFor="amount" className="mb-2 block text-sm font-medium">
                        Amount
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            id="amount"
                            name="amount"
                            placeholder="Enter amount"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={transaction.amount / 100}
                        />
                        <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>

                {/* Date */}
                <div className="mb-4">
                    <label htmlFor="date" className="mb-2 block text-sm font-medium">
                        Date
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            id="date"
                            name="date"
                            type="date"
                            placeholder="Select date"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={transaction.date.toISOString().split("T")[0]}
                        />
                        <CalendarDaysIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                    <label
                        htmlFor="description"
                        className="mb-2 block text-sm font-medium"
                    >
                        Description
                    </label>
                    <div className="relative mt-2 rounded-md">
                        <input
                            id="description"
                            name="description"
                            placeholder="Enter description"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            defaultValue={transaction.description}
                        />
                        <DocumentTextIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
                    </div>
                </div>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <Link
                    href="/transactions"
                    className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                >
                    Cancel
                </Link>

                <button className="flex h-10 items-center rounded-lg bg-red-500 px-4 text-sm font-medium text-white transition-colors hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50">
                    Update
                </button>
            </div>
        </form>
    );
}
