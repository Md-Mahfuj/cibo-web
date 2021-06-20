import React, {useEffect, useState} from "react"
import CheckOut from "../../component/Cart_Item/Product_Info"
import Layout from "../Layout/Layout";
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router";

const ProductInfo = ({match}) => {
    // const [product, setProduct] = useState(null);
    const {id }=useParams();
    const dispatch = useDispatch();
    const {product}=useSelector(state=>state.ProductReducer)
    // console.log(id);
    console.log(product);

    useEffect(()=>{
        dispatch({type:'PRODUCT',id})

    },[dispatch, id]);


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
