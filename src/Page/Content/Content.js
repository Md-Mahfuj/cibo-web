import React, {useState} from "react";
import "./Contant.css"
import Data from "../../component/Cart_Item/Data";
import ShopCart from "../../component/Cart_Item/Shop_Cart"
import CheckOut from "../../component/Cart_Item/Product_Info"
import TestCart from "../../component/Cart_Item/test_cart";
import KisiCard from "../../component/Kisi/Kisi_homeCard"

const Content=(props)=>{
    const [projectList, setShop] = useState(Data.Shop);
    const [project1, setShop1] = useState(Data.Shop1);

    console.log(Data.Shop);



    return(

        <div className="container contant ">
            <h4 className="Fashion_title" >বাংলাদেশ কৃষি</h4>
            <KisiCard/>

            <h4 className="Fashion_title" >Fashion For Men </h4>

            {/*start computer arrary list */}

            <ShopCart projectList={projectList}  />

            {/*end computer arrary list of product*/}

            <h4 className="Fashion_title">Computer design</h4>

            {/*start men  fashion arrary list of product */}

            <ShopCart projectList={project1}  />

            {/*end  men  fashion arrary list of product */}


            {/*<ShopCart projectList={project1}  />*/}



            {/*<h4 className="Fashion_title">bag</h4>*/}

            {/*<TestCart/>*/}


        </div>



    );
};
export default Content;
