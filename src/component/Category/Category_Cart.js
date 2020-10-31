import React from "react"
import { useHistory } from "react-router";


import "./Category_Cart.css"
import {Button} from "antd";





const Category =(props)=>{
    const history = useHistory();

    return(




        <div className="Category">
            {
                props.cate.map((item,i)=>
                    <div className="list_items">


                        <Button
                            type="primary"
                            className="category_button"
                            onClick={()=>{history.push("/Desktop")}}
                        >

                            {item.name}

                        </Button>


                        {/*<a href={"list_item"}>{item.name} </a>*/}


                        <hr className="hr"/>

                        {/*<a href={""} className="link_button"> {item.name}</a>*/}
                    </div>
                )
            }
        </div>



    );
};

export  default Category;