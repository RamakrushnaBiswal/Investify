function Price() {
  return (
    <div className="px-40 w-full">
      <h2 className="text-2xl text-slate-700 mb-10">Charges explained</h2>
      <div className="flex gap-20">
        <div className="w-1/2">
        <div className="mb-10 flex gap-3 flex-col">
          <h1 className="text-lg text-slate-900">Securities/Commodities transaction tax</h1>
          <p className="text-slate-700 text-sm">
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p className="text-slate-700 text-sm">
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
        </div>

          <div className="mb-10 flex gap-3 flex-col">
            <h1 className="text-lg text-slate-900">Transaction/Turnover Charges</h1>
            <p className="text-slate-700 text-sm">
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>
            <p className="text-slate-700 text-sm">
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>
            <p className="text-slate-700 text-sm">
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>
            <p className="text-slate-700 text-sm">
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
              W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
              December 1, 2022.
            </p>
            <p className="text-slate-700 text-sm">
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>
          </div>
          <div className="mb-10 flex gap-3 flex-col">
            <h1 className="text-lg text-slate-900">Call & trade</h1>
            <p className="text-slate-700 text-sm">
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>
          </div>
          <div className="mb-10 flex gap-3 flex-col">
            <h1 className="text-lg text-slate-900">Stamp charges</h1>
            <p className="text-slate-700 text-sm">
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="mb-10 flex gap-3 flex-col">
            <h1 className="text-lg text-slate-900">GST</h1>
            <p className="text-slate-700 text-sm">
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
          </div>
          <div className="mb-10 flex gap-3 flex-col">
            <h1 className="text-lg text-slate-900">SEBI Charges</h1>
            <p className="text-slate-700 text-sm">
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>
          </div>
          <div className="mb-10 flex gap-3 flex-col">
            <h1 className="text-lg text-slate-900">DP (Depository participant) charges</h1>
            <p className="text-slate-700 text-sm">
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity. Female demat account holders (as first
              holder) will enjoy a discount of ₹0.25 per transaction on the CDSL
              fee. Debit transactions of mutual funds & bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>
          </div>
          <div className="mb-10 flex gap-3 flex-col">
            <h1 className="text-lg text-slate-900">Pledging charges</h1>
            <p className="text-slate-700 text-sm">
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA, Click here For non-BSDA
              demat accounts: ₹300/year + 18% GST charged quarterly (90 days).
              To learn more about AMC, Click here
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
