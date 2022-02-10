import { Container, Grid } from "@mui/material";
import {
  Text,
  ContentBG,
  IconWrapperStyle,
  Btn,
} from "../../theme/elements";
import Logo from "../Logo";
import Twitter from "./../../images/socials/Twitter.png";
import Discord from "./../../images/socials/Discord.png";

function Index() {
  return (
    <footer id="footer">
      <Grid container>
        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ py: 6, background: ContentBG }}
        >
          <Text variant="h3" textAlign="center">
            JOIN US ON DISCORD
          </Text>

          <Btn sx={{ marginTop: 2, padding: "0 15px" }}>
            <Logo src={Discord} sx={{ width: 16}}  />
            <Text variant="body3">Jojin Now!</Text>
          </Btn>
        </Grid>

        <Grid
          item
          xs={12}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ py: 2, background: `rgba(255, 255, 255, 0.18);` }}
        >
          <Container maxWidth="lg">
            <Grid container xs={12}>
              <Grid
                item
                xs={10}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Text variant="body3">
                  © 2022 Alien-X CLUB. — All rights reserved.
                </Text>
              </Grid>
              <Grid
                item
                xs={2}
                display="flex"
                justifyContent="flex-end"
                alignItems="center"
              >
                <IconWrapperStyle sx={{ margin: "0 2px" }}>
                  <Logo src={Twitter} sx={{ width: 14 }} />
                </IconWrapperStyle>

                <IconWrapperStyle sx={{ margin: "0 2px" }}>
                  <Logo src={Discord} sx={{ width: 14 }} />
                </IconWrapperStyle>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </footer>
  );
}
export default Index;
