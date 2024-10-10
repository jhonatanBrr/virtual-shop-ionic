// features/productsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from '../actions/products.actions';
import { ProductsState } from '../models/productsState.models';

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch products';
      });
  },
});

export default productsSlice.reducer;
