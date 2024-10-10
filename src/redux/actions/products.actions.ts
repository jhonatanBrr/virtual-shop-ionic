import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/products.api";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async ({ page, limit, title, categoryId }: { page: number; limit: number; title: string; categoryId: number }) => {
        const offset = (page - 1) * limit;
        const products = await getProducts(limit, offset, title, 0, categoryId);
        return products;
    }
);