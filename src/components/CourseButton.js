"use client";
import React from 'react';  
import Button from '@mui/material/Button';  

const CourseButton = () => {  
  const handleClick = () => {  
    alert('¡Botón de Curso presionado!');  
  };  

  return (  
    <Button   
      variant="contained"   
      color="primary"   
      onClick={handleClick}  
      style={{ margin: '10px' }}  
    >  
      Curso  
    </Button>  
  );  
};  

export default CourseButton;