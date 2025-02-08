import axios from 'axios';
import { Product } from './Product';

const API = 'http://localhost:3000/api'

export const getProducts = async () => {
    try {
        return await axios.get <Product[]>(`${API}/productos`);
    } catch (error) {
        console.log(error);
    }
}

export const getProduct = async (id:string) => {
    try {
        return await axios.get <Product>(`${API}/productos/${id}`);
    } catch (error) {
        console.log(error);
    }
}

export const createProduct = async (product: Product) => {
    try {
        return await axios.post(`${API}/productos/`, product);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const updateProduct = async (id:string, product:Product) => {
    try {
        return await axios.put <Product>(`${API}/productos/${id}`, product);
    } catch (error) {
        console.log(error);
    }
}

export const deleteProduct = async (id:string) => {
    try {
        return await axios.delete <Product>(`${API}/productos/${id}`);
    } catch (error) {
        console.log(error);
    }
}
