import edupic from "../../assets/education.svg"
const Edu = () => {
  return (
    <>
      <div className="flex px-40 mt-36 gap-32 justify-center items-center">
        <div>
            <img src={edupic} alt="Education" />
        </div>
        <div className="w-1/2 opacity-90 text-slate-600">
            <h1 className="text-4xl text-slate-700 font-medium">Free and open market education</h1>
            <div className="mt-10">
                <p className="mb-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="" className="text-blue-600">Varsity &#x2192;</a>
            </div>
            <div className="mt-10">
                <p className="mb-3">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="" className="text-blue-600">TradingQ&A &#x2192;</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Edu;
