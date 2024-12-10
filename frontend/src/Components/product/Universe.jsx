import Unicards from "./Unicards";
import img1 from "../../assets/zerodhaFundhouse.png";
import img2 from "../../assets/sensibullLogo.svg";
import img3 from "../../assets/streakLogo.png";
import img4 from "../../assets/smallcaseLogo.png";
import img5 from "../../assets/dittoLogo.png";
import img6 from "../../assets/tijori.svg";
import { Button } from "@mui/material";

function Universe() {
  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center gap-4 mt-20">
        <h1 className="text-3xl font-semibold text-slate-800 opacity-90">
          The Zerodha Universe
        </h1>
        <p className="text-slate-600">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="flex flex-col px-48 w-full justify-center items-center ">
        <div className="flex px-20 gap-9">
          <Unicards
            imgUrl={img1}
            desc="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
          />
          <Unicards
            imgUrl={img2}
            desc="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
          />
          <Unicards
            imgUrl={img6}
            desc="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
          />
        </div>
        <div className="flex px-20 gap-9">
          <Unicards
            imgUrl={img3}
            desc="Systematic trading platform that allows you to create and backtest strategies without coding."
          />
          <Unicards
            imgUrl={img4}
            desc="Thematic Investing platform that helps you invest in diversified baskets of stocks on ETFs"
          />
          <Unicards
            imgUrl={img5}
            desc="Personalized advice on life and health insurance. No spam and no mis-selling"
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-20">
        <Button variant="contained" className='w-60 h-11' sx={{fontSize:"20px"}} >Sign Up for free</Button>
      </div>
    </div>
  );
}

export default Universe;
