import './App.css';
import Navbar from './components/navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react'
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  

  const toggleMode= () => {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      document.body.style.color = 'white';
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      // document.title = "TextUtils - Dark Mode is good";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      //   }, 1500);

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black  ';
      document.title = "TextUtils - Light Mode";
    }
  }



  return (
    <>
      {/* <BrowserRouter>
          <Navbar name="TextUtils" home="Home" aboutUs = "About Us" mode={mode} toggleMode = {toggleMode}/>
          <div className = "container my-5"></div>
          <Routes>
            <Route path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode}/>}/>
            <Route path="/about" element={<About mode={mode} toggleMode = {toggleMode}/>} />
          </Routes>
          <div />
    </BrowserRouter> */}
    <Navbar name="TextUtils" home="Home" aboutUs = "About Us" mode={mode} toggleMode = {toggleMode}/>
    <div className = "container my-5">

    <TextForm heading="Enter the text to Analyze" mode={mode}/>

    </div>

    </>
  );
}

export default App;
