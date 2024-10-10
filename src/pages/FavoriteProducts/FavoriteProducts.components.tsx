import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import './FavoriteProducts.style.css';

const FavoriteProducts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>favorites</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* Aquí va el contenido de la página de productos */}
        <h2>Products List</h2>
      </IonContent>
    </IonPage>
  );
};

export default FavoriteProducts;
