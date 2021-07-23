import React, {useEffect, useState} from "react"
import CheckOut from "../../component/Cart_Item/Product_Info"
import Layout from "../Layout/Layout";
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router";
import axios from "axios";

const ProductInfo = ({match}) => {
    const [product, setProduct] = useState([]);
    const {_id }=useParams();
    const dispatch = useDispatch();
    // const {product}=useSelector(state=>state.ProductReducer)

    // console.log(id);
    // console.log(product);
    //
    // useEffect(()=>{
    //     dispatch({type:'PRODUCT',_id})
    //
    // },[dispatch, _id]);
    //

    useEffect(()=>{
        const fetchProducts = async () => {
            const data= await axios.get(`/getProduct/${_id}`);
            console.log(data.data);
            setProduct(data.data);

        }
        fetchProducts()
    },[_id])


    if(product===null)
        return(<p>lodeing</p>)

    return (
        <Layout>
            <p>{JSON.stringify(match.params._id)}</p>
            <CheckOut product={product}/>
        </Layout>

    );
};
export default ProductInfo;
