import { IconWrapperStyle, NavItem } from "./../../theme/elements";
import Logo from "./../Logo";

import Discord from "./../../images/socials/Discord.png";
import Twitter from "./../../images/socials/Twitter.png";
import Instagram from "./../../images/socials/Instagram.png";

function NavLinks({ sx = {}, onClose=()=>{} }) {
  const handleClick = (id) => {
    // console.log(id);
    onClose();
    setTimeout(()=>{
      window.location = id;
    },100)
    
  };

  return (
    <>
      <NavItem
        sx={sx}
        variant="body2"
        onClick={() => handleClick("#header")}
        component="a"
      >
        Home
      </NavItem>

      <NavItem
        sx={sx}
        variant="body2"
        onClick={() => handleClick("#about-us")}
        component="a"
      >
        About Us
      </NavItem>

      <NavItem
        sx={sx}
        variant="body2"
        onClick={() => handleClick("#road-map")}
        component="a"
      >
        Roadmap
      </NavItem>

      <NavItem
        sx={sx}
        variant="body2"
        onClick={() => handleClick("#team")}
        component="a"
      >
        Team
      </NavItem>

      <NavItem
        sx={sx}
        variant="body2"
        onClick={() => handleClick("#faq")}
        component="a"
      >
        FAQ
      </NavItem>
    </>
  );
}

function NavButtons() {
  return (
    <>
      <IconWrapperStyle>
        <Logo src={Discord} sx={{ width: 14 }} />
      </IconWrapperStyle>

      <IconWrapperStyle>
        <Logo src={Twitter} sx={{ width: 14 }} />
      </IconWrapperStyle>

      <IconWrapperStyle>
        <Logo src={Instagram} sx={{ width: 14 }} />
      </IconWrapperStyle>
    </>
  );
}
export { NavLinks, NavButtons };
