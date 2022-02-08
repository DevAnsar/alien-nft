import { Container, Grid, Typography, Button } from "@mui/material";
import Logo from "./../Logo";
import { alpha, styled } from "@mui/material/styles";

import LogoIcon from "./../../images/logo.png";
import Discord from "./../../images/Discord.png";
import Twitter from "./../../images/Twitter.png";
import Instagram from "./../../images/Instagram.png";

const NavItem = styled(Typography)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(0, 1),
  color: theme.palette.secondary.lighter,
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: theme.spacing(0, 1),
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(5),
  height: theme.spacing(5),
  justifyContent: "center",
  color: theme.palette.secondary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(
    theme.palette.secondary.dark,
    0.25
  )} 100%, ${alpha(theme.palette.secondary.dark, 0.35)} 100%)`,
}));

const NavBtn = styled(Button)(({ theme }) => ({
  margin: 0,
  display: "flex",
  borderRadius: theme.spacing(2.5),
  alignItems: "center",
  height: theme.spacing(5),
  justifyContent: "center",
  color: theme.palette.secondary.lighter,
  backgroundImage: `linear-gradient(135deg, #4F6BF7 100%, #3C54CE 100%)`,
}));

function Navigation() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ padding: "10px 0" }}>
        <Grid
          item
          md={2}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Logo src={LogoIcon} sx={{ width: 40 }} />
        </Grid>
        <Grid
          item
          md={5}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <NavItem variant="body2" component="span">
            Home
          </NavItem>

          <NavItem variant="body2" component="span">
            About Us
          </NavItem>

          <NavItem variant="body2" component="span">
            Roadmap
          </NavItem>

          <NavItem variant="body2" component="span">
            Team
          </NavItem>

          <NavItem variant="body2" component="span">
            FAQ
          </NavItem>
        </Grid>
        <Grid
          item
          md={5}
          display="flex"
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <IconWrapperStyle>
            <Logo src={Discord} sx={{ width: 14 }} />
          </IconWrapperStyle>

          <IconWrapperStyle>
            <Logo src={Twitter} sx={{ width: 14 }} />
          </IconWrapperStyle>

          <IconWrapperStyle>
            <Logo src={Instagram} sx={{ width: 14 }} />
          </IconWrapperStyle>

          <NavBtn variant="contained">Buy a Alien</NavBtn>
        </Grid>
      </Grid>
    </Container>
  );
}
export default Navigation;
