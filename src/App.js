import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [allCountries, setAllCountries] = useState('');
  return (
    <div className="App">
      <Serch />
      <Countries />
    </div>
  );
};

export default App;
