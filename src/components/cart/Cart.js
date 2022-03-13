import { Card, CardContent, Container, Grid, Typography, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import ModalCart from '../modalCart/ModalCart';
import { AiOutlineDelete } from 'react-icons/ai';
import './cart.css'
import { Link } from "react-router-dom";

const Cart = () => {

  const { removeItem, items, clear, price } = useContext(CartContext);

  const stylesButton = {
    display: 'block',
    margin: '0 auto',
    width: '95%',
    mt: 2,
    mb: 5,
    color: '#9c27b0',
    border: '1px solid #9c27b0',
    "&:hover": {
      opacity: 0.8,
      border: '1px solid #9c27b0',
      boxShadow: '1px 0px 10px 2px rgba(156,39,176,0.75)'
    }
  }
  const handleClear = () => {
    let del = window.confirm("Are you sure you want to remove ALL items from the cart?")
    if (del) {
      clear();
    }
  }

  return (
    <>

      <Container sx={{ mt: 6, mb: 14 }}>
        <h2 className='sliderCart'>YOUR<span className='cartHeader'> CART</span></h2>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8}>
            {

              items?.map(item => {
                const { id, title, price, stock, pictureUrl } = item.currentItem.product
                const handleRemoveItem = () => {
                  removeItem(item.currentItem)
                }
                return <CartItem key={id} removeItem={handleRemoveItem} id={id} pictureUrl={pictureUrl} title={title} price={price} stock={stock} amount={item.currentItem.amount} />
              })
            }

          </Grid>

          <Grid item xs={12} sm={4}>
            <Box>
              <Card sx={{ minWidth: 275, height: '465px', backgroundColor: 'black', color: 'white', p: 2 }}>
                <AiOutlineDelete onClick={handleClear} className="deleteCart" />
                <Typography sx={{ textAlign: 'center', fontSize: '30px', fontWeight: '700' }} color='white' variant="h3" component="div">
                  CHECKOUT
                </Typography>
                <CardContent sx={{ overflow: 'auto', height: '200px' }}>

                  {items?.map(item => {
                    const { id, title, price, stock } = item.currentItem.product
                    const amount = item.currentItem.amount
                    return <Typography sx={{ color: '#888', mb: '15px', fontSize: '17px' }} key={id} id={id} title={title} price={price} stock={stock} amount={amount} variant="h6" component="div">
                      {title}: ${price * amount}
                    </Typography>
                  })
                  }
                </CardContent>
                <Typography sx={{ borderTop: '1px solid #9c27b0', pt: 2, pl: 1, position: 'relative', fontSize: '30px', fontWeight: '700' }} variant="h4" color='white' component="div">
                  TOTAL: ${price}
                </Typography>
                <ModalCart total={price} />
                <Link style={{ textDecoration: 'none' }} to='/category'>
                  <Button sx={stylesButton} variant='outlined'>see more products</Button>
                </Link>
              </Card>
            </Box>
          </Grid>

        </Grid>

      </Container>

    </>
  );
};

export default Cart;