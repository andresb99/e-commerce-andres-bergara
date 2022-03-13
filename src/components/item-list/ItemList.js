import { Grid } from '@mui/material';
import React from 'react';
import Item from '../item/Item';


const ItemList = ({ products, idParam }) => {

  return <>
    <Grid spacing={5} sx={{ mt: 5, mb: 20 }} container>
      {
        products?.map((product) => <Grid key={product.id} item xs={12} sm={6} md={3}><Item key={product.id} idParam={idParam} product={product} /></Grid>)
      }
    </Grid>
  </>;
};

export default ItemList;