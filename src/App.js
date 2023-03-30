import React from "react";
import { useState } from "react";

// router
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


import "./App.css";
import Navbar from "./components/tut1 navbar/Navbar";
import StateAndEvent from './components/tut2 eventAndState/StateAndEvent';
// import About from "./components/tut1 navbar/About";
// import Error from "./components/tut1 navbar/Error";

function App() {
  // change Mode in navbar
  const [mode, changeMode] = useState("light")

  // change switch name
  const [switchName, changeName] = useState("Light Mode")


  let togglebtn = () => {
    if(mode === 'light'){
      changeMode("dark")
      document.body.style.backgroundColor = '#0d0e30'
      document.body.style.color = 'white'
      changeName('Dark Mode')
      document.title = "React Tutorial In Dark"
    }else{
      changeMode("light")
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      changeName('Light Mode')
      document.title = "React Tutorial In Light"
    }
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title='textUtilties' link1="Home" link2="About" mode={mode} toggleMode={togglebtn} swname={switchName}/>
    <StateAndEvent />
    {/* <Routes>
          <Route path='/' Component={StateAndEvent}/>
          <Route path='/about' Component={About}/>
          <Route Component={Error}/>
        </Routes>
    </Router> */}
    </>
  );
}

export default App;
