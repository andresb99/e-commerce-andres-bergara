import { Button, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { CartContext } from '../context/CartContext';
import CartItem from '../CartItem/CartItem';
import ModalCart from '../modalCart/ModalCart';


const Cart = () => {

  const { removeItem, items, clear, price, order } = useContext(CartContext);

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
                    <Card sx={{ minWidth: 275, height: 429, backgroundColor:'black', color:'white', p:2 }}>
                    <Typography sx={{textAlign:'center'}} color='white' variant="h3" component="div">
                        CART
                    </Typography>
                        <CardContent sx={{overflow:'auto', height:'250px'}}>

                            { items?.map( item => {
                              const { id, title, price, stock} = item.currentItem.product 
                              const amount = item.currentItem.amount
                              return <Typography key={id} id={id} title = { title } price = { price } stock = { stock } amount = { amount } variant="h6" color="white" component="div">
                                    { title }: ${ price*amount }
                                </Typography>
                              })
                            } 
                        </CardContent>
                        <Typography sx={{borderTop:'1px solid white', pt:2, pl:1 ,position:'relative',}} variant="h4" color="white" component="div">
                            TOTAL: ${ price }
                        </Typography>
                        <ModalCart total= { price }/>
                    </Card>
                    { items.length === 0 ? null : <Button sx={{mt:1}} variant="outlined" onClick={handleClear}>Clear</Button> }
                </Box>  
            </Grid>
                    
        </Grid>
        
      </Container>

    </>
  );
};

export default Cart;