"use client"
import React from 'react';  
import Button from '@mui/material/Button';  

const CoursePage = () => {  
  const handleClick = () => {  
    alert('¡Botón de Curso presionado!');  
  };  

  return (  
    <div>  
      <h1>Página del Curso</h1>  
      <Button   
        variant="contained"   
        color="primary"   
        onClick={handleClick}  
      >  
        Curso  
      </Button>  
    </div>  
  );  
};  

export default CoursePage;