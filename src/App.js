import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.scss';
import { Header } from './components';
import { Cart, Home } from './pages/';


function App() {

  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then(json => {
        setPizzas(json.pizzas);
      })
  }, [])

  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
