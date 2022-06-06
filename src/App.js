import React from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
// IMPORT PAGES
import Home from "./pages/Home";

function App() {
    // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
    const URL = "https://grattitudebackend.herokuapp.com/";
  
    return (
        <div className="App">
        <Header />
         <Routes>
           <Route exact path="/" element={<Home/>}/>
         </Routes>
         <Footer />
       </div>
     );
  }
  
  export default App;