import React, {useEffect, useState} from "react"
import CheckOut from "../../component/Cart_Item/Product_Info"
import Layout from "../Layout/Layout";

const ProductInfo=({ match })=>{
  const [product, setProduct] = useState('');

  useEffect(() => {
   //APi ca
    let apiData ={
      title:'Bag',
      price: 100,
      color:'red',
      Stock:'In Stock'
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
export default ProductInfo;
