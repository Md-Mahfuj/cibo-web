import React from "react"
import Layout from "../Layout/Layout";
import './_index.css'
import {Button} from "antd";
import Image from "../../assets/image/Image";


const Checkout = () => {
    return (
        <Layout>
            <div className="container checkout-page-main-section ">

                    <div className="ck-order-section">
                        <h4 className="ck-checkout-info-title">Checkout information</h4>
                        <div className="checkout-order-item-list">
                            {/*<h4 className="ck-checkout-info-title">Checkout information</h4>*/}
                            {
                                ['','','',''].map(item=>{
                                    return(
                                        <div className="ck-items-cart-section">
                                            <img className='ck-product-image' src={Image.product1}/>


                                            <div className="ck-quantity-title-with-section">
                                                <h6 className="ck-product-title">YC Whitening Green Tea Face Wash</h6>
                                                <div className="ck-quantity-section">
                                                    <span className="quantity">-</span>
                                                    <span className="quantity">6</span>
                                                    <span className="quantity">+</span>
                                                </div>
                                            </div>

                                            <div className="total-amount-and-remove-icon">
                                                <h6 className="ck-product-ammount-title">$5000</h6>
                                                <img className="ck-product-cart-delete-icon" src={Image.deleteIcon}/>

                                            </div>





                                        </div>

                                    )
                                })
                            }

                        </div>

                        {/*checkout information component*/}

                        {/*<div>*/}
                        {/*    <h5 className="order-contact-title">Address </h5>*/}
                        {/*    <input type="text"/>*/}
                        {/*    <h5 className="order-address-title">Contact Number</h5>*/}
                        {/*    <input type="textarea"/>*/}

                        {/*    <h6 className="order-condition-title">* Delivery will be made within 7 to 45 days, depending on product and campaign</h6>*/}
                        {/*    <h6  className="order-condition-title" >* Price included VAT for VAT applicable products</h6>*/}
                        {/*</div>*/}


                    </div>

                <div className="order-summary-main-section">
                    <h4 className="ck-checkout-info-title">Order Summary</h4>
                    <div className="ck-box-shadow">
                        <div className="ck-total-price-section">

                            <div className="ck-total-text-section ">
                                <p>Subtotal</p>
                                <p>Shipping</p>
                                <p>Total</p>

                            </div>
                            <div className="ck-total-text-price-section">
                                <p>456</p>
                                <p>0</p>
                                <p>456</p>

                            </div>

                        </div>
                        <Button  className="ck-checkout-button">Confirm Order</Button>

                    </div>




                </div>


            </div>


        </Layout>
    );
};
export default Checkout;