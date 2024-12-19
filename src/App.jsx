import About from "./Components/About";
import Contact from "./Components/Contact";
import Counter from "./Components/Counter";
import Faculty from "./Components/Faculty";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Section1 from "./Components/Section1";
import Services from "./Components/Services";
import Test from "./Components/Test";

function App(){
    return(
     <div>
        <Navbar/>
        <Section/>
        <Counter/>
        <About/>
        <Services/>
        <Contact/>
        <Faculty/>
        <Test/>
     </div>
    )
}


export default App;