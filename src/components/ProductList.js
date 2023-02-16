import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProducts }  from '../redux/actions/productActions';
import { useEffect } from "react";
import Product from "./Product";

export default function ProductList(){

    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async() =>{
        const response = await axios
        .get('https://fakestoreapi.com/products')
        .catch((err) =>{
            console.log("Error",err);
        })

        dispatch(setProducts(response.data))
        // console.log(response.data);
    } 

    useEffect(() => {
        fetchProducts();
    },[])

    console.log('Products:', products)

    return(
        <div className="ui grid container">
            <Product />
        </div>
    )
}