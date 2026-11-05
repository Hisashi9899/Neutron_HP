import { SALES_SUSPENDED_DETAIL, SALES_SUSPENDED_MESSAGE } from "../lib/flow";

/** 押せない申込ボタン。販売中止中であることがひと目で分かる表示にする。 */
export function SalesSuspendedButton({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      className={`cursor-not-allowed rounded-md border border-amber-400/40 bg-amber-400/10 px-8 py-3 font-bold text-amber-200 ${className}`}
    >
      {SALES_SUSPENDED_MESSAGE}
    </button>
  );
}

/** 販売中止の理由と再開時期の案内。 */
export function SalesSuspendedNotice({
  className = "",
  showMessage = true,
}: {
  className?: string;
  showMessage?: boolean;
}) {
  return (
    <div className={`rounded-xl border border-amber-400/40 bg-amber-400/10 p-6 text-center ${className}`}>
      {showMessage && <p className="font-extrabold text-amber-200">{SALES_SUSPENDED_MESSAGE}</p>}
      <p className={`mx-auto max-w-xl text-sm text-white/70 ${showMessage ? "mt-2" : ""}`}>{SALES_SUSPENDED_DETAIL}</p>
    </div>
  );
}
