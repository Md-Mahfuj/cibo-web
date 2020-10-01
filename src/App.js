import React, {useState} from 'react';
import './App.css';
import Home from "./Page/Home/Home"
import Contant from "./Page/Content/Content"
import Presentation from "./Page/presentation/Presentation"
import Footer from "./component/Footer/Footer"


function App() {

  return (
      <div >
          <Home/>
          <Presentation/>
          <Contant/>
          <Footer/>

      </div>
  );
}

export default App;
