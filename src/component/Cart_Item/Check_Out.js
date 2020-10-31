import React from "react"
import "./Check_Out.css"
import Image from "../../assets/image/Image"
import {Button} from "antd";


const CheckOut = (props) => {
    return (
        <div style={{marginTop: 5}}
             className="CheckOut_main container"

        >
            <div className="CheckOut_main_item">
                <div>
                    <img className="check_img" src={Image.beg}/>
                    <div className="img_items">
                        <img className="check_imgs" src={Image.beg}/>
                        <img className="check_imgs" src={Image.beg}/>
                        <img className="check_imgs" src={Image.beg}/>

                    </div>
                </div>

                <div className="check_mainList">
                    <h4>Nakshi Katha 06</h4>

                    <div className="detills_items">
                        <div>
                            <h5>Distributor: </h5>
                            <h5>Product Code: </h5>
                            <h5>Availability: </h5>

                        </div>
                        <div className="detills_itemsTwo">
                            <h5>Unknown</h5>
                            <h5>Product 3 </h5>
                            <h5>In Stock</h5>

                        </div>

                    </div>

                    <h5>BTD:200</h5>


                    <h4>Quantity</h4>
                    <div className="Quantity">
                        <img  src={Image.down}/>
                        <h4>1</h4>
                        <img  src={Image.up}/>

                    </div>

                    <div className="check_buttons">
                        <Button className="check_button"><img className="check_outCart" src={Image.cart2}/>ADD TO CART</Button>
                        <Button className="save_button"><img className="save_cart" src={Image.love}/>Wishlist</Button>
                    </div>


                </div>
            </div>

        </div>
    );
};
export default CheckOut;
