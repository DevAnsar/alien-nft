import { Container, Grid, Typography, Button, Box } from "@mui/material";
import user1 from "./../../images/user1.png";
import user2 from "./../../images/user2.png";
import user3 from "./../../images/user3.png";
import Logo from "../Logo";
import { styled } from "@mui/material/styles";

const Text = styled(Typography)(({ theme }) => ({
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(0, 1),
  color: theme.palette.secondary.lighter,
}));
const Btn = styled(Button)(({ theme }) => ({
  margin: 0,
  borderRadius: theme.spacing(2.5),
  height: theme.spacing(5),
  color: theme.palette.secondary.lighter,
  backgroundImage: `linear-gradient(135deg, #4F6BF7 100%, #3C54CE 100%)`,
}));

function Users() {
  return (
    <Container maxWidth="lg">
      <Grid
        container
        sx={{
          marginTop: "25px",
          padding: "10px 0",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "flex-end",
            position: "relative",
          }}
        >
          <Logo
            src={user2}
            sx={{
              width: "25%",
              height: "fit-content",
              position: "absolute",
              left: "10%",
              zIndex: 1,
              "-webkit-mask-image": `-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))`,
              maskImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))`,
            }}
          />
          <Logo
            src={user1}
            sx={{
              width: "40%",
              height: "fit-content",
              zIndex: 3,
              "-webkit-mask-image": `-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))`,
              maskImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))`,
            }}
          />
          <Logo
            src={user3}
            sx={{
              width: "25%",
              height: "fit-content",
              position: "absolute",
              right: "10%",
              zIndex: 1,
              "-webkit-mask-image": `-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))`,
              maskImage: `linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))`,
            }}
          />
        </Grid>
        <Box
          sx={{
            position: "absolute",
            zIndex: 4,
            textAlign: "center",
            marginTop: "10%",
          }}
        >
          <Text variant="h3">Next Biggest Expedition in the world Aliens</Text>
          <Text variant="h3">Travelling and Pleanet</Text>
          <Grid>
            <Btn sx={{ marginTop: 2 , padding:"0 15px" }}>Discover Alien</Btn>
          </Grid>
        </Box>
      </Grid>
    </Container>
  );
}
export default Users;
