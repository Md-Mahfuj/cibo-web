import React, {useState} from 'react';
import {Provider} from "react-redux"
import store from "./store/reducers/index"
import './App.css';
import Home from "./Page/Home/Home"
import Contant from "./Page/Content/Content"
import Presentation from "./Page/presentation/Presentation"
import Footer from "./component/Footer/Footer"
import Layout from "./Page/Layout/Layout";


function App() {

  return (
      <Provider store={store}>
      <Layout >
          <Presentation/>
          <Contant/>
      </Layout>
      </Provider>
  );
}

export default App;
