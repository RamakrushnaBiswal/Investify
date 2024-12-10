function Brokrage() {
  return (
    <div className="w-full flex flex-col justify-center items-center mt-20 opacity-90 px-40">
      <div className="p-4 bg-gray-100">
        <div className="flex border-b-2 border-gray-300 mb-4">
          <button className="px-4 py-2 font-semibold text-blue-600 border-b-2 border-blue-600">
            Equity
          </button>
          <button className="px-4 py-2 text-gray-500">Currency</button>
          <button className="px-4 py-2 text-gray-500">Commodity</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border border-gray-300">Category</th>
                <th className="px-4 py-2 border border-gray-300">
                  Equity Delivery
                </th>
                <th className="px-4 py-2 border border-gray-300">
                  Equity Intraday
                </th>
                <th className="px-4 py-2 border border-gray-300">
                  F&O - Futures
                </th>
                <th className="px-4 py-2 border border-gray-300">
                  F&O - Options
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">Brokerage</td>
                <td className="px-4 py-2 border border-gray-300">
                  Zero Brokerage
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  0.03% or ₹20/executed order whichever is lower
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  0.03% or ₹20/executed order whichever is lower
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  Flat ₹20 per executed order
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">STT/CTT</td>
                <td className="px-4 py-2 border border-gray-300">
                  0.1% on buy & sell
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  0.025% on the sell side
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  0.02% on the sell side
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  <ul className="list-disc list-inside">
                    <li>
                      0.125% of intrinsic value on options bought & exercised
                    </li>
                    <li>0.1% on sell side (on premium)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Transaction Charges
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  NSE: 0.00297% <br />
                  BSE: 0.00375%
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  NSE: 0.00173% <br />
                  BSE: 0
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  NSE: 0.03503% (on premium) <br />
                  BSE: 0.0325% (on premium)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">GST</td>
                <td className="px-4 py-2 border border-gray-300">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  18% on (brokerage + SEBI charges + transaction charges)
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  SEBI Charges
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  ₹10 / crore
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  ₹10 / crore
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  ₹10 / crore
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  ₹10 / crore
                </td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">
                  Stamp charges
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  0.015% or ₹1500 / crore on buy side
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  0.003% or ₹300 / crore on buy side
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  0.002% or ₹200 / crore on buy side
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  0.003% or ₹300 / crore on buy side
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h2 className="text-2xl p-10">
        <a href="/" target="_blank" className="text-blue-600">
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </h2>
    </div>
  );
}

export default Brokrage;
