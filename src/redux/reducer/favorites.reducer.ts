import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FavoritesState } from '../models/favorites.models';

const initialState: FavoritesState = {
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Product>) => {
      const existingIndex = state.favorites.findIndex(item => item.id === action.payload.id);
      if (existingIndex === -1) {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const updatedFavorites = state.favorites.filter(item => item.id !== action.payload);
      state.favorites = updatedFavorites;
      localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;