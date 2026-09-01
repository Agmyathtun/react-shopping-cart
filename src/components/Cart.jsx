function Cart({ cart, onIncrease, onDecrease, onRemove, onClear }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    alert(`Thank you for your order!\n\nTotal items: ${totalItems}\nTotal amount: $${total.toFixed(2)}\n\n(This is a demo – no real payment)`);
    onClear(); // clear cart after checkout
  };

  return (
    <div style={{
      padding: '25px',
      background: '#161b22',
      borderRadius: '12px',
      border: '1px solid #444',
      minHeight: '400px'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ margin: 0, fontSize: '22px' }}>
          Cart ({totalItems})
        </h2>
        {cart.length > 0 && (
          <button
            onClick={onClear}
            style={{
              padding: '6px 12px',
              background: 'transparent',
              color: '#e53e3e',
              border: '1px solid #e53e3e',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            Clear
          </button>
        )}
      </div>

      {cart.length === 0 ? (
        <p style={{ color: '#888', fontStyle: 'italic', marginTop: '40px', textAlign: 'center' }}>
          Your cart is empty
        </p>
      ) : (
        <>
          <div style={{ maxHeight: '420px', overflowY: 'auto', marginBottom: '20px' }}>
            {cart.map(item => (
              <div key={item.id} style={{
                padding: '15px 0',
                borderBottom: '1px solid #333'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <strong style={{ fontSize: '15px' }}>{item.name}</strong>
                  <button
                    onClick={() => onRemove(item.id)}
                    style={{
                      background: 'transparent',
                      color: '#e53e3e',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '14px'
                    }}
                  >
                    ✕
                  </button>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <button
                      onClick={() => onDecrease(item.id)}
                      style={{
                        width: '28px',
                        height: '28px',
                        background: '#333',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}
                    >
                      −
                    </button>
                    <span style={{ minWidth: '24px', textAlign: 'center' }}>{item.quantity}</span>
                    <button
                      onClick={() => onIncrease(item.id)}
                      style={{
                        width: '28px',
                        height: '28px',
                        background: '#238636',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}
                    >
                      +
                    </button>
                  </div>

                  <span style={{ color: '#58a6ff', fontWeight: 'bold' }}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: '1px solid #444',
            paddingTop: '20px',
            marginTop: '10px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '20px'
            }}>
              <span>Total</span>
              <span style={{ color: '#58a6ff' }}>${total.toFixed(2)}</span>
            </div>

            <button
              onClick={handleCheckout}
              style={{
                width: '100%',
                padding: '14px',
                background: '#238636',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;