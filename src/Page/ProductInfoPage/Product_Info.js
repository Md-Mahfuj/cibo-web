import React, {useEffect, useState} from "react"
import CheckOut from "../../component/Cart_Item/Product_Info"
import Layout from "../Layout/Layout";
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router";

const ProductInfo = ({match}) => {
    const [product, setProduct] = useState(null);
    // const {product}=useSelector(state=>state.ProductReducer);
    const id=useParams();
    let dispatch=useDispatch();
    console.log(id);


    useEffect(() => {
        //API call by id
        // const data = await Api.getProductDetails(id);
        let data = {
            title: 'Bag',
            price: 100,
            color: 'red',
            Stock: 'In Stock',
            spePrice:400,
        };        // setProduct(data);

        setProduct(data)
    }, []);
    if(product===null)
        return(<p>lodeing</p>)

    return (
        <Layout>
            <p>{JSON.stringify(match.params.id)}</p>
            <CheckOut product={product}/>
        </Layout>

    );
};
export default ProductInfo;
