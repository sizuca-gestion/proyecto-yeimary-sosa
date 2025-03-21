"use client";
import React from 'react';  
import { Container, Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';  

const courses = [  
  {  
    id: 1,  
    title: "Curso de React",  
    category: "Desarrollo",  
    image: "https://example.com/react.jpg",  
  },  
  {  
    id: 2,  
    title: "Curso de JavaScript",  
    category: "Desarrollo",  
    image: "https://example.com/javascript.jpg",  
  },  
  {  
    id: 3,  
    title: "Curso de Diseño Gráfico",  
    category: "Diseño",  
    image: "https://example.com/diseno.jpg",  
  },  
    
];  

const getCoursesByCategory = () => {  
  return courses.reduce((acc, course) => {  
    if (!acc[course.category]) {  
      acc[course.category] = [];  
    }  
    acc[course.category].push(course);  
    return acc;  
  }, {});  
}  
const CourseList = () => {  
  const coursesByCategory = getCoursesByCategory();  

  return (
    <Container>  
      {Object.entries(coursesByCategory).map(([category, courses]) => (  
        <div key={category}>  
          <Typography variant="h4" gutterBottom>  
            {category}  
          </Typography>
          <Grid container spacing={4}>  
            {courses.map(course => (  
              <Grid item xs={12} sm={6} md={4} key={course.id}>  
                <Card>  
                  <CardMedia  
                    component="img"  
                    height="140"  
                    image={course.image}  
                    alt={course.title}  
                  />  
                  <CardContent>  
                    <Typography variant="h5">{course.title}</Typography>  
                  </CardContent>  
                </Card>  
              </Grid>  
            ))}  
          </Grid>  
        </div>  
      ))}  
    </Container>  
  );  
}  

export default CourseList;tte