"use client";
import { useState } from "react";
import { ExtendedTextField } from "@/src/components";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Stack,
  Typography,
  useEventCallback,
} from "@mui/material";
import { useCoursesQueryConfig } from "@/modules/courses/hooks";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState({ data: [], loading: false });

  const queryClient = useQueryClient();

  const handleSearch = useEventCallback((e) => {
    setSearchTerm(e.target.value);
  });

  const searchCourses = useEventCallback(async (e) => {
    e.preventDefault();
    setCourses({ data: [], loading: true });
    try {
      const courses = await queryClient.fetchQuery(
        useCoursesQueryConfig({ searchTerm })
      );
      setCourses({ data: courses.data, loading: false });
    } catch (error) {
      console.error(error);
      setCourses({ data: [], loading: false });
    }
  });

  return (
    <Box bgcolor="primary.main">
      <Container>
        <Stack spacing={4} paddingY={4} minHeight="calc(100vh - 77px - 160px)">
          <Stack color="white" spacing={4}>
            <Stack justifyContent="center" alignItems="center">
              <Typography variant="h4">¿Qué curso quieres hacer?</Typography>
              <Typography>
                Utilice la búsqueda a continuación para buscar cursos.
              </Typography>

              <Stack
                paddingTop={2}
                direction="row"
                spacing={1}
                width={{ xs: "100%", md: "80%", lg: "60%" }}
                component="form"
                onSubmit={searchCourses}
              >
                <ExtendedTextField
                  value={searchTerm}
                  onChange={handleSearch}
                  fullWidth
                  placeholder="Escribe el nombre del curso..."
                  sx={{
                    ".MuiInputBase-root": {
                      borderRadius: "4px",
                    },
                    ".MuiInputBase-input": {
                      borderRadius: "4px",
                      bgcolor: "white",
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={searchCourses}
                >
                  Buscar
                </Button>
              </Stack>
            </Stack>
          </Stack>

          <Box>
            {courses.loading ? (
              <Box textAlign="center">
                <CircularProgress color="warning" />
              </Box>
            ) : (
              <Stack spacing={3} color="white">
                {courses.data?.length ? (
                  <Typography variant="h5">
                    Resultados de "{searchTerm}"
                  </Typography>
                ) : null}
                <Box
                  display="grid"
                  gridTemplateColumns={{
                    md: "repeat(2, 1fr)",
                    lg: "repeat(3, 1fr)",
                  }}
                  gap={2}
                >
                  {courses.data.map((course) => (
                    <Box key={course.id}>
                      <Card>
                        <CardMedia
                          sx={{ height: 200 }}
                          image={course.cover}
                          title={course.title}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {course.title}
                          </Typography>
                          <Typography>{course.description}</Typography>
                        </CardContent>
                        <CardActions>
                          <Button
                            variant="contained"
                            color="primary"
                            component={Link}
                            href={`/courses/${course.id}`}
                          >
                            Ver curso
                          </Button>
                        </CardActions>
                      </Card>
                    </Box>
                  ))}
                </Box>
              </Stack>
            )}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
