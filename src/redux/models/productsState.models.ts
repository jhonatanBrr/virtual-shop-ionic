export interface ProductsState {
    products: Product[];
    loading: boolean;
    error: string | null;
}