import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import LeftSec from "./LeftSec";
import RightSec from "./RightSec";
import img1 from "../../assets/kite.png";
import img2 from "../../assets/console.png";
import img3 from "../../assets/coin.png";
import img4 from "../../assets/kiteconnect.png";
import img5 from "../../assets/varsity.png";
import Universe from "./Universe";

function HeroProduct() {
  return (
    <>
      <Navbar />
      <div>
        <div className="flex flex-col justify-center items-center mt-32">
          <h1 className="text-5xl font-medium text-slate-700">
            Zerodha Products
          </h1>
          <p className="text-slate-900 text-lg p-5">
            Sleek, modern, and intuitive trading platform
          </p>
          <p className="text-slate-900">
            Check out our{" "}
            <a href="/" className="text-blue-600">
              investment offerings →
            </a>
          </p>
        </div>
        <LeftSec
          imgurl={img1}
          name="Kite"
          description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
          learnmore="/"
          trydemo="/"
          gstore="/"
          appstor="/"
        />
        <RightSec
          imgurl={img2}
          name="Console"
          description="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
          learnmore="/"
        />
        <LeftSec
          imgurl={img3}
          name="Coin"
          description="Buy and sell cryptocurrencies with ease. Experience the power of digital assets on our secure and reliable platform."
          learnmore="/"
          trydemo="/"
          gstore="/"
          appstor="/"
        />
        <RightSec
          imgurl={img4}
          name="Kite Connect API"
          description="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
          learnmore="/"
        />
        <LeftSec
          imgurl={img5}
          name="Varsity mobile"
          description="Learn everything about personal finance, mutual funds, stocks, and more under one roof."
          learnmore="/"
          trydemo="/"
          gstore="/"
          appstor="/"
        />
      </div>
      <div className="flex justify-center items-center p-2">
        <h1 className="text-2xl text-slate-700">
        Want to know more about our technology stack? Check out the <a href="/" className="text-blue-600">Zerodha.tech</a> blog.
        </h1>
      </div>
      <Universe/>
      <Footer />
    </>
  );
}

export default HeroProduct;
