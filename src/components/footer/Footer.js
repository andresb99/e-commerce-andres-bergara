import { Grid } from '@mui/material'
import React from 'react'
import { SiInstagram, SiGmail } from 'react-icons/si';
import { BsLinkedin, BsFacebook } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';

import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <Grid sx={{textAlign:'center', margin:'0 auto'}} container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                    <a className='anchor' href='https://www.instagram.com/' target="_blank" rel="noreferrer">
                        <SiInstagram style={{marginRight:'20px', fontSize:'24px'}} />
                    </a>    
                    <a className='anchor' href='https://www.linkedin.com/in/andr%C3%A9s-bergara-526140200/' target="_blank" rel="noreferrer">
                        <BsLinkedin style={{marginRight:'20px', fontSize:'24px'}} />
                    </a>
                    <a className='anchor' href='https://www.facebook.com/' target="_blank" rel="noreferrer">
                        <BsFacebook style={{marginRight:'20px', fontSize:'24px'}} />
                    </a>    
                    <a className='anchor' href='mailto:andres.bergara99@gmail.com' target="_blank" rel="noreferrer">
                        <SiGmail style={{marginRight:'20px', fontSize:'24px'}}/>
                    </a>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    Copyright <BiCopyright /> 2022 Heisenberg Games
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer