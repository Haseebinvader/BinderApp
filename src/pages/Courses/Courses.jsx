import { useState } from "react";
import { Box, Button,Card, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material";
import { CourseApi } from "../../data";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../components/ButtonStyle.css'
const Courses = () => {
    const coursesPerPage = 8;

    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = CourseApi.slice(indexOfFirstCourse, indexOfLastCourse);

    const addToWishlist = (item) => {
        const updatedWishlist = [...wishlist, item];
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
        toast.success(`${item.courseName} added to Wishlist`);
    };

    const addToCart = (item) => {
        toast.success(`${item.courseName} added to Cart`);
        const updatedCart = [...cart, item];
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <Box sx={{ backgroundColor: '#f2f2f2', py: '30px' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem', textTransform: 'uppercase', fontWeight: 600 }}>
                ‘Discover Latest Courses on Angular’
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {currentCourses.map((item, index) => (
                    <Grid item key={index}>
                        <Card sx={{ width: 320, minWidth: 300, height: 605, textAlign: "center", position: 'relative' }}>
                            <CardMedia sx={{ height: 280 }} image={item.Image} />
                            <CardContent>
                                <Box sx={{ p: '10px', height: '210px' }}>
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
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
                {Array(Math.ceil(CourseApi.length / coursesPerPage)).fill().map((_, index) => (
                    <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className="custom-button"
                    >
                        {index + 1}
                    </button>
                ))}
            </Box>
        </Box>
    );
};

export default Courses;
