import {
  Box,
  AppBar,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import { NoticeCard } from "./NoticeCard";
import { WriteNew } from "./WriteNotice";

const drawerWidth = 240;
const navItems = ["Ver Noticias", "Crear Noticias"];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [writeMode, setWriteMode] = useState(true);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleChangeOption = () => {
    setWriteMode(!writeMode);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Noticias
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          flexDirection: "row",
          display: "block",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            Noticias Educem
          </Typography>
          <Box sx={{ display: { sm: "block" } }}>
            <Button onClick={() => handleChangeOption()} sx={{ color: "#fff" }}>
              {writeMode ? "Escribir una nota" : "Ver las notas"}
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{
          p: 3,
          margin: 2,
          display: "flex",
          flexDirection: "column",
          mx: "auto",
          justifyContent: "center",
        }}
      >
        <Toolbar />
        {writeMode && <NoticeCard />}
        {!writeMode && <WriteNew />}
      </Box>
    </Box>
  );
};
