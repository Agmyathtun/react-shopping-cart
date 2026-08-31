function Cart({cart, onIncreaseQuantity, onDecreaseQuantity, onClearCart, onRemoveFromCart}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{
      marginTop: '50px',
      padding: '25px',
      background: '#161b22',
      borderRadius: '12px',
      border: '1px solid #444'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: 0 }}> Shopping Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)} items)
        </h2>
        {
          cart.length > 0 && (
            <button onClick={onClearCart} style={{
              padding: '8px 16px',
              background: '#e53e3e',
              color: 'white',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'

            }}>
              Clear Cart
            </button>
          )
        }
      </div>
      {
        cart.length === 0 ? (
          <p style={{ color: '#888', fontStyle: 'italic' }}>
            Your cart is empty. Add some products!</p>
        ) : (
          <>
            <div style={{
              maxHeight: '400px',
              overflowY: 'auto',
              marginBottom: '20px',
            }}>
              {cart.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 0',
                  borderBottom: '1px solid #333'
                }}>
                  <div style={{ flex: 1 }}>
                    <strong>{item.name}</strong>
                    <p style={{ margin: '5px 0', color: '#58a6ff' }}>

                      ${item.price} * {item.quantity} = ${(item.price * item.quantity).toFixed(2)}

                    </p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button onClick={() => onDecreaseQuantity(item.id)}
                      style={{
                        width: '32px',
                        height: '32px',
                        background: '#333',
                        color: 'white',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '18px',
                      }}
                    >
                      -
                    </button>
                    <span style={{ minWidth: '30px', textAlign: 'center', fontSize: '18px' }}>
                      {item.quantity}
                    </span>
                    <button onClick={() => onIncreaseQuantity(item.id)}
                      style={{
                        width: '32px',
                        height: '32px',
                        background: '#238636',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        fontSize: '18px',

                      }}>
                      +
                    </button>
                    <button onClick={() => onRemoveFromCart(item.id)}
                      style={{
                        padding: '6px 12px',
                        background: '#e53e3e',
                        color: 'white',
                        border: 'none',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        marginLeft: '10px'
                      }}
                    >
                      Remove
                    </button>

                  </div>

                </div>
              ))}

            </div>

            <div style={{
              fontSize: '22px',
              fontWeight: 'bold',
              textAlign: 'right',
              marginTop: '15px',
              color: '#58a6ff'
            }}>
              Total: ${total.toFixed(2)}
            </div>

          </>
        )
      }

    </div>
  );
}

export default Cart;