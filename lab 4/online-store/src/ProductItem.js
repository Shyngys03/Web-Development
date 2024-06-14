import React from 'react';
import './ProductItem.css';

const ProductItem = ({ product }) => {
  const shareUrl = `https://www.amazon.com/dp/${product.asin}`;

  const handleShareClick = (platform) => {
    
    let url = '';
    const encodedUrl = encodeURIComponent(shareUrl);

    if (platform === 'whatsapp') {
      url = `https://wa.me/?text=${encodedUrl}`;
    } 
    else if (platform === 'telegram') {
      url = `https://t.me/share/url?url=${encodedUrl}`;
    }

    window.open(url, '_blank');
  };

  return (

    <div className="product-item">
      
      <img src={product.images[0]} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Rating: {product.rating}</p>
      
      <div className="product-links">
        
        <a href={shareUrl} target="_blank" rel="noopener noreferrer">View on Amazon</a>
        <button onClick={() => handleShareClick('whatsapp')}>Share on WhatsApp</button>
        <button onClick={() => handleShareClick('telegram')}>Share on Telegram</button>
      
      </div>
      
      <div className="image-gallery">
        
        {product.images.map((image, index) => (
          <img key={index} src={image} alt={`${product.name} ${index + 1}`} />
        ))}

      </div>
    
    </div>
  );
};

export default ProductItem;
