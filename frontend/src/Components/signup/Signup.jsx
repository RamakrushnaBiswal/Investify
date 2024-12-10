import signuppic from "../../assets/signup.png";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
function Signup() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col mt-20 p-28 justify-center">
        <div className="w-full flex justify-center gap-12">
          <div className="w-1/2 flex justify-center">
            <img src={signuppic} alt="Zerodha clone by ram" className="w-5/6" />
          </div>
          <div className="w-2/6">
            <h1 className="text-4xl font-medium text-slate-500">Signup now</h1>
            <h3 className="text-slate-700 mt-3">
              Or track your existing application.
            </h3>
            <form action="" className="flex flex-col mt-5 gap-3">
              <label htmlFor="fname">Mobile Number</label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="+91 xxxxxxxxxx"
                className="px-4 py-2 rounded border-2 w-3/5"
              />
              <i className="text-xs text-slate-500">
                You will recive an OTP on your number
              </i>
              <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-1/4">
                Continue
              </button>
              <a href="/" className="text-blue-600 text-sm">
                Open to open an NRI account?
              </a>
            </form>
          </div>
        </div>
        <div className="w-full mt-2">
          <p className="text-xs text-slate-500 mt-5 text-center">
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN. Please visit this article to know more.
          </p>
          <p className="text-xs text-slate-500 text-center">
            By submitting your contact details, you authorize Zerodha to contact
            you even if you are registered on DND & conduct online KYC for
            trading & demat account opening as per KRA regulations and PMLA
            guidelines.
          </p>
          <p className="text-xs text-slate-500  text-center">
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the offline forms. For help, click here.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
