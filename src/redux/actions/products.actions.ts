import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/products.api";

interface fetchProductsProps { 
    title: string 
    categoryId: number
    price: number
} 

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ title, categoryId, price }: fetchProductsProps ) => {
        const products = await getProducts(title, price, categoryId);
        return products;
    }
);