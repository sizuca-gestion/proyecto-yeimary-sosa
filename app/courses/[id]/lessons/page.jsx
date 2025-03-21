"use client";
import { useCourse } from "@/modules/courses/hooks";
import { ChevronLeft, ChevronRight, Menu, Topic } from "@mui/icons-material";
import {
  AppBar as MuiAppBar,
  Box,
  CircularProgress,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
  Typography,
  useTheme,
  Stack,
} from "@mui/material";
import { useParams } from "next/navigation";
import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useSession } from "next-auth/react";
import { useProfile } from "@/modules/profile/hooks";

const drawerWidth = 320;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: `${drawerWidth}px`,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function CourseModulesPage() {
  const { id } = useParams();
  const course = useCourse(id);
  const theme = useTheme();
  const session = useSession();
  const profile = useProfile(session.data.user.profile_id);

  const [open, setOpen] = useState(false);
  const [currentResource, setCurrentResource] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleResourceClick = (resource) => () => {
    setCurrentResource(resource);
  };

  const handleGenerateCertificate = () => {
    const input = document.getElementById("certificate");
    input.style.display = "block"; // Asegúrate de que esté visible

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("l");
      pdf.addImage(imgData, "PNG", 0, 0);
      pdf.save("certificado.pdf");
      input.style.display = "none";
    });
  };

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
      <AppBar position="static" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                mr: 2,
              },
              open && { display: "none" },
            ]}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
          ".MuiPaper-root": {
            top: "77px",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box flex={1}>
            <Typography>{course.data.data.title}</Typography>
          </Box>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List disablePadding>
          {course.data.data.course_module
            ?.map((module, index) => {
              return [
                <ListItem key={module.id} sx={{ bgcolor: "divider" }}>
                  <ListItemIcon>
                    <Topic />
                  </ListItemIcon>
                  <ListItemText
                    primary={`Módulo ${index + 1}`}
                    secondary={module.title}
                  />
                </ListItem>,
                ...module.course_module_resource.map((resource) => (
                  <ListItem disablePadding>
                    <ListItemButton onClick={handleResourceClick(resource)}>
                      <ListItemIcon>
                        <Topic />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${
                          resource.type === "video" ? "Video" : "Recurso"
                        } #${index + 1}`}
                      />
                    </ListItemButton>
                  </ListItem>
                )),
                <ListItem disablePadding>
                  <ListItemButton onClick={handleGenerateCertificate}>
                    <ListItemIcon>
                      <Topic />
                    </ListItemIcon>
                    <ListItemText primary={`Certificado`} />
                  </ListItemButton>
                </ListItem>,
              ];
            })
            .flat()}
        </List>
      </Drawer>

      <Main open={open}>
        {/* <DrawerHeader /> */}
        <Stack direction="row" spacing={1}>
          <Box flex={1} paddingX={20}>
            {currentResource?.type === "video" ? (
              <video src={currentResource?.url} controls />
            ) : null}
          </Box>

          <Box></Box>
        </Stack>
      </Main>

      <div
        id="certificate"
        style={{
          display: "none",
          position: "relative",
          background: "url('/certificate.jpeg')",
          "background-size": "cover",
          width: 1122,
          height: 793,
        }}
      >
        <div
          style={{
            paddingTop: "420px",
            paddingRight: "130px",
            textAlign: "center",
          }}
        >
          <h1>{profile.data?.data?.name ?? profile.data?.data?.username}</h1>
        </div>
      </div>
    </Box>
  );
}
