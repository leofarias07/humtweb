import React, { Component } from 'react';
import Header from "./components/Header";
import Main from "./pages/main";
import api from "./services/api";

import "./styles.css"
const App = () =>(
  <div className="App">
    <Header />
    <Main />
  </div>
  
);


export default App;
