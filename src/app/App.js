import './App.css';
import Header from "../components/Header/Header";
import Exclusive from "../components/Exclusive/Exclusive";
import Create from "../components/Create/Create";
import HowWork from "../components/HowWork/HowWork";
import Projects from "../components/Projects/Projects";
import Reviews from "../components/Reviews/Reviews";

function App() {
  return (
    <div className="App">
        <Header/>
        <Exclusive/>
        <Create/>
        <HowWork/>
        <Projects/>
        <Reviews/>
    </div>
  );
}

export default App;
