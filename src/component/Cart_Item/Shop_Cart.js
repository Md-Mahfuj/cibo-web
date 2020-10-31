import React,{useState} from "react"
import "./Shop_Cart.css"
import { Card } from 'antd';
import Data from "./Data"
import Image from "../../assets/image/Image"
import { useHistory } from "react-router";
const { Meta } = Card;



const ShopCart=(props)=>{
    const [count, setCount] = useState(0);
    const history = useHistory();

    const nextPage = ()=>{
        history.push(`/product/123`)
    }

    return(
        <div className={"main"}>
            {
                props.projectList.map((item,i)=>
                    <a
                       onClick={nextPage}
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
