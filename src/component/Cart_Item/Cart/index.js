import React, {useState} from "react"
import './Cart.css'
import Image from '../../../assets/image/Image'
import {useHistory} from "react-router";

import {Button} from "antd";
import {useSelector, useDispatch} from "react-redux";
import CartReducer from "../../../store/reducers/CartReducer";


const Cart = (props) => {

    const {products, totalPrice, totalQuantities} = useSelector(state => state.CartReducer);
    const dispatch = useDispatch();
    console.log(totalPrice);
    const history = useHistory();
    // const products = useSelector(state => state.ProductReducer.Products);


    return (
        <div className={props.cartClose ? 'cart-side-bar-section' : 'cart-side-bar-section-close'}>
            <div className="cart-side-bar">
                <div className="close-and-my-cart">
                    <h4 className="my-cart-title">My Cart</h4>
                    <img onClick={() => props.setCartClose(false)} className="cart-side-bar-close-icon"
                         src={Image.close}/>

                </div>
                <hr/>
                {
                    products.length > 0 ?
                        <div>
                            <div className="m">
                                {

                                    products.map(item => {
                                        return (
                                            <div>
                                                <div key={item._id} className="my-cart-main-section">
                                                    <div>
                                                        <img className="product-cart-image" src={item.image}/>

                                                    </div>
                                                    <div className="cart-title-and-increase-section">
                                                        <p className="cart-level">{item.name} </p>
                                                        <div className="product-cart-price-and-quntity">
                                                            <p className="product-cart-price">{item.price}</p>
                                                            <p className="product-cart-price">X {item.quantity}</p>
                                                            <p className="product-cart-price">={item.price * item.quantity}</p>

                                                        </div>
                                                        <div className="product-increase-section">

                                                            <span onClick={() => dispatch({
                                                                type: 'DEC',
                                                                payload: item._id
                                                            })} className="cart-down-quantity">-</span>
                                                            <span className="cart-down-quantity">{item.quantity}</span>
                                                            <span onClick={() => dispatch({
                                                                type: 'INC',
                                                                payload: item._id
                                                            })} className="cart-down-quantity">+</span>
                                                        </div>

                                                    </div>
                                                    <div className="product-delete-section"
                                                         onClick={() => dispatch({type: 'REMOVE', payload: item._id})}>
                                                        <img className="product-cart-delete-icon"
                                                             src={Image.deleteIcon}/>

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
                                        <p>Total Items</p>
                                        <p>Shipping</p>
                                        <p>Total Price</p>

                                    </div>
                                    <div className="cart-total-text-price-section">
                                        <p>{totalQuantities}</p>
                                        <p>0</p>
                                        <p>{totalPrice}</p>

                                    </div>
                                </div>

                                <Button onClick={() => {
                                    history.push("/Checkout")
                                }} className="checkout-button"><img className="checkout-imge" src={Image.cart2}/>Proceed
                                    to Checkout</Button>


                            </div>
                        </div>

                        : "your cart is empty!"
                }


            </div>

        </div>
    );
};

export default Cart;