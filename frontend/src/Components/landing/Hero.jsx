import Button from '@mui/material/Button';
import homehero from "../../assets/homeHero.png";

const Hero = () => {
  return (
    <>
      <div className="lg:mt-11  flex flex-col mb-20 h-screen">
        <div className="justify-center items-center lg:px-20 pt-20 lg:mt-0 mt-20 flex">
          <img src={homehero} alt="hero pic" className="lg:w-3/5 w-4/4" />
        </div>
        <div className=" flex flex-col gap-2 justify-center items-center">
          <h1 className='lg:text-6xl text-6xl text-slate-700 font-medium mt-11 text-center lg:ms-0'>Invest in everything</h1>
          <p className='lg:text-xl text-2xl font-light text-slate-800 mb-8 mt-2 opacity-90 lg:ms-0 text-center px-10'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
          <Button variant="contained" className='w-60 h-11' sx={{fontSize:"20px"}} >Sign Up for free</Button>
        </div>
      </div>
    </>
  );
};

export default Hero;
