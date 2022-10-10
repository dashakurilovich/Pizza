import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import './App.scss';
import { Header } from './components';
import { Cart, Home } from './pages/';
import { setPizzas } from './redux/actions/pizzas'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }, [dispatch])

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