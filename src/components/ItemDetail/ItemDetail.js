import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Item from '../item/Item';

//import components
import ItemCount from '../itemCount/ItemCount';

//import styles
import './itemDetail.css';


const ItemDetail = ({ product, idParam, productRelated }) => {

    const { addItem } = useContext(CartContext);

    const [amount, setAmount] = useState(0)

    useEffect ( () => {
        setAmount(0)
    }, [idParam])
    
    const { title, price, stock, description, pictureUrl } = product;
    
    const handleAddToCart = () => {
        addItem({product, amount})
      };
      
    const stylesAddToCart = {
        display:'block', 
        margin:'0 auto', 
        width:'85%', 
        mt: 4, mb: 2,
        border:'1px solid white',
        textDecoration: 'none',
        color:'white',
        "&:hover": {
        opacity: 0.8,
        border:'1px solid white',
}
}

  return <>
    <Container sx={{ mt: 10, mb: 10 }}>
        <Grid container spacing={2}>

            <Grid item xs={12} sm={8}>
                <Box><img className='productImg' src={pictureUrl} alt={ title } /></Box>
            </Grid>

            <Grid item xs={12} sm={4}>
                <Box>
                    <Card sx={{ minWidth: 275, height: 429, backgroundColor:'black', color:'white' }}>
                        <CardContent>
                            <Typography color='white' variant="h5" component="div">
                                { title }
                            </Typography>
                            { 
                                stock === 0 ? 
                                <Typography variant="body2" color="error.main">OUT OF STOCK</Typography> : 
                                <Typography variant="body2" color="success.main">STOCK: {stock}</Typography>
                            }

                            <Typography variant="h4" color='white' component="div">
                                ${ price }
                            </Typography>
                            <Typography sx={{ height:'125px' }} color='white' variant="body2">
                                { description }<br />
                            </Typography>
                        </CardContent>
                        
                        {
                            amount === 0 ?    
                                <ItemCount color='white' idParam = { idParam } stock={ stock } initial={ stock === 0 ? 0 : 1 } onAdd = { (count) => { setAmount(count) }} />
                            :
                                <Link style={{ textDecoration:'none', color:'black' }} to='/cart'>
                                    <Button sx = { stylesAddToCart } onClick={handleAddToCart} variant="outlined" disabled={ stock === 0 || (amount === 0) }>
                                        Buy Now {amount} products
                                    </Button>
                                </Link> 
                        }

                    </Card>
                </Box>  
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h2" sx={{textAlign:'left', fontWeight:'bold'}}>RELATED GAMES</Typography>
            </Grid>

            {
            productRelated?.map((productsRelated) => <Grid key={productsRelated.id} item xs={12} sm={6} md={4}><Item key={productsRelated.id} product={productsRelated} /></Grid>)
            } 
        
        </Grid>
    </Container>
    
  </>;
};

export default ItemDetail;
