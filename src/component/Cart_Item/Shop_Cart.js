import React,{useState} from "react"
import "./Shop_Cart.css"
import { Card } from 'antd';
import Data from "./Data"

const { Meta } = Card;



const ShopCart=(props)=>{

    return(
        <div className={"main"}>
            {
                props.projectList.map((item,i)=>
                    <a href={"https://www.facebook.com/md.mahfuj.1272010"}
                       className={"main_section"}
                    >
                        <Card
                            hoverable


                            className={"cart"}

                        >
                            <div  className={"main_cart"}>
                                <img className={"Cart_imag"}
                                     src={"https://scontent.fdac25-1.fna.fbcdn.net/v/t1.0-9/79776706_1077879655892660_6715394724091396096_o.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=EP142FYhh3kAX8QPcCJ&_nc_ht=scontent.fdac25-1.fna&oh=125390c03e6aff92fdb34a7c0f225168&oe=5F80D762"}/>
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