import { sendRequest } from "./rootApi";

const POST = 'post';

export const productSaveApi = async (payload = []) => {
    return sendRequest(POST, '/api/product-save', payload);
}

