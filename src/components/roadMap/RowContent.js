import { Grid, Box } from "@mui/material";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";

const ContentBox = styled(Box)(({ theme }) => ({
  height: "100%",
  margin: "5px",
  overflow: "hidden",
  background:
    "linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08))",
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
}));

RowContent.propTypes = {
  title: PropTypes.element.isRequired,
  box: PropTypes.element.isRequired,
  row: PropTypes.number.isRequired,
};
function RowContent({ row, title, box }) {
  return (
    <Grid
      item
      md={12}
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      sx={{ position: "relative" }}
    >
      <Grid
        item
        xs={6}
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center "
        sx={{px:2}}
      >
        <Grid xs={8} sx={{ my: 2 }}>
          {row % 2 === 0 ? <ContentBox>{box}</ContentBox> : title}
        </Grid>
      </Grid>
      <Box sx={{ position: "absolute" }} className="road-map-line">
        <div className="road-map-circle">
          <div className="road-map-circle2" />
        </div>
      </Box>
      <Grid
        item
        xs={6}
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{px:2}}
      >
        <Grid xs={8}>
          {row % 2 === 0 ? title : <ContentBox>{box}</ContentBox>}
        </Grid>
      </Grid>
    </Grid>
  );
}
export default RowContent;
