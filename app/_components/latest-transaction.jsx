import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { fecthLatestTransaction } from '../_lib/data';
import Image from 'next/image';

export default async function LatestTransaction() {
    let options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    const transactions = await fecthLatestTransaction()
    return (
        <div className="flex w-full flex-col">
            <h2 className="mb-4 text-2xl">Latest Transactions</h2>
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                {transactions.map(transaction =>
                    <div className="bg-white px-6 border-b" key={transaction.id}>
                        <div className="flex flex-row items-center justify-between py-4">
                            <div className="flex items-center">
                                <Image
                                    src={`/${transaction.category.name}.png`}
                                    alt=""
                                    className="mr-4 rounded-full"
                                    width={32}
                                    height={32} />
                                <div className="min-w-0">
                                    <p className="truncate font-semibold">{transaction.category.name}</p>
                                    <p className="text-sm text-gray-500">
                                        {new Intl.DateTimeFormat("en-US", options).format(transaction.date)}
                                    </p>
                                </div>
                            </div>
                            <p className="truncate font-medium">
                                {new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(transaction.amount / 100)}
                            </p>
                        </div>
                    </div>
                )}
                <div className="flex items-center pb-2 pt-6">
                    <ArrowPathIcon className="h-5 w-5 text-gray-500" />
                    <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
                </div>
            </div>
        </div>
    );
}