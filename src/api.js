import axios from "axios"

export const fetchProductList = async() => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/api/allproduct`)
    return data;
}

export const fetchProduct = async(id) => {
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/api/productdetail/${id}`)
    return data;
}