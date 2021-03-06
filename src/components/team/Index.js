import { Container, Grid } from "@mui/material";
import TeamCard from "./TeamCard";
import { Text } from "../../theme/elements";

import user1 from "./../../images/about-user1.png";
import user2 from "./../../images/about-user2.png";
import user3 from "./../../images/about-user3.png";
import user4 from "./../../images/about-user1.png";
import user5 from "./../../images/about-user2.png";

function Index() {
  return (
    <section id="team" style={{ paddingTop: 50 }}>
      <Container maxWidth="lg" sx={{ zIndex: 2, mb: 6 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 2, mt: 4 }}
          >
            <Text variant="h3" textAlign="center">
              MEET THE Alien TEAM
            </Text>
          </Grid>

          <Grid
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            sx={{ mb: 6 }}
          >
            <Grid item xs={6} sm={4} md={3} lg={2} >
              <TeamCard
                userLogo={user1}
                name="John De"
                role="Founder, 3D Artist."
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2} >
              <TeamCard
                userLogo={user2}
                name="Mondey Jon"
                role={`Marketing & Development`}
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <TeamCard
                userLogo={user3}
                name="Alriyan"
                role="The Web Designer"
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <TeamCard
                userLogo={user4}
                name="Jaimon Dole"
                role="Blockchain Expert"
              />
            </Grid>
            <Grid item xs={6} sm={4} md={3} lg={2}>
              <TeamCard userLogo={user5} name="Arbut Hok" role="3D Artist" />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
export default Index;
