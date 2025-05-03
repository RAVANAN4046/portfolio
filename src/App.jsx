

import React from "react";
import Navbar from "./components/Navbar/Navbar";

import {BrowserRouter,Routes,Route} from "react-router-dom"


import Home from "./pages/home/Home"
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Pageerr from "./pages/pagerror/Pageerr";
import Profile from "./pages/profile/Profile";
import Address from "./pages/profile/address/Address"
import Achievements from "./pages/profile/achievements/Achievements";
import Hobbies from "./pages/profile/hobbies/Hobbies";

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
        <Route path="/profile" Component={Profile}>
        
        
        <Route path="address" Component={Address}/>
        <Route path="achievements" Component={Achievements}/>
        <Route path="hobbies" Component={Hobbies}/>


        </Route>
        

          

          <Route path="*" Component={Pageerr}/>

       

      </Routes>
    
    
    </BrowserRouter>
    
    </>
  )
}


export default App