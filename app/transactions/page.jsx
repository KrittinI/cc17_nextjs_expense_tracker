import CreateButton from "./_components/create-button"
import Pagination from "./_components/pagination"
import Search from "./_components/search"
import TransactionList from "../_components/transaction-list"
import { fetchSearchTransaction } from "../_lib/data"
import { Suspense } from "react"
import { TableSkeleton } from "../_components/skeleton"

export const metadata = {
    title: "Transaction"
}

export default async function TransactionPage({ searchParams }) {
    const totalSerach = await fetchSearchTransaction(searchParams.title || '')

    return (
        <main className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-2xl">Transactions</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search transactions..." />
                <CreateButton />
            </div>
            <Suspense fallback={<TableSkeleton />}>
                <TransactionList page={Number(searchParams.page) || 1} title={searchParams.title} />
            </Suspense>
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={Math.ceil(totalSerach / 5)} />
            </div>
        </main >
    )
}
