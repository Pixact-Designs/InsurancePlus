import About from "./ui/About";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import NavBar from "./ui/NavBar";
import OurStory from "./ui/OurStory";
import WCU from "./ui/WCU";
import YNS from "./ui/YNS";

export default function Home() {
  return (
    <>
    <NavBar/>
     <Header/>
     <About/>
     <WCU/>
     <OurStory/>
     <YNS/>
    <Footer/>
     
    </>
  );
}
