import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


const CartCount = (prop) => {

    const [counter, setCounter] = useState(prop.initial);


    useEffect( () => {
  
        setCounter(prop.initial);
       
    }, [prop.idParam, prop.initial])

    const add = () => {
            setCounter(counter+1);
            prop.changeAmount(counter+1)
    }
   
    const remove = () => {
            setCounter(counter-1);
            prop.changeAmount(counter-1)
    }

    return <>
        <Stack sx={{justifyContent:'center', marginTop: '20px', marginBottom: '15px'}} direction="row" spacing={2}>
            <Button onClick={remove} variant="outlined"   disabled={(prop.stock === 0) || (counter === 0)}>-</Button>
            <span className={prop.stock === 0 ? 'noStock counter' : 'counter' } >{ counter }</span>
            <Button onClick={add}  variant="outlined" disabled={(prop.stock === 0) || (counter >= prop.stock)}>+</Button>
        </Stack>
       
    </>;
    };
export default CartCount;    
