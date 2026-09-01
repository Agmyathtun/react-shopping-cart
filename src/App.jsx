import { useState, useEffect } from "react";
import ProductCard  from "./components/ProductCard";
import Cart from "./components/Cart";
const products = [
  {
    id: 1, name: "Wireless Headphones", price: 59.99, category: "Electronics",
    image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop"
   },
  {
    id: 2, name: "Smart Watch", price: 129.99, category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop"
   },
  {
    id: 3, name: "Coffee Maker", price: 49.99, category: "Home",
    image: "https://images.unsplash.com/photo-1616662707703-b4e4ab08e59e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNvZmZlZW1ha2VyfGVufDB8fDB8fHww"
   },
  {
    id: 4, name: "Backpack", price: 39.99, category: "Fashion",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop"
   },
  {
    id: 5, name: "Notebook Set", price: 12.99, category: "Stationery",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop"
   },
  {
    id: 6, name: "Bluetooth Speaker", price: 34.99, category: "Electronics",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop"
   },
]
function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('shopping-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  useEffect(() => {
    localStorage.setItem('shopping-cart', JSON.stringify(cart));
  }, [cart]);

  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()) || product.category.toLowerCase().includes(search.toLowerCase()))

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      const updatedCart = cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
    setCart(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter(item => item.quantity > 0);
    setCart(updatedCart);
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <div style={{
      padding: '40px',
      maxWidth: '1400px',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1fr 380px',
      gap: '40px',
      alignItems: 'start'
     }}>
      <div>
        <h1 style={{ marginBottom: '30px' }}>Shopping Cart</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: '100%',
            padding: '10px 16px',
            marginBottom: '25px',
            borderRadius: '8px',
            border: '1px solid #444',
            background: '#0d1117',
            color: 'white',
            fontSize: '16px',
            outline: 'none'
          }}
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px,1fr))', gap: '20px' }}>
          
          {filteredProducts.map(product => (
            <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            />
          ))}
        </div>
        {filteredProducts.length === 0 && (
          <p style={{ color: '#888', textAlign: 'center', marginTop: '40px' }}>
            No products found.
          </p>

        )}
      </div>

      <div style={{ position: 'sticky', top: '20px' }}>
        <Cart
          cart={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
          onClear={clearCart}
          onRemove={removeFromCart} />
      </div>
    </div>
  );
}

export default App;