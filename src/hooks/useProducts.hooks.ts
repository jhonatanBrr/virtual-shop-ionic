import { useEffect, useState } from 'react';
import { getProducts } from '../api/products.api';

const useProducts = (
    page: number, 
    limit: number, 
    title:string="red",
    categoryId: number=0
) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // filtrar por nombre, fecha y precio

    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            try {
                const offset = (page - 1) * limit;
                const data = await getProducts(limit, offset, title,0,categoryId);
                setProducts(data);
            } catch (err) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [page, limit, title, categoryId]);

    return { products, loading, error };
};

export default useProducts;
