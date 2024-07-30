import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import services1 from "../assets/services1.png";
import services2 from "../assets/services2.png";
import services3 from "../assets/services3.png";

const items = [
  {
    icon: <SpaceDashboardIcon />,
    title: "Servicio 1",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    img: `url(${services1})`,
  },
  {
    icon: <DataThresholdingIcon />,
    title: "Servicio 2",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    img: `url(${services2})`,
  },
  {
    icon: <ApartmentIcon />,
    title: "Servicio 3",
    description: "Lorem ipsum odor amet, consectetuer adipiscing elit.",
    img: `url(${services3})`,
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ icon, title }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  height: "fit-content",
                  width: { xs: "100%", sm: "33%", md: "20%" },
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.light" : undefined,
                  borderColor: "secondary.light",
                  "&:hover": {
                    background: "#f5bc51",
                    borderColor: "secondary.light",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 1.5,
                  }}
                >
                  <Box
                    sx={{
                      color: "secondary.main",
                    }}
                  >
                    {icon}
                  </Box>
                  <Typography color="text.primary" variant="subtitle">
                    {title}
                  </Typography>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h3">
              Nuestros Servicios
            </Typography>
            <Typography
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 } }}
              variant="h5"
            >
              Un lugar seguro
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "primary.light" : "";
                    }
                    return selectedItemIndex === index ? "primary.light" : "";
                  },
                  background: (theme) => {
                    if (theme.palette.mode === "light") {
                      return selectedItemIndex === index ? "none" : "";
                    }
                    return selectedItemIndex === index ? "none" : "";
                  },
                  backgroundColor:
                    selectedItemIndex === index ? "primary.dark" : "",
                  "& .MuiChip-label": {
                    color:
                      selectedItemIndex === index
                        ? "secondary.light"
                        : "text.secondary",
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: items[selectedItemIndex].img,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 280,
              }}
            />
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography color="primary.dark" variant="h6" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="h6" sx={{ my: 0.5 }}>
                {selectedFeature.description}
              </Typography>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 3,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                  backgroundColor:
                    selectedItemIndex === index ? "action.selected" : undefined,
                  borderColor: "primary.light",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box
                    sx={{
                      color: "primary.main",
                    }}
                  >
                    {icon}
                  </Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="subtitle"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="h6"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
            }}
          >
            <Box
              sx={{
                m: "auto",
                width: "100%",
                height: 500,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundImage: () => items[selectedItemIndex].img,
              }}
            />
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
