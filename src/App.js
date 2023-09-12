import React from 'react';
import Dashboard from './components/Dashboard';
import ProductForm from './components/ProductForm';
import ProductItem from './components/ProductItem';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <ProductForm />
      <ProductItem />

    </div>
  );
}

export default App;