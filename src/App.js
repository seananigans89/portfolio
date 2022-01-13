import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import "react-card-with-image/dist/index.css";

function App() {
  return (
    <div className="appcontainer">
       <BrowserRouter>
        <Header/>

      <Routes> 
        <Route path='home' element={<Home/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
   
  );
}

export default App;


