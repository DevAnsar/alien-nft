import React, { useCallback } from "react";
import { Grid, Box } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Logo from "../Logo";
import { IconWrapperStyle, ContentBox, Text } from "./../../theme/elements";
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

TeamCard.propTypes = {
  userLogo: PropTypes.string,
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
function TeamCard({ name, role, userLogo }) {

  // const imageRef = useCallback((node) => {
  //   if (node !== null) {
  //     setTimeout(()=>{
  //       const imageWitdh = node.getBoundingClientRect().width;
  //       console.log(imageWitdh)
  //       node.style.height = (imageWitdh) + "px";
  //     },1000)

  //   }
  // }, []);

  return (
    <ContentBox sx={{p:{xs:1,sm:2}}} >
      <Grid
        item
        xs={12}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{ position: "relative", minHeight: "100%" }}
      >
        <ImageBox>
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
          <Text variant="body3" component="pre" sx={{ fontFamily: "Rubik" }}>
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
