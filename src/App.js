import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';

import './App.scss';
import { Header } from './components';
import { Cart, Home } from './pages/';
import { setPizzas } from './redux/actions/pizzas';

/* function App() {


  useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      setPizzas(data.pizzas)
    })
  }, [])


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home items={pizzas} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App; */

class App extends React.Component {

  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.setPizzas(data.pizzas)
    })
  }
  render() {
    console.log(this.props.items)
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home items={this.props.items} />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setPizzas
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
    filters: state.filters
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App); 