import { Container, Grid } from "@mui/material";
import Logo from "./../Logo";
import { IconWrapperStyle, NavBtn, NavItem } from "./../../theme/elements";
import LogoIcon from "./../../images/logo.png";
import Discord from "./../../images/socials/Discord.png";
import Twitter from "./../../images/socials/Twitter.png";
import Instagram from "./../../images/socials/Instagram.png";

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
