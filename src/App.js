import "./App.css";
import { HelmetProvider } from "react-helmet-async";
// theme
import ThemeConfig from "./theme";
import GlobalStyles from "./theme/globalStyles";
import { styled } from "@mui/material/styles";
//pages
import IndexPage from "./pages/IndexPage";

const RootStyle = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  backgroundColor: "#110620",
});

function App() {
  return (

      <ThemeConfig>
        <HelmetProvider>
          <GlobalStyles />
          <RootStyle>
            <IndexPage />
          </RootStyle>
        </HelmetProvider>
      </ThemeConfig>
  );
}

export default App;
