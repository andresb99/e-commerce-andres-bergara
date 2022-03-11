import React, { useContext, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { GrFormClose } from 'react-icons/gr';


const ModalCart = ({ total }) => {

  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '3px solid #9c27b0',
    boxShadow: 24,
    p: 4,
    textAlign: 'center'
  };

  const { items, clear, orderNumber } = useContext(CartContext);


  const [buyer, setBuyer] = useState({
    name: '',
    email: '',
    phone: ''
  })
  const [orderId, setOrderId] = useState(null);
  const stylesButtonCart = {
    display: 'block', 
    margin: '0 auto',
    width: '95%',
    mt: 3,
    color:'#9c27b0',
    border:'1px solid #9c27b0',
    "&:hover": {
      opacity: 0.8,
      border:'1px solid #9c27b0',
      boxShadow: '1px 0px 27px 2px rgba(156,39,176,0.75)'
    }
  }

  const stylesCloseModal = {
    position:"relative",
    top:'-25px',
    left:'170px',
    fontSize:'25px',
    cursor:'pointer'
  }

  let date = new Date();
  const sendOrder = () => {
    const order = {
      buyer,
      items,
      total,
      date
    }

    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then(({ id }) => {
        setOrderId(id);
        handleClose();
        clear();
      })
      .catch((err) => console.log(err))
      .finally(() => {
        navigate('/success');
      })

      
  }

  useEffect( () => {
    orderNumber(orderId);
  }, [orderId, orderNumber])

  return (
    <>
      <Button sx={stylesButtonCart} variant='outlined' onClick={handleOpen}>BUY NOW</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <GrFormClose onClick={handleClose} style={stylesCloseModal} />
            <form>
              <TextField
                required
                InputProps={{
                  style: {
                    color: '#9c27b0',
                  }
                }}
                color='secondary'
                sx={{ color: 'white!important' }}
                helperText="Please enter your name"
                id="demo-helper-text-aligned"
                label="Name"
                value={buyer.name}
                onChange={(e) => {
                  setBuyer({
                    ...buyer,
                    name: e.target.value
                  })
                }}
              />
              <TextField
                color='secondary'
                InputProps={{
                  style: {
                    color: '#9c27b0',
                  }
                }}
                helperText="Please enter your email"
                id="demo-helper-text-aligned-no-helper"
                label="Email"
                type='email'
                value={buyer.email}
                onChange={(e) => {
                  setBuyer({
                    ...buyer,
                    email: e.target.value
                  })
                }}
              />
              <TextField
                color='secondary'
                InputProps={{
                  style: {
                    color: '#9c27b0',
                  }
                }}
                helperText="Please enter your email"
                id="demo-helper-text-aligned-no-helper"
                label="Phone"
                value={buyer.phone}
                onChange={(e) => {
                  setBuyer({
                    ...buyer,
                    phone: e.target.value
                  })
                }}
              />
              <Button sx={{
                display: 'block',
                margin: '0 auto',
                width: '85%',
                mt: 2, mb: 2,
                border: '1px solid #9c27b0',
                color: '#9c27b0',
                "&:hover": {
                  opacity: 0.8,
                  border: '1px solid #9c27b0',
                }
               
              }}
                variant='outlined' onClick={sendOrder}
                disabled={!buyer.phone || !buyer.email || !buyer.name}>
                  CHECKOUT
              </Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    </>
  )
}

export default ModalCart;