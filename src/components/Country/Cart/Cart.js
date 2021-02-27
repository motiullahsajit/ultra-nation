import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((sum, country) => sum + country.population, 0)
    return (
        <aside className='sticky-top mt-5'>
            <div className='bg-success text-white p-3'>
                <h3>Items Cart ({cart.length})</h3>
                <ul className="list-group my-4">
                    {
                        cart.map((country) => <li key={country.alpha3Code} className="list-group-item bg-success"><h5>{country.name} - {country.population}</h5></li>)
                    }
                </ul>
                <div className="d-grid">
                    <h2 className='py-3 text-center'>Total population: {totalPopulation}</h2>
                </div>
            </div>
        </aside>
    );
};

export default Cart;
