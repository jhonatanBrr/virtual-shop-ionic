import apiClient from "./client.api";

const querys = (title: string, price: number, categoryId: number) => ({
    title: `&title=${title}`,
    price: `&price=${price}`,
    categoryId: `&categoryId=${categoryId}`
})

const createQueryFilter = (
    title: string, 
    price: number, 
    categoryId: number
): string => {
    const initQuerys = querys(title, price, categoryId);
    const queryFilter = `
        ${title && title != '' ? initQuerys.title : ''}
        ${categoryId && categoryId != 0 ? initQuerys.categoryId : ''}
        ${price && price != 0 ? initQuerys.price : ''}
    `.trim();
    return queryFilter;
}

export const getProducts = async (
    title: string='', 
    price: number=0, 
    categoryId: number=0
): Promise<Product[]> => {
    try {
        const response = await apiClient.get<Product[]>(`products?${createQueryFilter(title, price, categoryId)}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
