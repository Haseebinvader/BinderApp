import { Button } from '@mui/material';
import React from 'react';

const Wishlist = () => {
    const [wishlistItems, setWishlistItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState(JSON.parse(localStorage.getItem('cart')) || []);

    React.useEffect(() => {
        // Fetch items from local storage when the component mounts
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        setWishlistItems(storedWishlist);
    }, []);

    const moveItemToCart = (index) => {
        const itemToMove = wishlistItems[index];
        setCartItems((prevCartItems) => [...prevCartItems, itemToMove]);
        setWishlistItems((prevWishlist) => {
            const updatedWishlist = [...prevWishlist];
            updatedWishlist.splice(index, 1);
            return updatedWishlist;
        });
        localStorage.setItem('cart', JSON.stringify([...cartItems, itemToMove]));
        localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    };

    const deleteItemFromWishlist = (index) => {
        const updatedWishlist = [...wishlistItems];
        updatedWishlist.splice(index, 1);
        setWishlistItems(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f2f2f2', minHeight: '83vh' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Wishlist</h2>
            {wishlistItems.length === 0 ? (
                <p style={{ textAlign: 'center' }}>Your wishlist is empty.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {wishlistItems.map((item, index) => (
                        <li key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                            <img src={item.Image} alt={item.courseName} style={{ maxWidth: '100%', maxHeight: '150px', marginBottom: '10px' }} />
                            <h3 style={{ margin: 0 }}>{item.courseName}</h3>
                            <p style={{ color: 'green', fontWeight: 'bold', margin: '5px 0' }}>$ - {item.actualPrice}</p>
                            <p style={{ color: 'green', fontWeight: 'bold', margin: '5px 0' }}>Discount - {item.discountPercentage}</p>
                            <p style={{ margin: '5px 0' }}>Tags - {item.tags.join(', ')}</p>
                            {cartItems.some(cartItem => cartItem.courseName === item.courseName) ? (
                                <span style={{ color: 'green' }}>★ In Cart</span>
                            ) : (
                                <>
                                    <Button onClick={() => moveItemToCart(index)} sx={{ px: '20px', py: '16px', fontSize: '13px', fontWeight: 600, backgroundColor: '#fff', color: '#000', transition: 'background-color 0.3s, color 0.3s', '&:hover': { backgroundColor: '#000', color: '#fff' } }}>Add to Cart</Button>
                                    <Button onClick={() => deleteItemFromWishlist(index)} sx={{ px: '20px', py: '16px', fontSize: '13px', fontWeight: 600, backgroundColor: '#fff', color: '#000', transition: 'background-color 0.3s, color 0.3s', '&:hover': { backgroundColor: '#000', color: '#fff' } }}>Delete</Button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Wishlist;
