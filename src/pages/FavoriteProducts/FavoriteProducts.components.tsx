import React from 'react';
import { 
  IonPage, 
  IonContent 
} from '@ionic/react';

import './FavoriteProducts.style.css';
import { useAppSelector } from '../../redux/hooks';
import ProductCard from '../../components/ProductCard/ProductCard.component';

const FavoriteProducts: React.FC = () => {
  const favorites = useAppSelector(state => state.favorites.favorites);
  return (
    <IonPage>
      <IonContent>
      <div className='products-list'>
          {
            favorites.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default FavoriteProducts;
