import { fetchTransaction } from "../_lib/data";
import { formatCurrency, formatDate, getCategoryImageMaping } from "../_lib/utils";
import DeleteButton from "../transactions/_components/delete-button";
import UpdateButton from "../transactions/_components/update-button";

const categoryMapping = getCategoryImageMaping()

export default async function TransactionList({ page, title }) {
    const transactions = await fetchTransaction(page, title)

    return (
        <div className="mt-6 flow-root">
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 pt-0">
                    <table className="min-w-full text-gray-900 table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                                    Category
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Date
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Description
                                </th>
                                <th scope="col" className="px-3 py-5 font-medium">
                                    Amount
                                </th>
                                <th scope="col" className="relative py-3 pl-6 pr-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {transactions.map(transaction =>
                                <tr
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                    key={transaction.id}
                                >
                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={categoryMapping.get(transaction.category.name)}
                                                className="rounded-full"
                                                alt="category"
                                            />
                                            <p>{transaction.category.name}</p>
                                        </div>
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {formatDate(transaction.date)}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {transaction.description}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-3">
                                        {formatCurrency(transaction.amount / 100)}
                                    </td>

                                    <td className="whitespace-nowrap py-3 pl-6 pr-3">
                                        <div className="flex justify-end gap-3">
                                            <UpdateButton id={transaction.id} />
                                            <DeleteButton id={transaction.id} />
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
