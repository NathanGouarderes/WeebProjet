import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BarreRecherche = (props) => {
  const [recherche, setRecherche] = useState('');
  const history = useHistory();
  console.log("ALED Barre de recherche");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    const results = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };


  return (
    <div>
      {/* <input
      className='inputRecherche'
        type="text"
        placeholder="Rechercher un animé"
      /> */}
      


    <SearchBar onSearch={handleSearch} />
    <ul>
      {searchResults.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  </div>
  );
};

export default BarreRecherche;
