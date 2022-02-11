import React from "react";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import ContatUsPage from "./ContactUsPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (

    <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route exact path="/Home" element={<MainPage/>}/>
          <Route exact path="/About" element={<AboutPage/>}/>
          <Route exact path="/Contactus" element={<ContatUsPage/>}/>
        </Routes>
    </Router>

    // <div>
    //   <MainPage></MainPage>
    // </div>
  );
}

export default App;
