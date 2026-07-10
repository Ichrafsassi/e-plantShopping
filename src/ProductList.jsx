import React from 'react';

const products = [
  { id: 1, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 25, image: 'fiddle_leaf.jpg' },
  { id: 2, name: 'Snake Plant', category: 'Indoor', price: 15, image: 'snake_plant.jpg' },
  { id: 3, name: 'Succulent', category: 'Succulents', price: 10, image: 'succulent.jpg' },
  // Add more products as needed
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={`images/${product.image}`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
