import logo from "../../assets/logo.svg";
import { RiTwitterXFill } from "react-icons/ri";
import { ImFacebook2 } from "react-icons/im";
import {
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="w-full flex flex-col px-40 pt-10 bg-slate-100 mt-24">
        {/* 1st */}
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3">
            <img src={logo} alt="" className="w-40" />
            <div className="flex flex-col text-sm text-slate-500">
              <p>&copy; 2022 - 2023 Zerodha Broking Limited .</p>
              <p>All rights reserved.</p>
            </div>
            <div className="flex gap-3 ">
              <RiTwitterXFill className="w-5 h-5 opacity-70 hover:text-blue-600 transition-all" />
              <ImFacebook2 className="w-5 h-5 opacity-70 hover:text-blue-600 transition-all" />
              <FaInstagram className="w-5 h-5 opacity-70 hover:text-blue-600 transition-all" />
              <FaLinkedin className="w-5 h-5 opacity-70 hover:text-blue-600 transition-all" />
            </div>
            <div className="flex gap-3 mt-5">
              <FaYoutube className="w-5 h-5 opacity-70 hover:text-blue-600 transition-all" />
              <FaWhatsapp className="w-5 h-5 opacity-70 hover:text-blue-600 transition-all" />
              <FaTelegram className="w-5 h-5 opacity-70 hover:text-blue-600 transition-all" />
            </div>
          </div>
          <div className="flex flex-col gap-2 opacity-90 ">
            <h3 className="mb-3 text-xl text-slate-700 ">Company</h3>
            <a href="/" className="hover:text-blue-600 transition-all">
              About
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Products
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Pricing
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Referral Programme
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Careers
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Zerodha.tech
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Press & Media
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Zerodha Cares (CSR)
            </a>
          </div>
          <div className="flex flex-col gap-2 opacity-90 ">
            <h3 className="mb-3 text-xl text-slate-700 ">Supports</h3>
            <a href="/" className="hover:text-blue-600 transition-all">
              Contact Us
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Support Portal
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Z-Connect blog
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              List of charges
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Downloads & Resources
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Videos
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Market Overview
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              How to file a Compliant ?
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Status of ypur Compliant
            </a>
          </div>
          <div className="flex flex-col gap-2 opacity-90 ">
            <h3 className="mb-3 text-xl text-slate-700 ">Account</h3>
            <a href="/" className="hover:text-blue-600 transition-all">
              Open an Account
            </a>
            <a href="/" className="hover:text-blue-600 transition-all">
              Fund Transfer
            </a>
          </div>
        </div>
        {/* 2nd */}
        <div className="flex text-xs text-slate-500 mt-10">
          <p className="gap-2 opacity-90 ">
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238 Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking please
            write to complaints@zerodha.com, for DP related to dp@zerodha.com.
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF Procedure to file a complaint on SEBI
            SCORES: Register on SCORES portal. Mandatory details for filing
            complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective Communication, Speedy redressal of the
            grievances Smart Online Dispute Resolution | Grievances Redressal
            Mechanism Investments in securities market are subject to market
            risks; read all the related documents carefully before investing.
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
            &quot;Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary.&quot; Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we dont give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please
            create a ticket here.
          </p>
        </div>
        {/* 3rd */}
        <div className="flex gap-5 mt-5 opacity-90 justify-center text-slate-700">    
          <a href="">NSE</a>
          <a href="">BSE</a>
          <a href="">MCX</a>
          <a href="">Terms & conditions</a>
          <a href="">Policies & procedures</a>
          <a href="">Privacy policy</a>
          <a href="">Disclosure</a>
          <a href="">For investors attention</a>
          <a href="">Investor charter</a>
        </div>
      </div>
    </>
  );
};

export default Footer;
