import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { HeroSec } from "./Components/HeroSec";
import Section1 from "./Components/Section1";
import Section2 from "./Components/Section2";
import Footer from "./Components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSec />
      <Section1 />
      <Section2 />
      <Footer />
    </div>
  );
};

export default App;
