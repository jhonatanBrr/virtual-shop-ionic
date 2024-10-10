import apiClient from "./client.api";

export const getCategories = async (): Promise<Category[]> => {
    try {
        const response = await apiClient.get<Category[]>(`https://api.escuelajs.co/api/v1/categories`);
        return response.data;
    } catch (error) {
        console.error('Error fetching category:', error);
        throw error;
    }
};