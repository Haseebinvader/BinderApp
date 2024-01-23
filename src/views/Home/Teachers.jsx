import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { teacherData } from "../../data";

const Teachers = () => {
    return (
        <Box sx={{ backgroundColor: '#f2f2f2', py: '30px' }}>
            <Typography variant="h4" sx={{ textAlign: 'center', marginBottom: '2rem', textTransform: 'uppercase' }}>
                Our Leading Tutors
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {teacherData.map((item, index) => (
                    <Grid item key={index}>
                        <Card sx={{ maxWidth: 320, height: 'auto', textAlign: "center" }}>
                            <CardMedia sx={{ height: 250 }} image={item.Image} />
                            <CardContent>
                                <Box sx={{ p: '10px' }}>
                                    <Typography variant="h5" sx={{ textTransform: 'uppercase', fontWeight: '600', fontSize: '20px', marginBottom: '1rem' }}>
                                        {item.Name}
                                    </Typography>
                                    <Typography variant="subtitle1" sx={{ textTransform: 'uppercase', fontSize: '16px', color: 'text.secondary', marginBottom: '0.5rem' }}>
                                        {item.Experience}
                                    </Typography>
                                    <Typography variant="h6" sx={{ textTransform: 'uppercase', fontSize: '20px', color: 'primary.main' }}>
                                        {item.Qualification}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Teachers;
