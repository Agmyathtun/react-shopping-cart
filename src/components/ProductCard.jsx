function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #444', borderRadius: '12px', padding: '20px', background: '#161b22', textAlign: 'center', transition: 'transform 0.2s' }}>
            
      <h3 style={{ marginBottom: '10px' }}>{product.name}</h3>
      <p style={{ fontSize: '24px', color: '#58a6ff', margin: '10px 0' }}>${product.price}</p>
      <p style={{ color: '#888', marginBottom: '20px' }}>{product.category}</p>
      <button onClick={() => onAddToCart(product)}
        style={{
          padding: '12px 28px',
          background: '#238636',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px',
          width: '100%'
        }}>
        Add to Cart
      </button>
              
    </div>
  );
}

export default ProductCard;