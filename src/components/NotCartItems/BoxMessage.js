import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const NotCartItems = ({ title, subtitle, order }) => {

  const stylesButton = {
    border: '1px solid #9c27b0',
    color: '#9c27b0',
    "&:hover": {
      opacity: 0.8,
      border: '1px solid #9c27b0'
    }
  }

  return <>
    <Container maxWidth="lg">
      <Box sx={{ bgcolor: 'black', height: { sx: '60vh', md: '40vh' }, border: '1px solid #9c27b0', mt: 2 }}>
        <Typography sx={{ p: 10, fontSize: '50px' }} variant='h3' color="white" gutterBottom>
          {title}<br />
          <span style={{ fontSize: '19px' }}>{subtitle}</span><br />
          {order && <span style={{ fontSize: '19px' }}>Your Order ID is : {order}<br /></span>}
          <Link style={{ textDecoration: 'none' }} to='/category'>
            <Button sx={stylesButton} variant='outlined'>see more products</Button>
          </Link>

        </Typography>
      </Box>
    </Container>
  </>;
}

export default NotCartItems