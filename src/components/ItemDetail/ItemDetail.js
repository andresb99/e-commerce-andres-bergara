import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Item from '../item/Item';

//import components
import ItemCount from '../itemCount/ItemCount';

//import styles
import './itemDetail.css';


const ItemDetail = ({ product, idParam }) => {

    const item = product.find((items) => items.id === parseInt(idParam))
    const { title, price, stock, description, pictureUrl, related } = item;

    const relatedProducts = product.filter( (product) =>{
       return  product.id === related[0] || product.id === related[1] || product.id === related[2]
    })

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
                            <Typography color='white' variant="body2">
                                { description }<br />
                            </Typography>
                        </CardContent>
                        <ItemCount color='white' stock={ stock } initial={ stock === 0 ? 0 : 1 } />

                    </Card>
                </Box>  
            </Grid>

            <Grid item xs={12}>
                <Typography variant="h2" sx={{textAlign:'left', fontWeight:'bold'}}>RELATED GAMES</Typography>
            </Grid>

            {
            relatedProducts?.map((relatedProduct) => <Grid key={relatedProduct.id} item xs={12} sm={6} md={4}><Item key={relatedProduct.id} product={relatedProduct} /></Grid>)
            } 
        
        </Grid>
    </Container>
    
  </>;
};

export default ItemDetail;
