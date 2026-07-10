import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../CartSlice'; // Adjust if necessary
import { Link } from 'react-router-dom';

const products = [
  {
    category: 'Indoor',
    items: [
      { id: 1, name: 'Fiddle Leaf Fig', price: 25, image: 'fiddle_leaf.jpg' },
      { id: 2, name: 'Snake Plant', price: 15, image: 'snake_plant.jpg' },
      { id: 3, name: 'Rubber Plant', price: 20, image: 'rubber_plant.jpg' },
      { id: 4, name: 'Peace Lily', price: 18, image: 'peace_lily.jpg' },
      { id: 5, name: 'ZZ Plant', price: 22, image: 'zz_plant.jpg' },
      { id: 6, name: 'Areca Palm', price: 30, image: 'areca_palm.jpg' },
    ],
  },
  {
    category: 'Succulents',
    items: [
      { id: 7, name: 'Aloe Vera', price: 8, image: 'aloe_vera.jpg' },
      { id: 8, name: 'Jade Plant', price: 12, image: 'jade_plant.jpg' },
      { id: 9, name: 'Echeveria', price: 10, image: 'echeveria.jpg' },
      { id: 10, name: 'Sedum', price: 9, image: 'sedum.jpg' },
      { id: 11, name: 'Haworthia', price: 11, image: 'haworthia.jpg' },
      { id: 12, name: 'Burro\'s Tail', price: 14, image: 'burros_tail.jpg' },
    ],
  },
  {
    category: 'Outdoor',
    items: [
      { id: 13, name: 'Lavender', price: 16, image: 'lavender.jpg' },
      { id: 14, name: 'Rose Bush', price: 25, image: 'rose_bush.jpg' },
      { id: 15, name: 'Hydrangea', price: 22, image: 'hydrangea.jpg' },
      { id: 16, name: 'Boxwood', price: 30, image: 'boxwood.jpg' },
      { id: 17, name: 'Camellia', price: 28, image: 'camellia.jpg' },
      { id: 18, name: 'Gardenia', price: 24, image: 'gardenia.jpg' },
    ],
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem({ 
      name: product.name, 
      image: `images/${product.image}`, 
      cost: product.price 
    }));
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={{ padding: '10px', backgroundColor: '#eee' }}>
        <Link to="/">Home</Link> |{' '}
        <Link to="/about">About Us</Link> |{' '}
        <Link to="/cart">Cart</Link>
      </nav>

      {products.map((category) => (
        <div key={category.category}>
          <h2>{category.category}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {category.items.map((product) => (
              <div key={product.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '150px' }}>
                <img src={`images/${product.image}`} alt={product.name} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
                <h4>{product.name}</h4>
                <p>Price: ${product.price}</p>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
