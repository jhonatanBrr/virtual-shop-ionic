import React, { useEffect, useState } from 'react';
import { IonPage, IonContent } from '@ionic/react';
import './Products.style.css';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import Paginator from '../../components/Paginator/Paginator.component';
import useDebounced from '../../hooks/useDebounced.hooks';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter.components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchProducts } from '../../redux/actions/products.actions';

const Products: React.FC = () => {

  const [page, setPage] = useState(1);
  const limit = 10;
  const totalPages = Math.ceil(54 / limit);

  const [searcherValue, setSearcherValue] = useState<string>('')
  const { debouncedValue } = useDebounced(searcherValue);
  const [categoryId, setCategoryId] = useState<number>(0);

  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ page, limit, title: debouncedValue, categoryId }));
  }, [dispatch, page, limit, debouncedValue, categoryId]);


  return (
    <IonPage>
      <IonContent>
      {/* <IonSpinner color="primary"></IonSpinner> */}
        <CategoryFilter 
          categoryId={categoryId}
          setCategoryId={setCategoryId}
        />
        <SearchBar searchQuery={searcherValue} setSearchQuery={setSearcherValue} />

        <div className='products-list'>
          {
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
        <Paginator
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        /> 

      </IonContent>
    </IonPage>
  );
};

export default Products;
