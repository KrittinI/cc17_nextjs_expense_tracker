import SummaryCard from "./summary-card";
import { fetchMostCategoryExpense, fetchMostCategoryTransaction, fetchTotalExpense, fetchTotalTransaction } from "../_lib/data";

export default async function SummaryCards() {
    const totalExpense = await fetchTotalExpense()
    const totalTransaction = await fetchTotalTransaction()
    const mostCategoryExpense = await fetchMostCategoryExpense()
    const mostCategoryTransaction = await fetchMostCategoryTransaction()
    return (
        <>
            <SummaryCard title={`Total Expense`} value={new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(totalExpense)} type={`expense`} />
            <SummaryCard title={`Total Transaction`} value={totalTransaction} type={`transaction`} />
            <SummaryCard title={mostCategoryExpense.name} value={new Intl.NumberFormat("en-US", { minimumFractionDigits: 2 }).format(mostCategoryExpense.totalExpense)} type={`categoryExpense`} />
            <SummaryCard title={mostCategoryTransaction.name} value={mostCategoryTransaction.totalTransaction} type={`categoryTransaction`} />
        </>
    )
}
