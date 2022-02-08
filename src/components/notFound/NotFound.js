import { Alert, AlertTitle } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return <>
        <Alert severity="error">
        <AlertTitle> ERROR 404 NOT FOUND </AlertTitle>  
         <Link style={{color:'red'}} to='/' >Click here</Link> to return to the home page
        </Alert>
      </>;
};

export default NotFound;
