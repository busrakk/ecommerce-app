import axios from "axios"

export const fetchProductList = async() => {
    const {data} = await axios.get("http://127.0.0.1:8000/api/allproduct")
    return data;
}