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

interface ProductCardProps {
  product: Product
}

const getParsedFavorites = () => {
  const dataLocalStorage = localStorage.getItem("favorites_list");
  return dataLocalStorage ? JSON.parse(dataLocalStorage) : [];
};

const deleteToFavorites = (listFavortites: Product[], id: number) => {
  return listFavortites.filter(item => item.id !== id);
}

const addProductToFavorites = (product: Product) => {
  let dataLocalStorage: Product[] = getParsedFavorites();
  if (dataLocalStorage.some(item => item.id === product.id)) {
    dataLocalStorage = deleteToFavorites(dataLocalStorage, product.id);
  } else {
    dataLocalStorage.push(product)
  }
  localStorage.setItem("favorites_list", JSON.stringify(dataLocalStorage));

}

const isFavorite = (id: number) => {
  const localStorage: Product[] = getParsedFavorites();
  return localStorage.some(item => item.id === id) ? heart : heartOutline;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <IonCard className="product-card">
      <IonCardContent>
        <div className="favorite-icon">
          <IonIcon
            icon={isFavorite(product.id)}
            onClick={() => addProductToFavorites(product)}
          />
        </div>
        <IonImg src={product.images[0]} alt="Air Max Motion 2" className="product-image" />
        <h2 className="product-title">{product.title}</h2>
        <IonText color="primary">
          <p className="product-price">{product.price}</p>
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