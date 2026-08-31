import { useState } from "react";
import ProductCard  from "./components/ProductCard";
import Cart from "./components/Cart";
const products = [
  { id: 1, name: "Wireless Headphones", price: 59.99, category: "Electronics" },
  { id: 2, name: "Smart Watch", price: 129.99, category: "Electronics" },
  { id: 3, name: "Coffee Maker", price: 49.99, category: "Home" },
  { id: 4, name: "Backpack", price: 39.99, category: "Fashion" },
  { id: 5, name: "Notebook Set", price: 12.99, category: "Stationery" },
  { id: 6, name: "Bluetooth Speaker", price: 34.99, category: "Electronics" },
]
function App() {
  const [cart, setCart] = useState([]);

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
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Shopping Cart</h1>
      
      <div style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px,1fr))', gap:'20px'}}>
        {
          products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))
        }
      </div>
      <Cart
        cart={cart}
        onIncreaseQuantity={increaseQuantity}
        onDecreaseQuantity={decreaseQuantity}
        onClearCart={clearCart}
        onRemoveFromCart={removeFromCart} />
    </div>
  );
}

export default App;