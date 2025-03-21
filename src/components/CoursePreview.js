"use client";
// CoursePreview.js  
import React from 'react';  

const CoursePreview = ({ course }) => {  
    return (  
        <div className="course-preview">  
            <h2>{course.title} - Vista Previa</h2>  
            <h3>Contenido:</h3>  
            <p>{course.content}</p>  
            <h3>Módulos:</h3>  
            <ul>  
                {course.modules.map((module, index) => (  
                    <li key={index}>{module}</li>  
                ))}  
            </ul>  
            <h3>Evaluación:</h3>  
            <p>Puntaje: {course.evaluation}</p>  
        </div>  
    );  
};  

export default CoursePreview;