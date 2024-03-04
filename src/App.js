import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Herosec from "./components/Herosec";
import Headersec from "./components/Headersec";
import Creatsec from "./components/Creatsec";
import Recyclingsec from "./components/Recyclingsec";
import Faqsec from "./components/Faqsec";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import Backtotop from "./components/Backtotop";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  return (
    <div>
      {data ? (
        <div>
          <Preloader />
        </div>
      ) : (
        <div className="App">
          <div className="bg-bluebg d-flex flex-column min-vh-100">
            <Herosec />
            <Headersec />
          </div>
          <Creatsec />
          <Recyclingsec />
          <Faqsec />
          <Subscribe />
          <Footer />
          <Backtotop />
        </div>
      )}
    </div>
  );
}

export default App;
