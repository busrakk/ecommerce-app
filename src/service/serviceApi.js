import { sendRequest } from "./rootApi";

const GET = 'get';
const POST = 'post';

export const productFindApi = async (id, payload = []) => {
    return sendRequest(GET, `/api/product/${id}`, payload);
}

export const productByCategoryApi = async (id, payload = []) => {
    return sendRequest(GET, `/api/product/category/${id}`, payload);
}

export const productByBrandApi = async (id, payload = []) => {
    return sendRequest(GET, `/api/product/brand/${id}`, payload);
}

export const productByFeaturedApi = async (payload = []) => {
    return sendRequest(GET, '/api/featured' ,payload);
}

export const productSaveApi = async (payload = []) => {
    return sendRequest(POST, '/api/product-save', payload);
}

/// user page ///
export const productByUserApi = async (payload = []) => {
    return sendRequest(GET, '/api/product-user' ,payload);
}

export const productByUserCountApi = async (payload = []) => {
    return sendRequest(GET, '/api/product-user-count' ,payload);
}
