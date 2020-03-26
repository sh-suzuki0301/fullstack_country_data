import React, {useState} from 'react';

const Countries = ({ countries }) => {
    const [showDetails, setShowDetails] = useState([]);

    const toggleDetails = id => {
        let update =[...showDetails];
        update[id] = !update[id]
        setShowDetails(update);  
    };

    const renderCountries = countries.map((c, id) => (
        <div key={c.name}>
            {c.name} <button onClinck={() => toggleDetails(id)}>show</button>
            {showDetails[id] && <Country country={c} />}
        </div>
    ));

    return (
        <div className="Countries">
            {countries.length === 1 ? (
                <Country country={countries[0]} />
            ) : (
                <div>{renderCountries}</div>
            )}
        </div>
    );
};

export default Countries;