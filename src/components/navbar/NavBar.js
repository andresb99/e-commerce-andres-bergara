import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { NavLink, Link } from 'react-router-dom';

//import components
import CartWidget from '../cart-widget/CartWidget';

//styles
import './navbar.css';
import logo from './icons/logoheisenberg.svg'
import profileImg from './icons/gatito.jpg'


const settings = ['Profile', 'Account', 'Logout'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky" style={{backgroundColor:"black"}}>
      <Container maxWidth="none">
        <Toolbar disableGutters>
          <Link to="/" style={{ display:'flex', alignItems:'center', color: 'white', textDecoration:'none' }} >
          <img src={logo} alt='logo' className="logo" />
            <Typography
              variant="h5"
              noWrap
              style={{fontFamily:"'Anton', sans-serif"}}
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              Heisenberg Games
            </Typography>
          </Link>
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Link style={{textDecoration:'none'}} to='/products' >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography  color='black'  textAlign="center">Products</Typography>
                </MenuItem>
              </Link>

              <Link style={{textDecoration:'none'}} to='/games-reviews' >
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography color='black' textAlign="center">Games Reviews</Typography>
                </MenuItem>
              </Link>

              <Link style={{textDecoration:'none'}} to='/blog' >
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography color='black' textAlign="center">Blog</Typography>
                </MenuItem>
              </Link>

              <Link style={{textDecoration:'none'}} to='/cart'>
                <MenuItem onClick={handleCloseNavMenu}>
                    <Typography color='black' textAlign="center">Cart</Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            style={{fontFamily:"'Anton', sans-serif"}}
            sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' } }}
          >
            Heisenberg Games
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            <NavLink className={({ isActive }) => isActive ? "activeClass" : undefined} style={{textDecoration:'none', color: 'white'}} to='/products'> PRODUCTS </NavLink>
          </Button>
          
            <Button
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              <NavLink className={({ isActive }) => isActive ? "activeClass" : undefined} style={{textDecoration:'none', color: 'white' }} to='/games-reviews'>
                GAMES REVIEWS 
              </NavLink>
            </Button>


          
          <Button
            onClick={handleCloseNavMenu}
            sx={{ my: 2, display: 'block' }}
          >
            <NavLink className={({ isActive }) => isActive ? "activeClass" : undefined} style={{textDecoration:'none', color:'white'}} to='/blog'>BLOG</NavLink>  
          </Button>
          


          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
            <Link to='/cart' >
              <IconButton sx={{ display: { xs: 'none', md: 'inline-block' }, marginRight:{md: 5}}} >
                <CartWidget  />
              </IconButton>
            </Link>  
              
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Gatito" src={profileImg} />
              </IconButton>
            </Tooltip>
            
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;