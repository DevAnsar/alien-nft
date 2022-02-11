import { Container, Grid, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import { Menu } from "@mui/icons-material";
import MHidden from "./../MHidden";
import { NavLinks, NavButtons } from "./NavData";
import Logo from "./../Logo";
import LogoIcon from "./../../images/logo.png";
import { NavBtn } from "./../../theme/elements";

Navigation.propTypes = {
  onOpenSidebar: PropTypes.func,
};

function Navigation({ onOpenSidebar }) {
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
        <Grid
          container
          spacing={2}
          sx={{ padding: "10px 0" }}
          justifyContent="space-between"
        >
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
          <MHidden width="mdDown">
            <Grid
              item
              md={5}
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <NavLinks />
            </Grid>

            <Grid
              item
              md={5}
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <NavButtons />
              <NavBtn variant="contained">Buy a Alien</NavBtn>
            </Grid>
          </MHidden>
          <MHidden width="mdUp">
            <IconButton onClick={onOpenSidebar} sx={{ color: "#fff", mt: 2 }}>
              <Menu sx={{ fontSize: "2rem" }} />
            </IconButton>
          </MHidden>
        </Grid>
      </Container>
    </div>
  );
}
export default Navigation;
