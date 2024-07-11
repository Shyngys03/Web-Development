import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact component={ProductList} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Routes>
    </Router>
  );
}

export default App;