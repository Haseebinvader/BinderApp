import { Box } from '@mui/material';
import { NavLinks } from '../data'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={copyrightStyle}>
          &copy; 2024 Your Website Name
        </div>
        <div style={linksStyle}>
          {NavLinks.map((item, index) => (
            <Box key={index}>
              <Link to={item.href} style={{textDecoration: 'none', color: '#fff'}}>{item.Value}</Link>
            </Box>
          ))}
        </div>
        <div style={socialIconsStyle}>
          facebook
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const copyrightStyle = {
  flex: '1',
};

const linksStyle = {
  flex: '1',
  textAlign: 'center',
  display: 'flex',
  gap: '2rem'
};

const socialIconsStyle = {
  flex: '1',
  textAlign: 'right',
};

export default Footer;
