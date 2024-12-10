import AboutHero from "./Hero";
import AboutPeople from "./People";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
function AboutPage() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <AboutPeople />
      <Footer/>
    </div>
  );
}

export default AboutPage;
