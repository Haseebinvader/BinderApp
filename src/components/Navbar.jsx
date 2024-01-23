import { Box, Grid, Button } from '@mui/material';
import { NavLinks } from '../data';
import { Link } from 'react-router-dom';
import Logo from '../assets/Images/logo.jpg';

const Navbar = () => {
  const userProfileData = JSON.parse(localStorage.getItem('userProfileData'));

  return (
    <Grid container sx={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <Grid item>
        <Link to='/'>
          <img src={Logo} alt="" width='60px' />
        </Link>
      </Grid>
      <Grid item sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '2rem' }}>
        {NavLinks.map((item) => (
          <Box key={item.id}>
            <Link to={item.href} style={{ textDecoration: 'none' }}>
              {item.Value}
            </Link>
          </Box>
        ))}
      </Grid>
      <Grid item>
        {userProfileData ? (
          <Link to='/Login'>
            <Button size='small' variant="outlined" onClick={() => localStorage.clear()}>
              Logout
            </Button>
          </Link>
        ) : (
          <Link to='/Login'>
            <Button size='small' type='button' variant="contained">
              Authentication
            </Button>
          </Link>
        )}
      </Grid>
    </Grid>
  );
};

export default Navbar;
