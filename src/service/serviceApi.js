import { sendRequest } from "./rootApi";
const GET = 'get';
// const POST = 'post';

export const productAllApi = async (payload = []) => {
    return sendRequest(GET, '/api/allproduct' ,payload);
}

export const categoryAllApi = async (payload = []) => {
    return sendRequest(GET, '/api/allcategory' ,payload);
}

export const brandAllApi = async (payload = []) => {
    return sendRequest(GET, '/api/allbrand' ,payload);
}

export const productFindApi = async (id, payload = []) => {
    return sendRequest(GET, `/api/product/${id}`, payload);
}

export const productByCategorApi = async (id, payload = []) => {
    return sendRequest(GET, `/api/product/category/${id}`, payload);
}
