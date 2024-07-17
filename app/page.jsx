import { Suspense } from "react";
import LatestTransaction from "./_components/latest-transaction";
import { SummaryCardsSkeleton, TransactionSkeleton } from "./_components/skeleton";
import SummaryCards from "./_components/summary-cards";

export default function Dashboard() {

  return (
    <main>
      <div className="flex w-full items-center justify-between mb-4">
        <h1 className="text-2xl">Dashboard</h1>
      </div>
      <div className="grid grid-cols-4 gap-6">
        {/* 4's Summary Card */}
        <Suspense fallback={<SummaryCardsSkeleton />}>
          <SummaryCards />
        </Suspense>
      </div>
      <div className="mt-6 pb-12">
        {/* Latest Transaction */}
        <Suspense fallback={<TransactionSkeleton />}>
          <LatestTransaction />
        </Suspense>
      </div>
    </main>
  );
}
