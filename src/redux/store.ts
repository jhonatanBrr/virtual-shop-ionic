import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './reducer/products.reducer';
import favoritesReducer from './reducer/favorites.reducer';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
