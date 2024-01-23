import { Button } from '@mui/material';
import { useState, useEffect } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(storedCart);
    }, []);

    const removeFromCart = (index) => {
        const updatedCart = [...cartItems];
        updatedCart.splice(index, 1);
        setCartItems(updatedCart);
        updateLocalStorage(updatedCart);
    };

    const moveToWishlist = (index) => {
        const itemToMove = cartItems[index];
        const updatedWishlist = [...JSON.parse(localStorage.getItem('wishlist')) || [], itemToMove];
        removeFromCart(index);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    const updateLocalStorage = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const calculateTotal = () => {
        if (cartItems.length === 0) {
            return 0;
        }

        const total = cartItems.reduce((total, item) => {
            const actualPrice = typeof item.actualPrice === 'number' ? item.actualPrice : 0;
            const discountPercentage = typeof item.discountPercentage === 'number' ? item.discountPercentage : 0;
            const itemTotal = actualPrice - (actualPrice * discountPercentage) / 100;
            return total + itemTotal;
        }, 0);

        return total;
    };

    const calculateSavings = () => {
        if (cartItems.length === 0) {
            return 0;
        }

        const savings = cartItems.reduce((savings, item) => {
            const actualPrice = typeof item.actualPrice === 'number' ? item.actualPrice : 0;
            const discountPercentage = typeof item.discountPercentage === 'number' ? item.discountPercentage : 0;
            const itemSavings = (actualPrice * discountPercentage) / 100;
            return savings + itemSavings;
        }, 0);

        return savings;
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f8f8f8', minHeight: '500px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '83vh' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#555' }}>Your cart is empty.</p>
            ) : (
                <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div style={{ flex: 1 }}>
                            {cartItems.map((item, index) => (
                                <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '20px', textAlign: 'left' }}>
                                    <img src={item.Image} alt={item.courseName} style={{ maxWidth: '100%', maxHeight: '150px', marginBottom: '10px', borderRadius: '5px' }} />
                                    <h3 style={{ margin: '10px 0', color: '#333' }}>{item.courseName}</h3>
                                    <p style={{ color: 'green', fontWeight: 'bold', margin: '5px 0' }}>Price: $ {item.actualPrice}</p>
                                    <p style={{ color: 'green', fontWeight: 'bold', margin: '5px 0' }}>Discount: {item.discountPercentage}%</p>
                                    <p style={{ margin: '5px 0' }}>Tags: {item.tags.join(', ')}</p>
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <Button onClick={() => moveToWishlist(index)} sx={{ px: '20px', py: '16px', fontSize: '13px', fontWeight: 600, backgroundColor: '#fff', color: '#000', transition: 'background-color 0.3s, color 0.3s', '&:hover': { backgroundColor: '#000', color: '#fff' } }}>Move to Wishlist</Button>
                                        <Button onClick={() => removeFromCart(index)} sx={{ px: '20px', py: '16px', fontSize: '13px', fontWeight: 600, backgroundColor: '#fff', color: '#000', transition: 'background-color 0.3s, color 0.3s', '&:hover': { backgroundColor: '#000', color: '#fff' } }}>Remove</Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ flex: 1, marginLeft: '20px', textAlign: 'left' }}>
                            <h3 style={{ color: '#333' }}>Price Details</h3>
                            <p>Total Cart Value: $ {calculateTotal()}</p>
                            <p>Total Savings: $ {calculateSavings()}</p>
                            <Button onClick={() => alert('Order placed successfully! Cart will be emptied.')} sx={{ px: '20px', py: '16px', fontSize: '13px', fontWeight: 600, backgroundColor: '#fff', color: '#000', transition: 'background-color 0.3s, color 0.3s', '&:hover': { backgroundColor: '#000', color: '#fff' } }}>Proceed to Checkout</Button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
