import React, {useState} from "react"
import './Cart.css'
import Image from '../../../assets/image/Image'
import { useHistory } from "react-router";

import {Button} from "antd";
import {useSelector} from "react-redux";


const Cart = (props) => {
    const history = useHistory();
    const products = useSelector(state => state.ProductReducer.Products);


    return (
        <div className={ props.cartClose?'cart-side-bar-section':'cart-side-bar-section-close'}>
            <div className="cart-side-bar">
                <div className="close-and-my-cart">
                    <h4 className="my-cart-title">My Cart</h4>
                    <img onClick={()=>props.setCartClose(false)} className="cart-side-bar-close-icon" src={Image.close}/>

                </div>
                <hr/>

                <div className="m">
                    {
                        products.map(item => {
                            return (
                                <div>
                                    <div className="my-cart-main-section">
                                        <div>
                                            <img className="product-cart-image" src={Image.product1}/>

                                        </div>
                                        <div className="cart-title-and-increase-section">
                                            <p className="cart-level">{item.title} </p>
                                            <div className="product-cart-price-and-quntity">
                                                <p className="product-cart-price">456</p>
                                                <p className="product-cart-price">X 2</p>

                                            </div>
                                            <div className="product-increase-section">

                                                <span className="cart-down-quantity">-</span>
                                                <span className="cart-down-quantity">30</span>
                                                <span className="cart-down-quantity">+</span>
                                            </div>

                                        </div>
                                        <div className="product-delete-section">
                                            <img className="product-cart-delete-icon" src={Image.deleteIcon}/>

                                        </div>


                                    </div>
                                    <div className="cart-br-down"></div>
                                </div>

                            )

                        })
                    }
                </div>

                <div>

                    {/*<div className="price-label">*/}
                    {/*    <p>Subtotal</p>*/}
                    {/*    <p>47668</p>*/}
                    {/*</div>*/}
                    {/*<div className="price-label">*/}
                    {/*    <p>Shipping</p>*/}
                    {/*    <p>0</p>*/}
                    {/*</div>*/}
                    {/*<div className="price-label">*/}
                    {/*    <p>Total</p>*/}
                    {/*    <p>47668</p>*/}
                    {/*</div>*/}

                    <div className="cart-total-price-section">

                        <div className="cart-total-text-section">
                            <p>Subtotal</p>
                            <p>Shipping</p>
                            <p>Total</p>

                        </div>
                        <div className="cart-total-text-price-section">
                            <p>456</p>
                            <p>0</p>
                            <p>456</p>

                        </div>
                    </div>

                    <Button onClick={()=>{history.push("/Checkout")}} className="checkout-button"><img className="checkout-imge" src={Image.cart2}/>Proceed to Checkout</Button>


                </div>




            </div>

        </div>
    );
};

export default Cart;