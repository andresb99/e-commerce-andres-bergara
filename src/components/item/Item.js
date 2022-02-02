import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';

// import components 
import ItemCount from '../itemCount/ItemCount';




const Item = ({ product }) => {

    const { pictureUrl, description, title, stock } = product;

    return (
        <Card sx={{ width: 350, margin:{xs:'0 auto'}}}>
          <CardActionArea sx= {{height: '450px', overflow: 'hidden'}}>
            <CardMedia
              component="img"
              height="280"
              image={ pictureUrl }
              alt={ title }
            />
            <CardContent>
              <Typography sx={{fontWeight:'bold'}} gutterBottom variant="h5" component="div">
                { title }  
                { 
                  stock === 0 ? 
                  <Typography variant="body2" color="error.main">OUT OF STOCK</Typography> : 
                  <Typography variant="body2" color="success.main">STOCK: {stock}</Typography>
                }
              </Typography>
              <Typography sx ={{textAlign:'left'}}  variant="body2" color="text.secondary">
                { description }
              </Typography>      
            </CardContent>
          </CardActionArea>
          <ItemCount stock={stock} initial={stock === 0 ? 0 : 1 } />
          <Button sx = {{ 
            display:'block', 
            margin:'0 auto', 
            width:'85%', 
            mt: 2, mb: 2 }} 
            variant="outlined" 
            disabled={ stock === 0 }>Add to cart</Button>
        </Card>
      );
};

export default Item;
