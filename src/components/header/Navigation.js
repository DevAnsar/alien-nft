import { Container, Grid } from "@mui/material";
import Logo from "./../Logo";
import { IconWrapperStyle, NavBtn, NavItem } from "./../../theme/elements";
import LogoIcon from "./../../images/logo.png";
import Discord from "./../../images/socials/Discord.png";
import Twitter from "./../../images/socials/Twitter.png";
import Instagram from "./../../images/socials/Instagram.png";

function Navigation() {
  return (
    <div
      style={{
        width: "100%",
        position: "fixed",
        zIndex: 1000,
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.04))`,
      }}
    >
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
            <NavItem variant="body2" href="#header" component="a">
              Home
            </NavItem>

            <NavItem variant="body2" href="#about-us" component="a">
              About Us
            </NavItem>

            <NavItem variant="body2" href="#road-map" component="a">
              Roadmap
            </NavItem>

            <NavItem variant="body2" href="#team" component="a">
              Team
            </NavItem>

            <NavItem variant="body2" href="#faq" component="a">
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
    </div>
  );
}
export default Navigation;
