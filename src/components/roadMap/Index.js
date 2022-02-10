import { Container, Grid, Typography } from "@mui/material";
import RowContent from "./RowContent";
import { styled } from "@mui/material/styles";
import Logo from "../Logo";

import user1 from "./../../images/roadmap-user1.png";
import user2 from "./../../images/roadmap-user2.png";
import user3 from "./../../images/roadmap-user3.png";
import user4 from "./../../images/roadmap-user2.png";

const Text = styled(Typography)(({ theme }) => ({
  boxShadow: "none",
  padding: theme.spacing(0, 1),
  color: theme.palette.secondary.lighter,
}));

function Index() {
  return (
    <section id="road-map" style={{ paddingTop: 50 }}>
      <Container maxWidth="lg" sx={{ zIndex: 2, my: 6 }}>
        <Grid
          className="road-map"
          container
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Grid
            item
            md={12}
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="center"
            sx={{ mb: 6 }}
          >
            <Text variant="h2" textAlign="center">
              Project Roadmap
            </Text>
            <Text variant="body1" textAlign="center" sx={{ mt: 2 }}>
              This roadmap describes where we want to take Alien Travels.
            </Text>
            <Text variant="body1" textAlign="center" sx={{ mt: 1 }}>
              Many more opportunities, events, and special surprises are to
              come...
            </Text>
          </Grid>

          <RowContent
            row={1}
            title={
              <>
                <Text variant="h3">The world Alien</Text>
                <Text variant="h3">Monsters</Text>
              </>
            }
            box={
              <>
                <Text variant="body3" component="div">
                  The best 3D artists, designers, marketers, and influencers
                  have made an incredible contribution to creating a
                  high-quality NFT project that opens the door to the wonderful
                  world of the metaverse.
                </Text>
                <Text variant="body3" sx={{ mt: 2 }} component="div">
                  It is also important for us to create a strong community to
                  develop the Alien Club.
                </Text>
                <Logo src={user1} sx={{ width: "100%", mt: 2 }} />
              </>
            }
          />

          <RowContent
            row={2}
            title={
              <>
                <Text variant="h3">Alien Metaverse</Text>
              </>
            }
            box={
              <>
                <Text variant="body3" component="div">
                  The uniqueness and limited supply of the Alien Club collection
                  will impress any NFT enthusiast and NFT collector.
                </Text>
                <Text variant="body3" sx={{ mt: 1 }} component="div">
                  Now, more than 100,000 people from all over the world have
                  gathered in our Discord. Each Alien is a masterpiece and your
                  ticket to a unique metaverse of monsters.
                </Text>

                <Text variant="body3" sx={{ mt: 1 }} component="div">
                  The high quality of our art will allow you to use the Alien
                  the way you want, whether in the Metaverse or games.
                </Text>
                <Logo src={user2} sx={{ width: "100%", mt: 2 }} />
              </>
            }
          />

          <RowContent
            row={3}
            title={
              <>
                <Text variant="h3">Tribute to the Alien</Text>
                <Text variant="h3">NFT apostles</Text>
              </>
            }
            box={
              <>
                <Text variant="body3" component="div">
                  We all love Alien and respect the projects that are now
                  leaders in the NFT world - BAYC and MAYC.
                </Text>
                <Text variant="body3" sx={{ mt: 1 }} component="div">
                  That's why we decided to prepare a gift for you...
                </Text>

                <Text variant="body3" sx={{ mt: 1 }} component="div">
                  All Alien holders will have a fantastic opportunity to
                  participate in the drawing of one NFT of the BAYC and MAYC,
                  which they can get FREE!
                </Text>
                <Logo src={user3} sx={{ width: "100%", mt: 2 }} />
              </>
            }
          />

          <RowContent
            row={4}
            title={
              <>
                <Text variant="h3">Exclusive merch</Text>
              </>
            }
            box={
              <>
                <Text variant="body3" component="div">
                  The Alien Club collection moves to a new level and goes beyond
                  the Metaverse…
                </Text>
                <Text variant="body3" sx={{ mt: 1 }} component="div">
                  Now members of our club have a way to excel!
                </Text>

                <Text variant="body3" sx={{ mt: 1 }} component="div">
                  We will create a branded collection of clothes,
                  high-resolution posters with legendary Alien, and 3D Alien
                  figures available to all members of the MAC.
                </Text>
                <Text variant="body3" sx={{ mt: 1 }} component="div">
                  WThe quality of MAC merch won't be inferior to world-famous
                  brands
                </Text>
              </>
            }
          />

          <RowContent
            row={5}
            title={
              <>
                <Text variant="h3">
                  Alien capture the hearts of NFT collectors
                </Text>
              </>
            }
            box={
              <>
                <Text variant="body3" component="div">
                  Alien have risen to the top of the NFT! But we won't stop
                  there...
                </Text>
                <Text variant="body3" sx={{ mt: 1 }} component="div">
                  Other monster animals join the Metaverse.
                </Text>

                <Text variant="body3" sx={{ mt: 1 }} component="div">
                  Everyone will have a chance to mint NFT from the new
                  collections, but the privileges will go to Alien owners.
                </Text>
                <Logo src={user4} sx={{ width: "100%", mt: 2 }} />
              </>
            }
          />
        </Grid>
      </Container>
    </section>
  );
}
export default Index;
