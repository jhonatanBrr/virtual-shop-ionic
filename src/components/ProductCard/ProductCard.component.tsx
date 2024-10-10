import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonImg, IonText, IonIcon } from '@ionic/react';
import './ProductCard.style.css';
import { heartOutline, star, starHalf } from 'ionicons/icons';

interface ProductCardProps {
  title: string;
  price: number;
  images: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, price, images }) => {
  return (
    <IonCard className="product-card">
      <IonCardContent>
        <div className="favorite-icon">
          <IonIcon icon={heartOutline} />
        </div>
        <IonImg src={images} alt="Air Max Motion 2" className="product-image" />
        <h2 className="product-title">{title}</h2>
        <IonText color="primary">
          <p className="product-price">{price}</p>
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