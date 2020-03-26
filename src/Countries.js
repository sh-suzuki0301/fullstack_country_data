import React from 'react';

const Countries = ({ countries }) => {
    const renderCountries = countries.map((c, id) => (
        <div>
            <Country key={id} country={c} />
        </div>
    ));

    return (
        <div className="Countries">
            <div>{renderCountries}</div>
        </div>
    );
};

export default Countries;