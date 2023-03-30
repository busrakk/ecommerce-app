import { sendRequest } from "./rootApi";

const GET = 'get';
const POST = 'post';

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
