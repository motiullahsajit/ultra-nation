import React from 'react';

const Country = (props) => {
    const { name, flag, capital, timezones, population, currencies, region } = props.country
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='col-lg-4 col-md-6 col-sm-12'>
            <div className="card h-100">
                <img src={flag} alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Capital: {capital}</p>
                    <p>Population: {population}</p>
                    <p>TimeZone: {timezones}</p>
                    <p>Region: {region}</p>
                    <p>Currency: {currencies[0].code}</p>
                </div>
                <button onClick={()=>handleAddCountry(props.country)} className='btn btn-success'>Add Country</button>
            </div>
        </div>
    );
};

export default Country;