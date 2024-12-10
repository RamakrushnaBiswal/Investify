const Pricing = () => {
  return (
    <>
      <div className="w-full flex justify-center mt-20 opacity-90">
        <img src="https://zerodha.com/static/images/press-logos.png" alt="" />
      </div>
      <div className="w-full flex justify-center px-60 mt-40">
        <div className="w-1/2">
          <h1 className="text-4xl font-medium mb-5 text-slate-700">Unbeatable pricing</h1>
          <p className="text-slate-700 mb-6">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="https://zerodha.com/charges/" className="text-blue-600">See pricing &#x2192;</a>
        </div>
        <div className="w-1/2 font-black flex justify-center text-center gap-20">
          <div>
            <h1 className="text-6xl text-amber-400">0%</h1>
            <p>Brokerage</p>
          </div>
          <div>
            <h1 className="text-6xl text-amber-400">20%</h1>
            <p>Intraday and F&O</p>   
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
