import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import './Products.style.css';
import ProductCard from '../../components/ProductCard/ProductCard.component';
import SearchBar from '../../components/SearchBar/SearchBar.component';
import useProducts from '../../hooks/useProducts.hooks';
import Paginator from '../../components/Paginator/Paginator.component';
import useDebounced from '../../hooks/useDebounced.hooks';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter.components';

const Products: React.FC = () => {

  const [page, setPage] = useState(1);
  const limit = 10;
  const totalPages = Math.ceil(54 / limit);

  const [searcherValue, setSearcherValue] = useState<string>('')
  const { debouncedValue } = useDebounced(searcherValue);
  const [categoryId, setCategoryId] = useState<number>(0);
  
  const { 
    products, 
    loading, 
    error 
  } = useProducts(page, limit, debouncedValue, categoryId);

  return (
    <IonPage>
      <IonContent>
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
                title={product.title}
                price={product.price}
                images={product.images[0]}
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
