import React, {useEffect, useState} from "react"
import Home from "../Home/Home"
import Footer from "../../component/Footer/Footer"
import CheckOut from "../../component/Cart_Item/Check_Out"
import Layout from "../Layout/Layout";



const CheckPage=({ match })=>{
  const [product, setProduct] = useState('');
  useEffect(() => {
   //APi ca
    let apiData ={
      title:'Bag',
      price: 100,
      color:'red'
    };
    setProduct(apiData)

  }, []);
    return(
        <Layout>
          <p>{JSON.stringify(match.params.id)}</p>
            <CheckOut product={product}/>
        </Layout>

    );
};
export default CheckPage;
