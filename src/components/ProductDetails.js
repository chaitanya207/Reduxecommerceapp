import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import { selectedProduct } from "../redux/actions/productActions";

export default function ProductDetails(){
    const product = useSelector((state) => state.product);
    const { productId } = useParams();
    const dispatch = useDispatch();
    console.log(product);

    const fetchProductDetails = async() =>{
        const response = await axios(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
            console.log(`error ${err}`);
        })

        dispatch(selectedProduct(response.data))
    }

    useEffect(() =>{
        if(productId && productId !==""){
            fetchProductDetails()
        }
    },[productId]);

    return(
        <h1>Product Details</h1>
    )
}