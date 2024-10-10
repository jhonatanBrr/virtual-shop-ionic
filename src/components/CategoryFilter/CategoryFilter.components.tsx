import {
    IonButton,
    IonButtons,
    IonText
} from '@ionic/react';

import './CategoryFilter.style.css';
import useCategories from '../../hooks/useCategories.hooks';
import React from 'react';

interface CategoryFilterProps {
    categoryId: number
    setCategoryId: React.Dispatch<React.SetStateAction<number>>
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
    categoryId,
    setCategoryId
}) => {

    const {
        categories,
        error,
        loading
    } = useCategories();

    return (
        <div className="container">
            <IonButtons className="button-group">
                <IonButton
                    className={`custom-button ${categoryId == 0 ? "custom-button-active" : ''}`}
                    onClick={() => setCategoryId(0)}
                >
                    All
                </IonButton>
                {
                    categories.map(category => (
                        <IonButton
                            className={`custom-button ${categoryId == category.id ? "custom-button-active" : ''}`}
                            key={category.id}
                            onClick={() => setCategoryId(category.id)}
                        >
                            {category.name}
                        </IonButton>
                    ))
                }
            </IonButtons>
            <IonText className="sort-text">Sort by</IonText>
        </div>
    );
};

export default CategoryFilter;
