"use client";
import { useCourse } from "@/modules/courses/hooks";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CoursePage() {
  const { id } = useParams();
  const course = useCourse(id);

  if (course.isLoading) {
    return (
      <Container>
        <Box paddingY={3} textAlign="center">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

  return (
    <Box minHeight="100vh">
      <Box
        height="200px"
        textAlign="center"
        sx={{ backgroundImage: `url(${course.data.data.cover})` }}
      />
      <Container>
        <Stack spacing={2} paddingY={3}>
          <Typography variant="h4" textAlign="center">
            {course.data.data.title}
          </Typography>
          <Typography>{course.data.data.description}</Typography>

          <Stack direction="row" spacing={2} justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              component={Link}
              href={`/courses/${id}/lessons`}
            >
              Ver ahora
            </Button>
            <Button component={Link} href="/courses">
              Cerrar
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
