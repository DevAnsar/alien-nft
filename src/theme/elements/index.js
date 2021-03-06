import { Button, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const ContentBG = `linear-gradient(0deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.08))`;
const ContentBGActive = `linear-gradient(0deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.04))`;
const SideBarBG = `linear-gradient(20deg, rgb(4 11 20 / 92%), rgb(20 0 41))}`;

const Btn = styled(Button)(({ theme }) => ({
  margin: 0,
  borderRadius: theme.spacing(2.5),
  height: theme.spacing(5),
  color: theme.palette.secondary.lighter,
  backgroundImage: `linear-gradient(135deg, #4F6BF7 100%, #3C54CE 100%)`,
}));

const Text = styled(Typography)(({ theme }) => ({
  boxShadow: "none",
  padding: theme.spacing(0, 1),
  color: theme.palette.secondary.lighter,
}));

const IconWrapperStyle = styled(Button)(({ theme }) => ({
  margin: theme.spacing(0, 1),
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(5),
  minWidth: theme.spacing(5),
  height: theme.spacing(5),
  justifyContent: "center",
  color: theme.palette.secondary.dark,
  backgroundColor: `rgba(255, 255, 255, 0.1);`,
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

const NavItem = styled(Typography)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(0, 1),
  color: theme.palette.secondary.lighter,
  cursor:"pointer",
  "&:hover":{
    color: theme.palette.primary.lighter,
  }
}));

const ContentBox = styled(Box)(({ theme }) => ({
  height: "100%",
  margin: "5px",
  overflow: "hidden",
  background: ContentBG,
  borderRadius: theme.spacing(1),
}));

export {
  Text,
  IconWrapperStyle,
  NavBtn,
  NavItem,
  ContentBox,
  ContentBG,
  ContentBGActive,
  Btn,
  SideBarBG
};
