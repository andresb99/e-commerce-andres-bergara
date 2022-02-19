import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { CartContext } from '../context/CartContext';
import CartItem from '../CartItem/CartItem'


const Cart = () => {
  
  const { clear } = useContext(CartContext);
  const { items } = useContext(CartContext);
  const { removeItem } = useContext(CartContext);


  const handleClear = () => {
    clear()
  }

  return (
    <>
      
      <Container sx={{ mt: 10, mb: 10 }}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={8}>
            {
           
              items?.map( item => {
                const { id, title, price, stock} = item.currentItem.product 
                const handleRemoveItem = () => {
                removeItem(item.currentItem )
              }
                return <CartItem key={id} removeItem={handleRemoveItem} id={id} title = {title} price = {price} stock = {stock} amount = {item.currentItem.amount} />
              })
            } 
            
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box>
                    <Card sx={{ minWidth: 275, height: 429, backgroundColor:'black', color:'white' }}>
                        <CardContent>
                            <Typography sx={{textAlign:'center'}} color='white' variant="h3" component="div">
                                CART
                            </Typography>
                            
                            { items?.map( item => {
                              const { id, title, price, stock} = item.currentItem.product 
                              const amount = item.currentItem.amount
                              return <Typography key={id} id={id} title = {title} price = {price} stock = {stock} amount = {amount} variant="h6" color="white" component="div">
                                    {title}: ${price*amount}
                                </Typography>
                              })
                            } 
                        </CardContent>
                    </Card>
                </Box>  
            </Grid>
            
        </Grid>
        { items.length === 0 ? null : <Button variant="outlined" onClick={handleClear}>Clear</Button> }
    </Container>

    </>
  );
};

export default Cart;