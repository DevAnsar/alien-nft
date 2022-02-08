import React , {useState} from "react";

import Page from "../components/Page";
import Header from "../components/header/Index";
import Sidebar from "../components/Sidebar";

function IndexPage() {
  const [open, setOpen] = useState(false);
  return (
    <Page title='Alien NFT'>
      <Sidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <Header />
    </Page>
  );
}
export default IndexPage;
