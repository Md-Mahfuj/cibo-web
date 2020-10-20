import React,{useState} from "react"
import "./Shop_Cart.css"
import { Card } from 'antd';
import Data from "./Data"
import Image from "../../assets/image/Image"

const { Meta } = Card;



const ShopCart=(props)=>{

    return(
        <div className={"main"}>
            {
                props.projectList.map((item,i)=>
                    <a href={"http://localhost:3000/Home"}
                       className={"main_section"}
                    >
                        <Card
                            hoverable


                            className={"cart"}

                        >
                            <div  className={"main_cart"}>
                                <img className={"Cart_imag"}
                                     src={Image.product1}/>
                            </div>
                            <div className={"title"}>
                                <h5 >
                                    {item.title}
                                </h5>
                            </div>

                            <div className={"main_cart_price"}>
                                <h6 >{item.price}</h6>

                            </div>


                        </Card>
                    </a>
                )
            }

        </div>
    );
};
export default ShopCart;