import React, {useState} from 'react';
import './App.css';
import Home from "./Page/Home/Home"
import Contant from "./Page/Content/Content"
import Presentation from "./Page/presentation/Presentation"
import Footer from "./component/Footer/Footer"
import Layout from "./Page/Layout/Layout";


function App() {

  return (
      <Layout >
          <Presentation/>
          <Contant/>
      </Layout>
  );
}

export default App;
