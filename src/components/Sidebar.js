import PropTypes from "prop-types";
// material
import { styled } from "@mui/material/styles";
import { Box, Drawer } from "@mui/material";
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
          backgroundImage: "linear-gradient(120deg, #FAD961 0%, #F76B1C 57%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "inline-flex" }}>
          <Logo src={LogoIcon} sx={{ width: 40 }} />
        </Box>
      </Box>

      {/* <NavSection navConfig={sidebarConfig} /> */}

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
            sx: { width: DRAWER_WIDTH }
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
export default Sidebar;
