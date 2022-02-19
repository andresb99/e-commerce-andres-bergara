import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CartItem = ({ removeItem ,id, title, price, stock, amount}) => {


  return (
    <Card sx={{ minWidth: 275, mb: 1, backgroundColor:'black', color:'white' }}>
      <CardContent>
        <Typography variant='h3'  color="white" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
          ${price}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="white">
          STOCK : {stock}
        </Typography>
        <Typography variant="body2">
           CANTIDAD SELECCIONADA : {amount}
          <br />   
        </Typography>
      </CardContent>
      <Button onClick={removeItem}>Delete</Button>
    </Card>
  )
}

export default CartItem