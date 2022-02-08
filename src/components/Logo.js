import PropTypes from "prop-types";
// material
import { Box } from "@mui/material";
// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
  src: PropTypes.string,
};

export default function Logo({ sx, src }) {
  return <Box component="img" src={src} sx={{  ...sx }} />;
}
