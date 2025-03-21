import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Paper, Typography } from "@mui/material";

import image1 from "@/src/assets/images/carousel-01.jpg";
import image2 from "@/src/assets/images/carousel-02.webp";
import image3 from "@/src/assets/images/carousel-03.jpg";

export function DashboardCarousel(props) {
  var items = [
    {
      title:
        "Tener voluntad de acero consiste en construir soluciones en cada circunstancia",
      image: image1.src,
    },
    {
      title: "Transformamos retos en oportunidades de crecimiento",
      image: image2.src,
    },
    {
      title:
        "Nuestra evolución va marcada con crecimiento , innovación y logros que nos llenan de orgullo",
      image: image3.src,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <DashboardCarouselItem key={i} item={item}>
          <Box
            position="absolute"
            top={50}
            left={50}
            right={50}
            bgcolor="rgba(0, 51, 102, 0.82)"
            padding={3}
          >
            <Typography color="white" variant="h4" fontWeight="bold">
              {item.title}
            </Typography>
          </Box>
        </DashboardCarouselItem>
      ))}
    </Carousel>
  );
}

export function DashboardCarouselItem(props) {
  return (
    <Box
      height="70vh"
      position="relative"
      padding={5}
      style={{
        backgroundImage: `url(${props.item.image})`,
        backgroundSize: "cover",
      }}
    >
      {props.children}
    </Box>
  );
}
