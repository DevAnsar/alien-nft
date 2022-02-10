import React, { useState } from "react";
import {
  Container,
  Grid,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Text, ContentBG, ContentBGActive } from "../../theme/elements";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  background: ContentBG,
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    margin: theme.spacing(2, 1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  background: ContentBGActive,
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function Index() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <section id="team">
      <Container maxWidth="lg" sx={{ zIndex: 2, mb: 6 }}>
        <Grid container>
          <Grid
            item
            md={12}
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 3, mt: 4 }}
          >
            <Text variant="h3" textAlign="center">
              Frequently asked questions
            </Text>
          </Grid>

          <Grid
            item
            md={12}
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ mb: 6 }}
          >
            <div>
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Text>When is the official launch?</Text>
                </AccordionSummary>
                <AccordionDetails>
                  <Text sx={{ fontFamily: "Rubik" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Text>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  aria-controls="panel2d-content"
                  id="panel2d-header"
                >
                  <Text>How can I buy a Alien?</Text>
                </AccordionSummary>
                <AccordionDetails>
                  <Text sx={{ fontFamily: "Rubik" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Text>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  aria-controls="panel3d-content"
                  id="panel3d-header"
                >
                  <Text>How can I join the whitelist?</Text>
                </AccordionSummary>
                <AccordionDetails>
                  <Text sx={{ fontFamily: "Rubik" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Text>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  aria-controls="panel4d-content"
                  id="panel4d-header"
                >
                  <Text>What is the mint price?</Text>
                </AccordionSummary>
                <AccordionDetails>
                  <Text sx={{ fontFamily: "Rubik" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Text>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel5"}
                onChange={handleChange("panel5")}
              >
                <AccordionSummary
                  aria-controls="panel5d-content"
                  id="panel5d-header"
                >
                  <Text>How can I use my NFT?</Text>
                </AccordionSummary>
                <AccordionDetails>
                  <Text sx={{ fontFamily: "Rubik" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Text>
                </AccordionDetails>
              </Accordion>

              <Accordion
                expanded={expanded === "panel6"}
                onChange={handleChange("panel6")}
              >
                <AccordionSummary
                  aria-controls="panel6d-content"
                  id="panel6d-header"
                >
                  <Text>Still have any questions?</Text>
                </AccordionSummary>
                <AccordionDetails>
                  <Text sx={{ fontFamily: "Rubik" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Suspendisse malesuada lacus ex, sit amet
                    blandit leo lobortis eget.
                  </Text>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
export default Index;
