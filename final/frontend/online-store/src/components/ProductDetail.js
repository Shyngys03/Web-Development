import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productService from '../services/productService';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    productService.getProduct(id).then(response => setProduct(response.data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductDetail;