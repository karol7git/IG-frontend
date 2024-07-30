import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Container,
  MenuItem,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import logo from "../assets/logo.png";
import SignIn from "./SignIn";

const logoStyle = {
  width: "40px",
  height: "auto",
};

const AppAppbar = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: "#d9d9d9",
        mt: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={() => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexShrink: 0,
            maxHeight: 40,
          })}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              ml: "-18px",
              px: 0,
            }}
          >
            <img src={logo} style={logoStyle} alt="logo de ingenius capital" />
            <Typography
              variant="h3"
              sx={{
                fontSize: { xs: 29, md: 35 },
                color: "primary.dark",
              }}
            >
              Ingenius Capital
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            <Button
              color="primary"
              variant="contained"
              size="small"
              component="a"
              href="#"
              target="_blank"
            >
              Iniciar Sesión
            </Button>
          </Box>
          <Box sx={{ display: { sm: "flex", md: "none", xs: "flex" } }}>
            <MenuItem>
              <Button
                variant="contained"
                component="a"
                target="_blank"
                sx={{ width: "100%" }}
                onClick={handleClickOpen}
                color="primary"
              >
                Iniciar Sesión
              </Button>
              <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
                <DialogContent>
                  <SignIn />
                </DialogContent>
              </Dialog>
            </MenuItem>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppAppbar;
