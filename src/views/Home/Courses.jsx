import { useState } from "react";
import { Box, Button, Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { CourseApi } from "../../data";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
// import Button from "../../components/Button";

const Courses = () => {

    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);

    const addToWishlist = (item) => {
        const userProfileData = JSON.parse(localStorage.getItem('userProfileData'));

        if (userProfileData) {
            const updatedWishlist = [...wishlist, item];
            setWishlist(updatedWishlist);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            alert(`${item.courseName}Course Addes to Wishlist`)
        } else {
            // Show alert or redirect to login page
            alert('Please log in first to add items to the wishlist.');
            // Alternatively, you can redirect the user to the login page
            // history.push('/login');
        }
    };
    const addToCart = (item) => {
        const userProfileData = JSON.parse(localStorage.getItem('userProfileData'));

        if (userProfileData) {
            alert(`${item.courseName} added to Cart`);
            const updatedCart = [...cart, item];
            setCart(updatedCart);
            localStorage.setItem('cart', JSON.stringify(updatedCart));

        } else {
            // Show alert or redirect to login page
            alert('Please log in first to add items to the cart.');
            // Alternatively, you can redirect the user to the login page
            // history.push('/login');
        }
    };


    return (
        <Box sx={{ backgroundColor: '#f2f2f2', py: '30px' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem', textTransform: 'uppercase' }}>
                ‘Discover Latest Courses on Angular’
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {CourseApi.slice(0, 4).map((item, index) => (
                    <Grid item key={index}>
                        <Card sx={{ width: 320, minWidth: 300, height: 610, textAlign: "center", position: 'relative' }}>
                            <CardMedia sx={{ height: 280 }} image={item.Image} />
                            <CardContent>
                                <Box sx={{ p: '20px', height: '215px' }}>
                                    <Typography sx={{ textTransform: 'uppercase', fontWeight: '600', fontSize: '20px', marginBottom: '1rem' }}>
                                        {item.courseName}
                                    </Typography>
                                    <Typography sx={{ textTransform: 'uppercase', fontSize: '16px', color: '#000' }}>
                                        {item.discountPercentage > 0 ? (
                                            <>
                                                $ - {item.actualPrice - (item.actualPrice * item.discountPercentage / 100)}
                                                <Typography sx={{ textDecoration: 'line-through', color: 'error.main', display: 'inline-block', marginLeft: '1rem' }}>
                                                    {item.actualPrice}
                                                </Typography>
                                            </>
                                        ) : (
                                            `$ - ${item.actualPrice} `
                                        )}
                                    </Typography>
                                    <Typography sx={{ textTransform: 'uppercase', fontSize: '16px', color: '#000' }}>
                                        Discount - {item.discountPercentage} %
                                    </Typography>
                                    <Typography sx={{ textTransform: 'uppercase', fontSize: '16px', color: '#000' }}>
                                        Tags - {item.tags.join(', ')}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignitems: 'center', m: '6px' }}>
                                    <Button size="small" variant="contained" onClick={() => addToWishlist(item)} >Add to widhlist</Button>
                                    <Button size="small" variant="contained" onClick={() => addToCart(item)}>Add to Cart</Button>
                                </Box>
                                <Divider />
                                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1rem", gap: "1rem" }}>
                                    <Box>{item.author}</Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box sx={{ display: 'flex', justifyContent: 'center', m: '20px' }}>
                <Link to='/Courses'>
                    <Button title='View All Courses' />
                </Link>
            </Box>
        </Box>
    );
};

export default Courses;
