import React, {useState, useEffect} from 'react';
import axios from 'axios';

const App = () => {
  const [allCountries, setAllCountries] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState('ture');

  const handleSearchTermChange = e => setSearchTerm(e.target.value);

  const countriesApi = "https://restcountries.eu/rest/v2/all";
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const response = await axios.get(countriesApi);
      setAllCountries(response.data);
      setIsLoading(false);
    };
    getData();
  },[]);

  return (
    <div className="App">
      <Search />
      <Countries />
    </div>
  );
};

export default App;
