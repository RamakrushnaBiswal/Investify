// import Award from "./Award";
import Edu from "./Edu";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAcc from "../shared/OpenAccount"
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
const HomePage=()=>{
    return(
        <>  
            <Navbar/>
            <Hero/>
            <Stats/>
            <Pricing/>
            <Edu/>
            {/* <Award/> */}
            <OpenAcc/>
            <Footer/>
        </>
    )
}

export default HomePage;