export interface Product{
    _id?: string;
    createdAt?: string | Date;
    updatedAt?: string | Date;
    name: string;
    description: string;
    price: number;
    url_image: string;
    stock: number;
}