import { CiCirclePlus } from "react-icons/ci";
import { IoMdPerson } from "react-icons/io";
import { BsCreditCard2Back } from "react-icons/bs";
import { VscDebugConsole } from "react-icons/vsc";
import { LiaPollSolid } from "react-icons/lia";
import { BsCoin } from "react-icons/bs";

function CreateTicker() {
  return (
    <>
      <div className="flex flex-col px-40">
        <h1 className="text-2xl font-normal text-slate-800 opacity-90 py-10 ps-28">
          To create a ticket, select a relevant topic
        </h1>
        <div className="flex w-full justify-center gap-20">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-xl text-blue-600 flex items-center">
               <CiCirclePlus className="me-2 w-8 h-8"/> Account Opening
              </a>
              <a href="/" className="ms-10">Getting started</a>
              <a href="/" className="ms-10">Online</a>
              <a href="/" className="ms-10">Offline</a>
              <a href="/" className="ms-10">Charges</a>
              <a href="/" className="ms-10">Company, Partnership and HUF</a>
              <a href="/" className="ms-10">Non Resident Indian (NRI)</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-xl text-blue-600 flex items-center">
                {" "}
                <BsCreditCard2Back className="me-2 w-8 h-7"/>Funds
              </a>
              <a href="/" className="ms-10">Fund withdrawal</a>
              <a href="/" className="ms-10">Adding funds</a>
              <a href="/" className="ms-10">Adding bank accounts</a>
              <a href="/" className="ms-10">eMandates</a>
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-xl text-blue-600 flex items-center">
                {" "}
               <IoMdPerson className="me-2 w-8 h-7"/> Your Zerodha Account
              </a>
              <a href="/" className="ms-10">Login credentials</a>
              <a href="/"className="ms-10">Your Profile</a>
              <a href="/"className="ms-10">Account modification and segment addition</a>
              <a href="/"className="ms-10">CMR & DP ID</a>
              <a href="/"className="ms-10">Nomination</a>
              <a href="/"className="ms-10">Transfer and conversion of shares</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-xl text-blue-600 flex items-center">
                <VscDebugConsole className="me-2 w-8 h-7"/>Console
              </a>
              <a href="/" className="ms-10">IPO</a>
              <a href="/" className="ms-10">Portfolio</a>
              <a href="/" className="ms-10">Funds statement</a>
              <a href="/" className="ms-10">Profile</a>
              <a href="/" className="ms-10">Reports</a>
              <a href="/" className="ms-10">Referral program</a>
            </div>
          </div>
          <div className="flex flex-col gap-20">
            <div className="flex flex-col gap-2">
              <a href="/" className="text-xl text-blue-600 flex items-center">
                {" "}
                <LiaPollSolid className="me-2 w-8 h-7"/>Trading and Markets
              </a>
              <a href="/" className="ms-10">Trading FAQs</a>
              <a href="/" className="ms-10">Kite</a>
              <a href="/" className="ms-10">Margins</a>
              <a href="/" className="ms-10">Product and order types</a>
              <a href="/" className="ms-10">Corporate actions</a>
              <a href="/" className="ms-10">Kite features</a>
            </div>
            <div className="flex flex-col gap-2">
              <a href="/" className="text-xl text-blue-600 flex items-center">
                <BsCoin className="me-2 w-8 h-7"/>Coin
              </a>
              <a href="/" className="ms-10">Understanding mutual funds and Coin</a>
              <a href="/" className="ms-10">Coin app</a>
              <a href="/" className="ms-10">Coin web</a>
              <a href="/" className="ms-10">Transactions and reports</a>
              <a href="/" className="ms-10">National Pension Scheme (NPS)</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTicker;
