function ProductCard({ product, onAddToCart }) {
  return (
    <div style={{ border: '1px solid #444', borderRadius: '12px', padding: '20px', background: '#161b22', textAlign: 'center', transition: 'transform 0.2s' }}>
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          display:'block'
        }}
      />
      <div style={{padding:'16px'}}>
        <h3 style={{margin:'0 0 8px 0', fontSize:'16px' }}>{product.name}</h3>

        <p style={{ margin: '0 0 6px 0', color:'#888', fontSize:'13px' }}>${product.category}</p>

        <p style={{ margin:'0 0 16px 0', fontSize:'20px', color:'#58a6ff', fontWeight:'bold' }}>{product.price}</p>

        <button onClick={() => onAddToCart(product)}
          style={{
            width: '100%',
            padding: '10px',
            background: '#238636',
            color: 'white',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight:'500'
          }}>
          Add to Cart
        </button>
      </div>        
              
    </div>
  );
}

export default ProductCard;