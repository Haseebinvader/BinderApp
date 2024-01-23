import { Box, Grid, Typography } from "@mui/material";
import { Images } from "../../assets";
import { HeroData } from "../../data";
import Button from "../../components/Button";

const Hero = () => {
    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh', flexDirection: { xs: 'column', md: 'column', lg: 'row' } }}>
            <Box sx={{ width: '50%', textAlign: 'center' }}>
                <Typography variant="h2" >{HeroData.Hero_Heading}</Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4 , gap: '2rem'}}>
                    <Box>
                        <Button type="button" title="Get a Demo" />
                    </Box>
                    <Box>
                        <Button type="button" title="View More" />
                    </Box>
                </Box>
            </Box>
            <Box sx={{ textAlign: 'right', width: '30%' }}>
                <img src={Images.herobg} alt="hero-img" style={{ width: '100%' }} />
            </Box>
        </Grid>
    );
};

export default Hero;
