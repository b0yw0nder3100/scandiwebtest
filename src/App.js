import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom"

import Products from './Pages/Products';
import SingleProduct from './Pages/SingleProduct';

class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/s' element={<SingleProduct />} />
        </Routes>
      </div>
    );
  }
}

export default App;
