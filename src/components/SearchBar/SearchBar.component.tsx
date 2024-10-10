import React from 'react';
import { IonSearchbar } from '@ionic/react';
import './SearchBar.style.css';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <IonSearchbar
      value={searchQuery}
      debounce={500} // Añade un retraso de 500ms para evitar búsquedas innecesarias
      onIonInput={(e) => setSearchQuery(e.detail.value!)}
      placeholder="Search products..."
    />
  );
};

export default SearchBar;
