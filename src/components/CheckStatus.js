"use client";
import React, { useState } from 'react';  
import { Button, TextField, Typography, Box } from '@mui/material';  

const CheckStatus = () => {  
    const [protocolNumber, setProtocolNumber] = useState("");  
    const [statusMessage, setStatusMessage] = useState("");  

    const handleCheckStatus = () => {  
        if (protocolNumber) {  
            setStatusMessage(`Estado de la denuncia para el protocolo ${protocolNumber}: [Estado simulado]`);  
        } else {
            setStatusMessage("Por favor, ingrese un número de protocolo válido.");  
        }  
    };  

    return (  
        <Box style={{ marginTop: '20px', padding: '15px', border: '1px solid #e0e0e0', borderRadius: '5px', background: '#f9f9f9' }}>  
            <Typography variant="h6">CONSULTAR STATUS</Typography>  
            <Typography variant="body1">  
                Para seguir el progreso de su denuncia, por favor escriba el número de su protocolo en el siguiente campo y haga clic en "Verificar denuncia":  
            </Typography>  
            <TextField  
                label="Número de Protocolo"  
                variant="outlined"  
                value={protocolNumber}  
                onChange={(e) => setProtocolNumber(e.target.value)}  
                style={{ marginTop: '10px', width: '100%' }}  
            />  
            <Box style={{ marginTop: '15px' }}>  
                <Button variant="contained" color="primary" onClick={handleCheckStatus}>  
                    Verificar denuncia  
                </Button>  
                <Button variant="outlined" color="secondary" style={{ marginLeft: '10px' }} onClick={() => setProtocolNumber("")}>  
                    Cancelar denuncia 
                </Button>  
            </Box>  
            {statusMessage && (  
                <Typography variant="body2" style={{ marginTop: '15px' }}>  
                    {statusMessage}  
                </Typography>  
            )}  
         </Box>  
    );
};  

export default CheckStatus;