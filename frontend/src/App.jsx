import React from "react";
import { Routes,Route } from "react-router-dom";
import Signuppage from "./Signup";

const App = () => {
  return (
  
  <Routes>
    <Route path="/signup" element={<Signuppage></Signuppage>}></Route>
    

  </Routes>

  )  
  
};

export default App;
