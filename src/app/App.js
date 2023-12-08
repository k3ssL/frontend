import "./App.css";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Quality from "../components/Quality/Quality";
import Quote from "../components/Quote/Quote";
import LandingPages from "../components/LandingPages/LandingPages";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Quality />
      <Quote />
      <LandingPages />
      <Footer />
    </div>
  );
}

export default App;
