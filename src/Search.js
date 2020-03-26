import React from 'react';

const Search = ({searchTerm, handleChange}) => {
    return (
        <div className="Search">
            find countries<input type='text' value={searchTerm} onChange={handleChange}/>
        </div>
    );
};

export default Search;