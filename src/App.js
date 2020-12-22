import React, {useState} from 'react';
import {Provider} from "react-redux"
import store from "./store/reducers/index"
import './App.css';
import Contant from "./Page/Content/Content"
import Presentation from "./Page/presentation/Presentation"
import Layout from "./Page/Layout/Layout";


function App(props) {

  return (
      <Layout>
          <Presentation/>
          <Contant/>
      </Layout>

  );
}

export default App;
