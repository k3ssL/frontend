import './App.css';
import Header from "../components/Header/Header";
import Exclusive from "../components/Exclusive/Exclusive";
import Create from "../components/Create/Create";
import HowWork from "../components/HowWork/HowWork";
import Projects from "../components/Projects/Projects";
import Reviews from "../components/Reviews/Reviews";
import OrderProject from "../components/OrderProject/OrderProject";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Exclusive/>
        <Create/>
        <HowWork/>
        <Projects/>
        <Reviews/>
        <OrderProject/>
        <Footer/>
    </div>
  );
}

export default App;
