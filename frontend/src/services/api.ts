import axios from 'axios';
import type { Product, Sale } from '../types';

const API_BASE_URL = 'http://localhost:5174/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const productService = {
    getAll: () => api.get<Product[]>('/products'),
    getById: (id: number) => api.get<Product>(`/products/${id}`),
    create: (product: Omit<Product, 'id' | 'createdAt'>) => api.post<Product>('/products', product),
    update: (id: number, product: Product) => api.put(`/products/${id}`, product),
    delete: (id: number) => api.delete(`/products/${id}`),
};

export const saleService = {
    getAll: () => api.get<Sale[]>('/sales'),
    create: (sale: Omit<Sale, 'id' | 'saleDate' | 'totalPrice'>) => api.post<Sale>('/sales', sale),
};

export default api;
