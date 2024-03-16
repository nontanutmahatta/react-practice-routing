function ProductList() {
    // Dummy product data (replace with actual data from your backend)
    const products = [
      { id: 1, name: 'Goldfish', price: '$10', description: 'A small, colorful fish that is perfect for beginners.' },
      { id: 2, name: 'Betta Fish', price: '$15', description: 'A beautiful fish known for its vibrant colors and flowing fins.' },
      { id: 3, name: 'Guppy', price: '$5', description: 'A hardy and colorful fish that is easy to care for.' },
    ];
  
    return (
      <div>
        <h2>Products</h2>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p><strong>Price:</strong> {product.price}</p>
              <p>{product.description}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ProductList;