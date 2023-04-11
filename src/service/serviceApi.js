import { sendRequest } from "./rootApi";

const POST = 'post';

export const productSaveApi = async (payload = []) => {
    return sendRequest(POST, '/api/product-save', payload);
}

export const productDetailsApi = async (payload = []) => {
    return sendRequest(POST, `/api/admin/product-details`, payload);
}

export const productListApi = async (payload = []) => {
    return sendRequest(POST, '/api/product-list', payload);
}

export const categoryDropdownApi = async (payload = []) => {
    return sendRequest(POST, '/api/category-dropdown-list', payload);
}
