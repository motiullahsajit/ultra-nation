import { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Country/Cart/Cart';
import Country from './components/Country/Country'

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://restcountries.eu/rest/v2/all')
        const data = await res.json()
        return data;
      } catch (error) {
        console.log('Couldnot load data')
      }
    }
    fetchData().then(data => setCountries(data));
  }, [])
  const [cart, setCart] = useState([]);
  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  }
  return (
    <div className="App container">
      <h1 className='text-success py-3 text-center'>Ultra countries: {countries.length}</h1>
      <div className='row'>
        <div className="col-9 row g-4">
          {
            countries.map(country => <Country handleAddCountry={handleAddCountry} country={country} key={country.alpha3Code}></Country>)
          }
        </div>
        <div className="col-3">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
