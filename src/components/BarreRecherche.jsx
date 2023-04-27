import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const BarreRecherche = () => {
  const [recherche, setRecherche] = useState('');
  const history = useHistory();



  return (
    <div>
      <input
      className='inputRecherche'
        type="text"
        placeholder="Rechercher un animé"
      />
    </div>
  );
};

export default BarreRecherche;
