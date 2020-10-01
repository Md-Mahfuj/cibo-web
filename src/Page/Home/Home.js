import React, {useState} from "react"
import Data from "../component/Data"
import ShopCart from "../component/Shop_Cart"


const Home=()=>{
    const [projectList, setShop] = useState(Data.Shop);
    return(
        <div>

            {/*<ShopCart projectList={projectList} />*/}

        </div>
    );
};
export default  Home;