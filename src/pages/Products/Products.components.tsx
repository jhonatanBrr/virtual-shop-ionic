import React, { useEffect, useState } from 'react';
import { IonPage, IonContent, IonSpinner, IonItem, IonLabel, IonRange, IonButton } from '@ionic/react';
import './Products.style.css';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import useDebounced from '../../hooks/useDebounced.hooks';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter.components';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchProducts } from '../../redux/actions/products.actions';

const Products: React.FC = () => {
  const [searcherValue, setSearcherValue] = useState<string>('')
  const { debouncedValue: debouncedSearchValue } = useDebounced(searcherValue);

  const [priceValue, setPriceValue] = useState<number>(0)
  const { debouncedValue: debouncedPriceValue } = useDebounced(priceValue);

  const [categoryId, setCategoryId] = useState<number>(0);

  const dispatch = useAppDispatch();
  const {
    products,
    loading,
    error
  } = useAppSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts({
      title: String(debouncedSearchValue),
      categoryId,
      price: Number(debouncedPriceValue)
    }));
  }, [dispatch, debouncedSearchValue, debouncedPriceValue, categoryId]);

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <IonPage>
      <IonContent>
        {
          loading ? (
            <div className='full-screen-content'>
              <IonSpinner color="primary"></IonSpinner>
            </div>
          ) : (
            <>
              <CategoryFilter
                categoryId={categoryId}
                setCategoryId={setCategoryId}
              />
              <SearchBar
                searchQuery={searcherValue}
                setSearchQuery={setSearcherValue}
              />
              <div className='content-price-filter'>
                <p>Filtra por precio: </p>
                <input
                  className='price-Input'
                  type="number"
                  placeholder=''
                  value={priceValue}
                  onInput={
                    (e: React.ChangeEvent<HTMLInputElement>) =>
                      setPriceValue(Number(e.target.value))
                  }
                />
              </div>

              <div className='products-list'>
                {
                  products.length > 0 ? (
                    products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                      />
                    ))
                  ) : (
                    <div className='full-screen-content'>
                      <p>No hay productos para mostrar</p>
                    </div>
                  )
                }
              </div>
            </>
          )
        }
      </IonContent>
    </IonPage>
  );
};

export default Products;
