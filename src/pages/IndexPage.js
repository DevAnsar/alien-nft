import React, { useState } from "react";

import Page from "../components/Page";
import Sidebar from "../components/Sidebar";
import Header from "../components/header/Index";
import AboutUs from "../components/aboutUs/Index";
import RoadMap from "../components/roadMap/Index";
import Team from "../components/team/Index";
import FAQ from "../components/faq/Index";

function IndexPage() {
  const [open, setOpen] = useState(false);
  return (
    <Page title="Alien NFT" sx={{ width: "100%" }}>
      <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <Header />
      <AboutUs />
      <RoadMap />
      <Team />
      <FAQ />
    </Page>
  );
}
export default IndexPage;
