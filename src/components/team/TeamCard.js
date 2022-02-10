import React, { useCallback } from "react";
import { Grid, Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Logo from "../Logo";
import { IconWrapperStyle, ContentBox } from "./../../theme/elements";
import Twitter from "./../../images/socials/Twitter.png";
import LinkdIn from "./../../images/socials/LinkdIn.png";
import Pintrest from "./../../images/socials/Pintrest.png";

const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  margin: "5px",
  overflow: "hidden",
  background:
    "linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))",
  borderRadius: "50%",
}));

const Text = styled(Typography)(({ theme }) => ({
  boxShadow: "none",
  padding: theme.spacing(0, 1),
  color: theme.palette.secondary.lighter,
}));

TeamCard.propTypes = {
  userLogo: PropTypes.string,
};
function TeamCard({ name, role, userLogo }) {
  const imageRef = useCallback((node) => {
    if (node !== null) {
      const imageWitdh = node.getBoundingClientRect().width;
      node.style.height = imageWitdh + "px";
    }
  }, []);

  return (
    <ContentBox sx={{ width: "20%" }}>
      <Grid
        item
        md={12}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{ position: "relative", minHeight: "100%" }}
      >
        <ImageBox ref={imageRef}>
          <Logo src={userLogo} />
        </ImageBox>

        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <Text>{name}</Text>
        </Grid>

        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <Text variant="body3" sx={{ fontFamily: "Rubik" }}>
            {role}
          </Text>
        </Grid>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
          sx={{ mt: 1 }}
        >
          <IconWrapperStyle sx={{ margin: "0 2px" }}>
            <Logo src={Twitter} sx={{ width: 14 }} />
          </IconWrapperStyle>

          <IconWrapperStyle sx={{ margin: "0 2px" }}>
            <Logo src={LinkdIn} sx={{ width: 14 }} />
          </IconWrapperStyle>

          <IconWrapperStyle sx={{ margin: "0 2px" }}>
            <Logo src={Pintrest} sx={{ width: 14 }} />
          </IconWrapperStyle>
        </Grid>
      </Grid>
    </ContentBox>
  );
}
export default TeamCard;
