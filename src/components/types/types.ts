export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    thumbnail?: string;
}

export interface CustomerData {
    name: string;
    address: string;
    phoneNumber: string;
}