import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import Brokrage from "./Broker";
import Price from "./Price";

function PricePage() {
  return (
    <>
      <Navbar />
      <div>
        <div className="text-center mt-40">
          <h1 className="text-5xl text-slate-800">Charges</h1>
          <p className="text-slate-600 mt-3 text-xl">
            List of charges and taxes
          </p>
        </div>
        <div className=" flex gap-10 justify-center text-center mt-40 text-slate-600 px-40">
          <div className="w-full">
            <sup className="text-4xl">₹</sup><span className="text-9xl text-amber-500">0</span>
            <h1 className="text-2xl mb-2">Free equity delivery</h1>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
          <div  className="w-full">
            <sup className="text-4xl">₹</sup> <span className="text-9xl text-amber-500">20</span>
            <h1 className="text-2xl mb-2">Free equity delivery</h1>
            <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
          <div className="w-full">
            <sup className="text-4xl">₹</sup><span className="text-9xl text-amber-500">0</span>
            <h1 className="text-2xl mb-2">Free direct MF</h1>
            <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
      <Brokrage/>
      <Price/>
      <Footer />
    </>
  );
}

export default PricePage;
