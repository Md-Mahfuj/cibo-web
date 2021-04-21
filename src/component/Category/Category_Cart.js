import React from "react"
import { useHistory } from "react-router";


import "./Category_Cart.css"
import {Button} from "antd";
import Image from "./../../assets/image/Image"




const Category =(props)=>{
    const history = useHistory();

    return(




        <div className="Category">
            {
                props.cate.map((item,i)=>
                    <div className="list_items">




                        <div
                            onClick={()=>{history.push("/Desktop")}}
                            className="top-category-main-section">
                            <h6 className="category-title">{item.name}</h6>
                            <img className="category-right-arrow-section" src={Image.rightArrow}/>

                        </div>


                        {/*<a href={"list_item"}>{item.name} </a>*/}


                        {/*<hr className="hr"/>*/}

                        {/*<a href={""} className="link_button"> {item.name}</a>*/}
                    </div>
                )
            }
        </div>



    );
};

export  default Category;