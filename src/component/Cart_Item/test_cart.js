import React,{useState} from "react"
import "./Shop_Cart.css"
import { Card } from 'antd';
import Image from "../../assets/image/Image"
import { useHistory } from "react-router";
import {Link} from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"
const { Meta } = Card;

const TestCart=(props)=>{
    const history = useHistory();
    const {Products} = useSelector(state => state.ProductReducer);

    const nextPage = (props)=>{
        // history.push(`/product/123`)
        // history.push(`/product/${item.id}`)
    }


    return(
        <div className={"main"}>
            {
                Products.map((item)=>
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
                    </Link>
                )
            }

        </div>
    );
};
export default TestCart;
