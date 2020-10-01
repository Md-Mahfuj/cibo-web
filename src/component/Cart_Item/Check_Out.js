import React from "react"
import "./Check_Out.css"
import Image from "../../assets/image/Image"
import {Button} from "antd";


const CheckOut = () => {
    return (
        <div style={{marginTop: 5}}
             className="CheckOut_main"

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

                <div>
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
                    <div>
                        <Button type="primary">submit now </Button>

                    </div>


                </div>
            </div>

        </div>
    );
};
export default CheckOut;
