import axios from 'axios';

const API_URL = 'http://localhost:8000/api/products/';

const getProducts = () => {
  return axios.get(API_URL);
};

const getProduct = (id) => {
  return axios.get(`${API_URL}${id}/`);
};

const productService = {
  getProducts,
  getProduct
};

export default productService;