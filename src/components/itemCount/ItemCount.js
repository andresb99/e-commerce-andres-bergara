import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


//import styles
import './itemcount.css'

const ItemCount = (prop) => {

    const [counter, setCounter] = useState(prop.initial);


    useEffect( () => {
  
        setCounter(prop.initial);
       
    }, [prop.idParam, prop.initial])

    const add = () => {
            setCounter(counter+1);
    }
   
    const remove = () => {
            setCounter(counter-1);
    }

    const stylesCounter = {
        border:'1px solid white',
        color:'white',
        "&:hover": {
            opacity: 0.8,
            border:'1px solid white',
          }
    }

    //styles to customize material ui component
    const stylesAddToCart = {
            display:'block', 
            margin:'0 auto', 
            width:'85%', 
            mt: 2, mb: 2,
            border:'1px solid white',
            color:'white',
            "&:hover": {
            opacity: 0.8,
            border:'1px solid white',
    }
  }

  const handleOnAdd = () => {
      prop.onAdd(counter)
  }

    return <>
        <Stack sx={{justifyContent:'center', marginTop: '20px'}} direction="row" spacing={2}>
            <Button onClick={remove} variant="outlined" sx={stylesCounter} disabled={(prop.stock === 0) || (counter === 0)}>-</Button>
            <span className={prop.stock === 0 ? 'noStock counter' : 'counter' }>{ counter }</span>
            <Button onClick={add} variant="outlined" sx={stylesCounter} disabled={(prop.stock === 0) || (counter >= prop.stock)}>+</Button>
        </Stack>
        <Button sx = { stylesAddToCart } onClick = { handleOnAdd } variant="outlined" disabled={ prop.stock === 0 || (counter === 0) }>
            Add to cart
        </Button>
    </>;
    };

export default ItemCount;
