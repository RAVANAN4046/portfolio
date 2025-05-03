

import React from "react";
import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Pageerr from "./pages/pagerror/Pageerr";

import SplashCursor from "../Reactbits/SplashCursor/SplashCursor";

import Crosshair from "../Reactbits/Crosshair/Crosshair";


import Particles from "../Reactbits/Particles/Particles";

import "./App.css"

function App(){

  return(

    <>

    <BrowserRouter>

      <Navbar/>

      

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about/:username" Component={About}/>
        <Route path="/contact" Component={Contact}/>

        <Route path="*" Component={Pageerr}/>

      </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}


export default App