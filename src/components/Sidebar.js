import React from "react";
import PropTypes from "prop-types";
// material
import { styled } from "@mui/material/styles";
import { Box, Drawer, Grid } from "@mui/material";
import { NavBtn, SideBarBG } from "./../theme/elements";
import { NavLinks, NavButtons } from "./header/NavData";
// components
import Logo from "./Logo";
import Scrollbar from "./Scrollbar";
import MHidden from "./MHidden";
import LogoIcon from "../images/logo.png";
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const RootStyle = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: DRAWER_WIDTH,
  },
}));

// ----------------------------------------------------------------------

Sidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

function Sidebar({ isOpenSidebar, onCloseSidebar }) {

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          px: 2.5,
          py: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "inline-flex" }}>
          <Logo src={LogoIcon} sx={{ width: 40 }} />
        </Box>
      </Box>

      <Box>
        <Grid display="flex" flexDirection="column" sx={{ pt: 2 }}>
          <NavLinks sx={{ py: 2 }} onClose={onCloseSidebar} />
        </Grid>

        <Grid display="flex" flexDirection="column" sx={{ mt: 5, p: 3 }}>
          <Grid display="flex" flexDirection="row" justifyContent="center">
            <NavButtons />
          </Grid>
          <NavBtn sx={{ mt: 2 }} variant="contained">
            Buy a Alien
          </NavBtn>
        </Grid>
      </Box>

      <Box sx={{ flexGrow: 1 }} />
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: {
              width: DRAWER_WIDTH,
              background: SideBarBG,
              boxShadow: `0px 8px 10px -5px rgb(40 42 44 / 43%), 0px 16px 24px 2px rgb(123 128 133 / 14%), 0px 6px 30px 5px rgb(120 123 126 / 12%)`,
            },
          }}
          ModalProps={{
            background: `linear-gradient(75deg, rgb(42 53 68 / 18%) 0%, rgb(0 0 0 / 85%) 100%)`,
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
export default Sidebar;
