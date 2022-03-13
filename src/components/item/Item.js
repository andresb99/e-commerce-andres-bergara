import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


// import components 
import ItemCount from '../itemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { Button } from '@mui/material';
const Item = ({ product }) => {

  const { pictureUrl, description, title, stock, id } = product;
  const { addItem } = useContext(CartContext);
  const [amount, setAmount] = useState(0)
  const stylesBuyNow = {
    display: 'block',
    margin: '0 auto',
    width: '85%',
    mt: '16px', mb: '16px',
    textDecoration: 'none'
  }

  const handleAddToCart = () => {
    addItem({ product, amount })
  };

  return (
    <Card sx={{ width: 350, margin: { xs: '0 auto' }, backgroundColor: 'black', color: 'white' }}>
      <Link style={{ textDecoration: 'none', color: 'black' }} to={`/item/${id}`}>
        <CardActionArea sx={{ height: '350px', overflow: 'hidden' }}>
          <CardMedia
            component="img"
            height="197"
            image={pictureUrl}
            alt={title}
          />
          <CardContent>
            <Typography sx={{ fontWeight: 'bold', color: 'white' }} gutterBottom variant="h5" component="div">
              {title}
              {
                stock === 0 ?
                  <Typography variant="body2" color="error.main">OUT OF STOCK</Typography> :
                  <Typography variant="body2" color="success.main">STOCK: {stock}</Typography>
              }
            </Typography>
            <Typography sx={{ textAlign: 'left', color: 'white' }} variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      {
        amount === 0 ?
          <ItemCount stock={stock} onAdd={(count) => { setAmount(count) }} initial={stock === 0 ? 0 : 1} />
          :
          <>
            <h3 style={{ fontSize: '20px', marginTop: '32.5px' }}>Want to add <span style={{ color: '#2e7d32' }}>{amount}</span> products to cart?</h3>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/cart'>
              <Button sx={stylesBuyNow} color="success" onClick={handleAddToCart} variant="outlined" disabled={stock === 0 || (amount === 0)}>
                Buy Now
              </Button>
            </Link>
          </>

      }

    </Card>
  );
};

export default Item;
