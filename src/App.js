import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';

// import React from "react";
// import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(47 72 92)';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      // document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      // document.title = 'Install TextUtils Now';
      // }, 1000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
    {/* <Router> */}
     {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
 
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
      <div className="container my-3">
 {/* A <Switch> looks through its children <Route>s and
       renders the first one that matches the current URL.  */}
    
      {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          {/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route> */}
      {/* </Switch> */}
      </div>
    {/* </Router> */}
     
     {/* <About/> */}
    
    </>
  );
}

export default App;