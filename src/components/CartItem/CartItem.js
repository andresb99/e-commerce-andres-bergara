import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import { AiOutlineDelete } from 'react-icons/ai';

import './cartItem.css'

const CartItem = ({ removeItem, id, title, price, stock, amount, pictureUrl }) => {


  const handleRemoveItem = () => {
    let del = window.confirm(`Are you sure you want to remove ${title} from cart?`);
    if (del) {
      removeItem();
    }
  }

  const styleTitle = {
    fontSize: '25px',
    width: '82%',
    display: 'inline-block',
    textShadow: "0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #9c27b0, 0 0 30px #9c27b0, 0 0 40px #9c27b0, 0 0 55px #9c27b0, 0 0 75px #9c27b0;",
    transition: '300ms',
    "&:hover": {
      color: '#9c27b0;'
    }
  }

  return (
    <Card sx={{ minWidth: 275, mb: 3, backgroundColor: 'black', color: 'white', borderBottom: '1px solid #9c27b0' }}>
      <CardContent sx={{ padding: '0px!important' }}>
        <Grid sx={{ textAlign: 'center', margin: '0 auto' }} container spacing={2}>
          <Grid sx={{ padding: '0px!important', width: '40%!important' }} item xs={12} sm={6} md={6}>
            <img style={{ width: '100%' }} alt={title} src={pictureUrl} />
          </Grid>
          <Grid sx={{ padding: '0px!important', textAlign: 'left', paddingLeft: '25px!important', paddingTop: '20px!important', mb: 3 }} item xs={12} sm={6} md={6}>
            <Link style={{ textDecoration: 'none' }} to={`/item/${id}`}>
              <Typography variant='h3' sx={styleTitle} color="white" gutterBottom>
                {title}
              </Typography>
            </Link>
            <AiOutlineDelete onClick={handleRemoveItem} className='trash' />
            <Typography sx={{ mt: 3, mb: 1.5, fontSize: '15px', color: '#888' }} variant="h5" component="div">
              PRICE: ${price}
            </Typography>
            <Typography sx={{ mb: 1.5, fontSize: '15px', color: '#888' }} >
              STOCK : {stock}
            </Typography>
            <Typography sx={{ fontSize: '15px', color: '#888' }} variant="body2">
              CANTIDAD SELECCIONADA : {amount}
              <br />
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CartItem