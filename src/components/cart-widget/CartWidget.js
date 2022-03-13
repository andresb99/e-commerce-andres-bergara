import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



//import styles
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';


const CartWidget = () => {

  const { totalQuantity } = useContext(CartContext);

  return <>
    <Badge badgeContent={totalQuantity} color="secondary">
      <ShoppingCartOutlinedIcon style={{ fill: 'white' }} fontSize='large' />
    </Badge>
  </>;
};

export default CartWidget;
