import React, {useState} from "react";
import "./Contant.css"
import Data from "../../component/Cart_Item/Data";
import ShopCart from "../../component/Cart_Item/Shop_Cart"
import CheckOut from "../../component/Cart_Item/Product_Info"

const Content=(props)=>{
    const [projectList, setShop] = useState(Data.Shop);
    const [project1, setShop1] = useState(Data.Shop1);






    return(

        <div className="container contant ">
            <h4 className="Fashion_title" >Fashion For Men</h4>
            

            <ShopCart projectList={projectList}  />
            <h4 className="Fashion_title">Fashion For Men</h4>

            <ShopCart projectList={project1}  />














        </div>



    );
};
export default Content;
