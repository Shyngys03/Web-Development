import React from 'react';
import './App.css';
import ProductItem from './ProductItem';
import { products } from './data';

const App = () => {
  
  return (
    
    <div className="App">
      
      <h1>Online Store</h1>
      <div className="product-list">
        
        {products.map((product) => (
          <ProductItem key={product.asin} product={product} />
        ))}

      </div>
      
    </div>
  );
};

export default App;
