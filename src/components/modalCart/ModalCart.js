import React, { useContext, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from "react-router-dom"

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
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            textAlign:'center'
          };

          const { items, addOrderId, clear }  = useContext(CartContext);

          const [buyer, setBuyer] = useState({
              name:'',
              email:'',
              phone:''
          })
          const [orderId, setOrderId] = useState(null);
          const [date, setDate] = useState(``);

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
            .then( ({ id }) => {

                let today = new Date();
                let date = today.getDate() + '-' + ( today.getMonth() + 1 ) + '-' + today.getFullYear();
                let hour = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

                setOrderId(id)
                setDate(`${date} ${hour}`)
                addOrderId(orderId)
                handleClose()
                clear()
            } )
            .catch( (err) => console.log(err))
            .finally( (err) => {
                if(!err){
                    navigate('/success')
                }
            })
        }

  return (
    <>
    <Button onClick={handleOpen}>BUY NOW</Button>
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
          <form>
            <TextField
                helperText="Please enter your name"
                id="demo-helper-text-aligned"
                label="Name"
                value={buyer.name}
                onChange={ (e) => {
                    setBuyer({
                        ...buyer,
                        name: e.target.value
                    })
                }}
            />
            <TextField
                helperText="Please enter your email"
                id="demo-helper-text-aligned-no-helper"
                label="Email"
                type='email'
                value={buyer.email}
                onChange={ (e) => {
                    setBuyer({
                        ...buyer,
                        email: e.target.value
                    })
                }}
            />
            <TextField
                helperText="Please enter your email"
                id="demo-helper-text-aligned-no-helper"
                label="Phone"
                value={buyer.phone}
                onChange={ (e) => {
                    setBuyer({
                        ...buyer,
                        phone: e.target.value
                    })
                }}
            />
                <Button variant='outlined' onClick={sendOrder}>FINISH PURCHASE NOW</Button>
            
          </form>
        </Box>
      </Fade>
    </Modal>
    </>
  )
}

export default ModalCart;