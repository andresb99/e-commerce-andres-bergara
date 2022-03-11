import { Grid } from '@mui/material'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import MessageContainer from './messageContainer/MessageContainer'
import Slider from './slider/Slider'


const Home = () => {

    const [acValhalla, setAcValhalla] = useState({});
    const [detroit, setDetroit] = useState({});
    const [cyberpunk, setCyberpunk] = useState({});
    const [eldenRing, setEldenRing] = useState({})

    useEffect(() => {

        const db = getFirestore();
  

        const docRefAc = doc(db, "items", "nIOiJzhKxxAEdJaArHHs");
        const docRefDetroit = doc(db, "items", "zjXmkjdhOPoW8Kr4Ofy8");
        const docRefCp2077 = doc(db, "items", "Zc9xWldsygKVRo46wfWB");
        const docRefEldenRing = doc(db, "items", "eFJSCAp02yr9rpOxvKja");


          getDoc(docRefAc)
          .then((snapshot) => {
            setAcValhalla({
                  id: snapshot.id,
                  ...snapshot.data()
              })
          })
          .catch(err => console.log(err))
       
          getDoc(docRefDetroit)
          .then((snapshot) => {
            setDetroit({
                  id: snapshot.id,
                  ...snapshot.data()
              })
          })
          .catch(err => console.log(err))

          getDoc(docRefCp2077)
          .then((snapshot) => {
            setCyberpunk({
                  id: snapshot.id,
                  ...snapshot.data()
              })
          })
          .catch(err => console.log(err))

          getDoc(docRefEldenRing)
          .then((snapshot) => {
            setEldenRing({
                  id: snapshot.id,
                  ...snapshot.data()
              })
          })
          .catch(err => console.log(err))

    }, [])
    
  return (
    <div>
        <Slider data={[acValhalla, detroit, cyberpunk, eldenRing]} />
        <Grid sx={{marginBottom:{xs: '150px', sm:'150px', md:'100px'}}} container spacing={2}>
            <Grid  item xs={12} sm={6} md={6}>
                <MessageContainer title={'IMPORTANT'} message={'Due to the announced war between ukraine and russia, the stock of some peripherals was affected, so these products can only be purchased on computers built by us'} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <MessageContainer title={'ABOUT US'} message={'We are a leading company in the sale of video games and peripherals. Based in Uruguay but shipping worldwide. We have the best quality price on the market.'} />
            </Grid>
        </Grid>
    </div>
  )
}

export default Home