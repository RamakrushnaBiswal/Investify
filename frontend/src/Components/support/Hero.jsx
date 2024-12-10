import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import CreateTicker from "./CreateTicket";
import Supportx from "./SupportPage";

function HeroSupport() {
  return (
    <>
      <Navbar />
      <Supportx/>
      <CreateTicker/>
      <Footer />
    </>
  );
}

export default HeroSupport;
