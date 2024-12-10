import statspic from "../../assets/ecosystem.png";

const Stats = () => {
  return (
    <div className="w-full lg:flex lg:flex-row px-6 sm:px-12 md:px-24 lg:px-48 justify-between gap-8 lg:gap-16 opacity-90">
      <div className="w-full lg:w-1/2 flex flex-col gap-6 md:gap-8 lg:gap-10">
        <h1 className="text-5xl text-wrap sm:text-2xl lg:text-3xl text-slate-700">
          Trust with confidence
        </h1>
        <div>
          <h2 className="text-lg sm:text-xl lg:text-xl text-slate-800 font-semibold">
            Customer-first always
          </h2>
          <p className="text-slate-800 text-sm sm:text-base lg:text-lg">
            That&apos;s why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh
            crores of equity investments and contribute to 15% of daily retail
            exchange volumes in India.
          </p>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl lg:text-xl text-slate-800 font-semibold">
            No spam or gimmicks
          </h2>
          <p className="text-slate-800 text-sm sm:text-base lg:text-lg">
            No gimmicks, spam, &quot;gamification&quot;, or annoying push
            notifications. High-quality apps that you use at your pace, the way
            you like.
          </p>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl lg:text-xl text-slate-800 font-semibold">
            The Zerodha universe
          </h2>
          <p className="text-slate-800 text-sm sm:text-base lg:text-lg">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your
            needs.
          </p>
        </div>
        <div>
          <h2 className="text-lg sm:text-xl lg:text-xl text-slate-800 font-semibold">
            Do better with money
          </h2>
          <p className="text-slate-800 text-sm sm:text-base lg:text-lg">
            With initiatives like{" "}
            <a href="https://zerodha.com/nudge" className="text-blue-500">
              Nudge
            </a>{" "}
            and{" "}
            <a href="https://zerodha.com/killswitch" className="text-blue-500">
              Kill Switch
            </a>
            , we don&apos;t just facilitate transactions, but actively help you
            do better with your money.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <img
          src={statspic}
          alt="Stats picture of Zerodha"
          className="w-full h-auto"
        />
        <div className="flex flex-wrap gap-6 justify-center mt-6 text-blue-500">
          <a
            href="https://zerodha.com/products"
            className="text-sm sm:text-base lg:text-lg"
          >
            Explore our products here &#x2192;
          </a>
          <a
            href="https://kite-demo.zerodha.com/"
            className="text-sm sm:text-base lg:text-lg"
          >
            Try Kite Demo here &#x2192;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
