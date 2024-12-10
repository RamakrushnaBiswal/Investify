import nitinpic from "../../assets/nithinKamath.jpg"    
function AboutPeople(){
    return (
        <div>
            <h1 className="text-4xl text-slate-700 font-medium text-center mt-24">People</h1>
            <div className="flex w-full px-40 p-20 justify-center items-center">
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <img src={nitinpic} alt="Nitin Kamath founder of Zerodha" className="rounded-full w-80" />
                    <h2 className="text-xl text-slate-700 mt-4">Nithin Kamath</h2>
                    <h4 className="text-slate-700">Founder,CEO</h4>
                </div>
                <div className="w-3/5 flex flex-col text-lg">
                    <p className="text-slate-700">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className="text-slate-700 mt-4">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className="text-slate-700 mt-4">Playing basketball is his zen.</p>
                    <p className="text-slate-700 mt-4 text-lg">Connect on <a href="/" className="text-blue-600">Homepage</a> / <a href="/" className="text-blue-600">TradingQnA</a> / <a href="/" className="text-blue-600">Twitter</a></p>
                </div>
            </div>

        </div>
    )
}

export default AboutPeople