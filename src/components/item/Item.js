import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


// import components 
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {

  const { pictureUrl, description, title, stock, id } = product;
    
    return (
        <Card sx={{ width: 350, margin:{xs:'0 auto'}, backgroundColor:'black', color:'white'}}>
          <Link style={{textDecoration:'none', color:'black'}} to={`/item/${id}`}>
            <CardActionArea sx= {{height: '350px', overflow: 'hidden'}}>
              <CardMedia
                component="img"
                height="197"
                image={ pictureUrl }
                alt={ title }
              />
              <CardContent>
                <Typography sx={{fontWeight:'bold', color:'white'}} gutterBottom variant="h5" component="div">
                  { title }  
                  { 
                    stock === 0 ? 
                    <Typography variant="body2" color="error.main">OUT OF STOCK</Typography> : 
                    <Typography variant="body2" color="success.main">STOCK: { stock }</Typography>
                  }
                </Typography>
                <Typography sx ={{ textAlign:'left', color:'white' }}  variant="body2" color="text.secondary">
                  { description }
                </Typography>      
              </CardContent>
            </CardActionArea>
          </Link>
          
          <ItemCount stock={ stock } initial={stock === 0 ? 0 : 1 } />
          
        </Card>
      );
};

export default Item;
