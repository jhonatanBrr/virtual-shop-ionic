import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonImg,
  IonText,
  IonIcon
} from '@ionic/react';

import './ProductCard.style.css';
import {
  heartOutline,
  heart,
  star,
  starHalf
} from 'ionicons/icons';
import { truncateText } from '../../utils/utils';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { addFavorite, removeFavorite } from '../../redux/reducer/favorites.reducer';

interface ProductCardProps {
  product: Product
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(state => state.favorites.favorites);
  const isFavorite = favorites.some(item => item.id === product.id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };
  return (
    <IonCard className="product-card">
      <IonCardContent>
      <div className="favorite-icon" onClick={handleFavoriteToggle}>
        <IonIcon color='red' icon={isFavorite ? heart : heartOutline} />
      </div>


        <IonImg src={product.images[0]} alt="Air Max Motion 2" />

        <h2 className="product-title">{truncateText(product.title, 20)}</h2>

        <IonText color="primary">
          <p className="product-price">$ {product.price}</p>
        </IonText>

        <div className="rating">
          <IonIcon icon={star} />
          <IonIcon icon={star} />
          <IonIcon icon={star} />
          <IonIcon icon={star} />
          <IonIcon icon={starHalf} />
        </div>
      </IonCardContent>

    </IonCard>
  );
};

export default ProductCard;