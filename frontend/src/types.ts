export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    stock: number;
    createdAt: string;
}

export interface Sale {
    id: number;
    productId: number;
    product?: Product;
    quantity: number;
    totalPrice: number;
    saleDate: string;
}
