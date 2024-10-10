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
      onIonInput={(e) => setSearchQuery(e.detail.value!)}
      placeholder="Buscar producto por nombre"
    />
  );
};

export default SearchBar;
