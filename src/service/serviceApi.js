import { sendRequest } from "./rootApi";

const POST = 'post';

// admin
export const productListApi = async (payload = []) => {
    return sendRequest(POST, '/api/admin/product-list', payload);
}

export const categoryListApi = async (payload = []) => {
    return sendRequest(POST, '/api/admin/category-list', payload);
}

export const categoryDeleteApi = async (id, payload = []) => {
    return sendRequest(POST, `/api/admin/category-delete/${id}`, payload);
}

export const brandListApi = async (payload = []) => {
    return sendRequest(POST, '/api/admin/brand-list', payload);
}

export const brandDeleteApi = async (id, payload = []) => {
    return sendRequest(POST, `/api/admin/brand-delete/${id}`, payload);
}

//

export const getProductListApi = async (payload = []) => {
    return sendRequest(POST, '/api/allproduct', payload);
}


export const productSaveApi = async (payload = []) => {
    return sendRequest(POST, '/api/product-save', payload);
}

export const productUpdateApi = async (id, payload = []) => {
    return sendRequest(POST, `/api/product-update/${id}`, payload);
}

export const productDetailsApi = async (payload = []) => {
    return sendRequest(POST, `/api/product-details`, payload);
}

export const productUserListApi = async (payload = []) => {
    return sendRequest(POST, '/api/product-user-list', payload);
}

export const productDeleteApi = async (id, payload = []) => {
    return sendRequest(POST, `/api/product-delete/${id}`, payload);
}

export const categoryDropdownApi = async (payload = []) => {
    return sendRequest(POST, '/api/category-dropdown-list', payload);
}

export const brandDropdownApi = async (payload = []) => {
    return sendRequest(POST, '/api/brand-dropdown-list', payload);
}

export const addToCartApi = async (id, payload = []) => {
    return sendRequest(POST, '/api/add-to-cart', payload);
}
