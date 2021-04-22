import React,{useState} from "react"
import "./Shop_Cart.css"
import { Card } from 'antd';
import Data from "./Data"
import Image from "../../assets/image/Image"
import { useHistory } from "react-router";
import {Link} from "react-router-dom"
const { Meta } = Card;



const ShopCart=(props)=>{
    const [count, setCount] = useState(0);
    const history = useHistory();

    const nextPage = (props)=>{
        // history.push(`/product/123`)
        // history.push(`/product/${item.id}`)
    }


    return(
        <div className="main">
            {
                props.projectList.map((item)=>
                    <Link
                       onClick={nextPage}
                        to={`/product/${item.id}`}

                       className={"main_section"}
                       key={item.id}
                    >


                        <Card
                            hoverable


                            className={"cart"}

                        >
                            <div  className={"main_cart"}>
                                <img className={"Cart_imag"}
                                     src={item.url}/>
                            </div>
                            <div className={"title"}>
                                <h5 className="main-shop-cart-title" >
                                    {item.title}
                                </h5>
                            </div>

                            <div className={"main_cart_price"}>
                                <h6 className="main-shop-cart-title">{item.price}</h6>

                            </div>


                        </Card>
                    </Link>
                )
            }

        </div>
    );
};
export default ShopCart;
