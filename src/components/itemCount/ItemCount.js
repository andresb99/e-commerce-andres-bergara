import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


//import styles
import './itemcount.css'

const ItemCount = (prop) => {

    const [counter, setCounter] = useState(prop.initial)

    const onAdd = () => {
            setCounter(counter+1);
    }
   
    const remove = () => {
            setCounter(counter-1);
    }


    return <>
        <Stack sx={{justifyContent:'center', marginTop: '20px'}} direction="row" spacing={2}>
            <Button onClick={remove} variant="outlined" disabled={(prop.stock === 0) || (counter === 0)}>-</Button>
            <span className="counter">{counter}</span>
            <Button onClick={onAdd} variant="outlined" disabled={(prop.stock === 0) || (counter >= prop.stock)}>+</Button>
        </Stack>
    </>;
    };

export default ItemCount;
