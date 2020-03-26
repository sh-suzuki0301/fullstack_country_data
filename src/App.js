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

  const searchForCountries = countries => {
    return countries.filter(c =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <div className="App">
      {isLoading ? (
      <div>Loading countries...</div>
      ) : (
      <div>
      <Search searchTerm={searchTerm}
        handleChange={handleSearchTermChange}
      />
      {searchForCountries(allCountries).length > 10 ? (
        <div>Too many matches,specify another filter</div>
      ) : (
      <Countries countries={searchForCountries}/>
      )}
      </div>
    )}
    </div>
  );
};

export default App;
