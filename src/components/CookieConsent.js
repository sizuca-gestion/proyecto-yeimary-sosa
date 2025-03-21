"use client";
import React, { useState } from 'react';  
import { Snackbar, Button, Typography, Box } from '@mui/material';  

const CookieConsent = () => {  
    const [open, setOpen] = useState(true);  

    const handleClose = () => {  
        document.cookie = "cookieConsent=true; max-age=" + 60 * 60 * 24 * 30; 
        setOpen(false);  
    };  

    return (  
        <Snackbar  
            open={open}  
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}  
            action={  
                <Button color="secondary" onClick={handleClose}>  
                    Aceptar  
                </Button>  
            }  
        >  
            <Box sx={{ bgcolor: 'background.paper', p: 2, borderRadius: '5px', display: 'flex', alignItems: 'center' }}>  
                <Typography variant="body2">  
                    Utilizamos cookies en este sitio web para mejorar su experiencia de usuario.  
                </Typography>  
            </Box>  
        </Snackbar>  
    );  
};  

export default CookieConsent;