import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Slide from "./Slider/Slide";
import Navbar from "./Slider/Navbar";

import Projects from "./Components/Projects";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Slide  ftext1={'about your'} ftext2={'next'} ftext3={'project .'}  />} />
        <Route path="/our-works" element={<Projects ftext1={'contact'} ftext2={'us'} />} />
        <Route path="/contacts" element={<Contacts ftext1={'Portfolio.'}  />} />
      </Routes>
     
    </BrowserRouter>

    // <div className="App ">
    //  <Slide/>
    // </div>
  );
}

export default App;
