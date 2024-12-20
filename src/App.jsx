import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Counter from "./Components/Counter";
import Faculty from "./Components/Faculty";
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Section1 from "./Components/Section1";
import Services from "./Components/Services";
import Test from "./Components/Test";
import TestAgain from "./Components/TestAgain";
import Footer from "./Components/Footer";
import Dummy from "./Components/Dummy";
import NotFound from "./Components/NotFound";
import Products from "./Components/Products";

function App(){
    return(
       <>
       
       <Navbar/>
       <Dummy/>
        <Routes>
            <Route path='' element={<Section/>} />
            <Route path='about' element={<About/>} />
            <Route path='services' element={<Services/>} />
            <Route path='faculty' element={<Faculty/>} />
            <Route path='products' element={<Products/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
        </>
    )
}


export default App;