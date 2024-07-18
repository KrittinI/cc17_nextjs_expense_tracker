import SummaryCard from "./summary-card";
import { fetchMostCategoryExpense, fetchMostCategoryTransaction, fetchTotalExpense, fetchTotalTransaction } from "../_lib/data";
import { formatCurrency } from "../_lib/utils";

export default async function SummaryCards() {
    // const totalExpense = await fetchTotalExpense()
    // const totalTransaction = await fetchTotalTransaction()
    // const mostCategoryExpense = await fetchMostCategoryExpense()
    // const mostCategoryTransaction = await fetchMostCategoryTransaction()
    const [totalExpense, totalTransaction, mostCategoryExpense, mostCategoryTransaction] = await Promise.all([fetchTotalExpense(), fetchTotalTransaction(), fetchMostCategoryExpense(), fetchMostCategoryTransaction()])
    return (
        <>
            <SummaryCard title={`Total Expense`} value={formatCurrency(totalExpense)} type={`expense`} />
            <SummaryCard title={`Total Transaction`} value={totalTransaction} type={`transaction`} />
            <SummaryCard title={`${mostCategoryExpense.name} Expense`} value={formatCurrency(mostCategoryExpense.totalExpense)} type={`categoryExpense`} />
            <SummaryCard title={`${mostCategoryTransaction.name} Transactions`} value={mostCategoryTransaction.totalTransaction} type={`categoryTransaction`} />
        </>
    )
}
