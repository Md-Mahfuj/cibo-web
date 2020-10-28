import React from "react"
import Home from "../Home/Home"
import Footer from "../../component/Footer/Footer"
import CheckOut from "../../component/Cart_Item/Check_Out"
import Layout from "../Layout/Layout";



const CheckPage=({ match })=>{
    return(
        <Layout>
          <p>{JSON.stringify(match.params.id)}</p>
            <CheckOut/>
        </Layout>

    );
};
export default CheckPage;
