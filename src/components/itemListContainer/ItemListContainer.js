import React from 'react';
import Grid from '@mui/material/Grid';

//import components
import ItemCount from '../itemCount/ItemCount'

//import styles
import './itemListContainer.css';

const ItemListContainer = (props) => {
  return <>

          <h1>{props.greetings.greeting}<span>{props.greetings.name}</span></h1>

          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={4}>
              <ItemCount stock={10} initial={1} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ItemCount stock={1} initial={1} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <ItemCount stock={0} initial={1} />
            </Grid>
          </Grid>
            
  </>;
};

export default ItemListContainer;
