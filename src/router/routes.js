import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import App from "../App";
import history from './history';
import ProductInfo from "../Page/ProductInfoPage/Product_InfoPage"
import Desktop from "../Page/Desktop/index"
import Checkout from '../Page/CheckoutPage/'
import SignIN from "../component/sign_in";

import KisiPage from './../Page/Kisi_page'


export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/product/:_id" component={ProductInfo} />
                    <Route path="/Desktop" component={Desktop} />
                    <Route path="/Checkout" component={Checkout} />
                    <Route path="/sign" component={SignIN}/>
                    <Route path="/kisi" component={KisiPage}/>

                </Switch>
            </Router>
        )
    }
}
