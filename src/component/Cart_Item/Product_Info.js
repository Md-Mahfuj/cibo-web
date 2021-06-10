import React from "react"
import "./Product_Info.css"
import Image from "../../assets/image/Image"
import {Button} from "antd";
import {useDispatch, useSelector} from "react-redux";
import { addToCart } from "../../store/action/actionType";

const CheckOut = (props) => {
    const {product} = props;
    const products = useSelector(state => state.ProductReducer.Products);
    const dispatch = useDispatch();

    const addCart=()=>{
        const data={
            id: '5',
            title: 'bang',
            price: "BDT-00",
            spePrice: "100",
            url: "www.mahfuj.com"

        };

        dispatch(addToCart(data))

    }

    return (
        <div style={{marginTop: 5}}
             className="CheckOut_main container"

        >
            <div className="CheckOut_main_item">
                <div className="product_and_images">
                    {/*<img className="check_img" src={Image.beg}/>*/}
                    <img className="check_img" src="https://i.pinimg.com/736x/78/7e/22/787e22bcbf5f4d415fb0fefb052389c5.jpg" />

                    <div className="img_items">
                        <img className="check_imgs" src={Image.beg}/>
                        <img className="check_imgs" src={Image.beg}/>
                        <img className="check_imgs" src={Image.beg}/>

                    </div>
                </div>

                <div className="check_mainList">
                    <h4>{product.title}</h4>

                    <div className="detills_items">
                        <div>
                            <h5>Distributor: </h5>
                            <h5>Product Code: </h5>
                            <h5>Availability: </h5>
                            <h5>BDT:</h5>

                        </div>
                        <div className="detills_itemsTwo">
                            <h5>Unknown</h5>
                            <h5>{product.color} </h5>
                            <h5>{product.price}</h5>
                            <h5>{product.spePrice}</h5>

                        </div>

                    </div>
                    {/*<p>{JSON.stringify(products)}</p>*/}


                    {/*<div className="product-color-section">*/}
                    {/*    <div className="product-color">*/}
                    {/*        <h4>Color</h4>*/}
                    {/*        <select className="product-color-select" name="cars" id="cars" >*/}
                    {/*            <option className="product-color-select-option">MultiColor</option>*/}
                    {/*            <option >black</option>*/}
                    {/*            <option >white</option>*/}
                    {/*            <option >red</option>*/}
                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*    <div className="product-size-section">*/}
                    {/*        <h4>Size</h4>*/}
                    {/*        <select className="product-size-select" name="cars" id="cars">*/}
                    {/*            <option >35</option>*/}
                    {/*            <option >36</option>*/}
                    {/*            <option >37</option>*/}
                    {/*            <option >40</option>*/}
                    {/*            <option >42</option>*/}

                    {/*        </select>*/}
                    {/*    </div>*/}
                    {/*</div>*/}


                    <div className="quantity-section">
                        <h4 className="quantity-title">Quantity:</h4>

                        <div className="de-quantity-section">
                            <span className="quantity">-</span>
                            <span className="quantity">6</span>
                            <span className="quantity">+</span>
                        </div>

                        {/*<div className="Quantity">*/}
                        {/*    <img src={Image.down}/>*/}
                        {/*    <h6>30</h6>*/}
                        {/*    <img src={Image.up}/>*/}

                        {/*</div>*/}

                    </div>




                    <div className="check_buttons">
                        <Button onClick={addCart} className="check_button"><img className="check_outCart" src={Image.cart2}/>ADD TO CART</Button>
                        {/*<Button className="check_button"><img className="check_outCart" src={Image.cart2}/>buy</Button>*/}


                        {/*<Button className="save_button"><img className="save_cart" src={Image.love}/>Wishlist</Button>*/}

                    </div>


                </div>
            </div>

        </div>
    );
};
export default CheckOut;
