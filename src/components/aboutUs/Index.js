import { Container, Grid, Typography, Button, Box } from "@mui/material";
import RandomDot from "../RandomDot";
import { styled } from "@mui/material/styles";
import Logo from "../Logo";

import user1 from "./../../images/about-user1.png";
import user2 from "./../../images/about-user2.png";
import user3 from "./../../images/about-user3.png";
import user4 from "./../../images/about-user1.png";

const UserBox = styled(Box)(({ theme }) => ({
  height: "100%",
  margin: "5px",
  overflow: "hidden",
}));

const Text1 = styled(Typography)(({ theme }) => ({
  boxShadow: "none",
  padding: theme.spacing(0, 1),
  color: theme.palette.secondary.lighter,
}));

const Btn = styled(Button)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(0, 5),
  borderRadius: theme.spacing(2.5),
  height: theme.spacing(5),
  color: theme.palette.info.main,
  backgroundImage: `inherit`,
  border: `1px solid ${theme.palette.info.main}`,
}));

function Index() {
  return (
    <section id="about-us" >
      <Container maxWidth="lg" sx={{ zIndex: 2 }}>
        
        <Grid
          className="about-us"
          container
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <RandomDot id={2} count={30} />
          <Grid
            item
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Grid
              item
              xs={10}
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid xs={6}>
                <UserBox>
                  <Logo src={user1} sx={{ width: "100%" }} />
                </UserBox>
              </Grid>

              <Grid item xs={6}>
                <UserBox>
                  <Logo src={user2} />
                </UserBox>
              </Grid>
            </Grid>
            <Grid
              item
              xs={10}
              display="flex"
              flexDirection="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid xs={6}>
                <UserBox>
                  <Logo src={user3} sx={{ width: "100%" }} />
                </UserBox>
              </Grid>
              <Grid xs={6}>
                <UserBox>
                  <Logo src={user4} sx={{ width: "100%" }} />
                </UserBox>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            md={6}
            display="flex"
            flexDirection="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <Grid md={9}>
              <Text1 variant="h3">About the collection</Text1>

              <Text1 variant="body1" sx={{ fontFamily: "Rubik", mt: 5 }}>
                The Alien Club is a collection of 7,999 Monster Ape NFTs
                inspired by the new wealthy generation of crypto-currency and
                NFTs.
              </Text1>
              <Text1 variant="body1" sx={{ fontFamily: "Rubik", mt: 2 }}>
                Each NFT is a unique 3D artwork generated from the collection of
                more than 200+ traits. The objective is to build the strongest
                community and project around NFTs.
              </Text1>

              <Btn sx={{ marginTop: 5, padding: "0 15px" }}>Join Discord</Btn>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
export default Index;
