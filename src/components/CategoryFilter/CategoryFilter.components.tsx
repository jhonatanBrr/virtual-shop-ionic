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
            <div className="button-group">
                <button
                    className={`custom-button ${categoryId == 0 ? "custom-button-active" : ''}`}
                    onClick={() => setCategoryId(0)}
                >
                    All
                </button>
                {
                    categories.map(category => (
                        <button
                            className={`custom-button ${categoryId == category.id ? "custom-button-active" : ''}`}
                            key={category.id}
                            onClick={() => setCategoryId(category.id)}
                        >
                            {category.name}
                        </button>
                    ))
                }
            </div>
        </div>
    );
};

export default CategoryFilter;
