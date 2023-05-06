import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Summary from './Components/Summary';
import Trailer from './Components/Trailer';
import RecommendedMoves from './Components/RecommendedMoves';
import NavBar from './Components/NavBar';


function App() {
  return (

    <div className="container">
      <NavBar />
      <Header />
      <Trailer />
      <Summary />
      <RecommendedMoves />
    </div >

  );
}

export default App;
