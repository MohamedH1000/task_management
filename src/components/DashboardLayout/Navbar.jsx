import React, { useState } from "react";
// or
import { Avatar, Menu, MenuItem } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Link, useLocation } from "react-router-dom";
import LogoIcon from "../../assets/svg/Logo";
import { getSidebarLinks } from "../../constants";
import { useTranslation } from "react-i18next";
import US from "country-flag-icons/react/3x2/US";
import SA from "country-flag-icons/react/3x2/SA";
import { Menu as Hamburger } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation(); // Ensure you're inside <BrowserRouter>
  const [t, i18n] = useTranslation("global");
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const sidebarLinks = getSidebarLinks(t);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  // Ensure you're inside <BrowserRouter>

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              to={item.route}
              key={item.label}
              className={`${
                isActive
                  ? " text-[white] bg-[#397D54]"
                  : "text-[#397D54] bg-transparent"
              } ${
                item.className ? item.className : ""
              } flex items-center justify-start gap-4  
              p-4  rounded-lg  `}
            >
              {typeof item.imgURL === "string" ? (
                <img src={item.imgURL} alt={item.label} />
              ) : (
                <item.imgURL /> // Render Lucide icon directly
              )}
              <p className={`${isActive ? "base-bold" : "base-medium"} `}>
                {item.label}
              </p>
            </Link>
          );
        })}
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
      <Divider />
      <List>
        <div className="gap-4 ">
          <div className="w-full flex justify-center">
            <ToggleButton
              value="ar"
              onClick={() => handleChangeLanguage("ar")}
              sx={{
                backgroundColor: "#73C088", // Use theme color
                color: "white",
                "&:hover": {
                  backgroundColor: "#235D3A", // Darker shade on hover
                },
              }}
            >
              <SA title="Saudi Arabia" className="w-4 h-4" />
            </ToggleButton>

            <ToggleButton
              value="en"
              onClick={() => handleChangeLanguage("en")}
              sx={{
                backgroundColor: "#73C088", // Use theme color
                color: "white",
                "&:hover": {
                  backgroundColor: "#235D3A", // Darker shade on hover
                },
              }}
            >
              <US title="United States" className="w-4 h-4" />
            </ToggleButton>
          </div>
          <div className="flex items-center justify-center gap-2 mt-5">
            <div className="mt-5 flex flex-col items-center">
              <span className="text-[#235D3A]">Lindsey Korsgaard</span>
              <span className="text-[#73c088]">Administrator</span>
            </div>
            <Avatar className="cursor-pointer" />
          </div>
        </div>
      </List>
    </Box>
  );
  const navbarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: "10px 20px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    height: "80px",
  };

  const greetingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  };

  const userSectionStyle = {
    display: "flex",
    alignItems: "center",
  };

  const userAvatarStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  const userInfoStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const userNameStyle = {
    fontSize: "14px",
    fontWeight: "bold",
  };

  const userRoleStyle = {
    fontSize: "12px",
  };
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <nav style={navbarStyle}>
      <div
        style={greetingStyle}
        className="flex items-center justify-between gap-20"
      >
        {/* <img src="" alt="logo" /> */}
        <Link
          className="flex justify-center items-center cursor-pointer gap-3"
          smooth={true}
        >
          <LogoIcon />
          <h1 className="font20 extraBold tajwal-medium text-[#235D3A] font-bold text-xl max-md:text-md">
            {t("header.name")}
          </h1>
        </Link>{" "}
        <p className="text-[#235D3A] font-bold text-3xl max-md:text-xl">
          Hello, Lindsey
        </p>
      </div>
      <div style={userSectionStyle} className="gap-4 max-md:!hidden">
        <div>
          <ToggleButton
            value="ar"
            onClick={() => handleChangeLanguage("ar")}
            sx={{
              backgroundColor: "#73C088", // Use theme color
              color: "white",
              "&:hover": {
                backgroundColor: "#235D3A", // Darker shade on hover
              },
            }}
          >
            <SA title="Saudi Arabia" className="w-4 h-4" />
          </ToggleButton>

          <ToggleButton
            value="en"
            onClick={() => handleChangeLanguage("en")}
            sx={{
              backgroundColor: "#73C088", // Use theme color
              color: "white",
              "&:hover": {
                backgroundColor: "#235D3A", // Darker shade on hover
              },
            }}
          >
            <US title="United States" className="w-4 h-4" />
          </ToggleButton>
        </div>
        <div style={userInfoStyle}>
          <span style={userNameStyle} className="text-[#235D3A]">
            Lindsey Korsgaard
          </span>
          <span style={userRoleStyle} className="text-[#73c088]">
            Administrator
          </span>
        </div>
        <Avatar className="cursor-pointer" onClick={handleMenu} />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Button
          onClick={toggleDrawer(true)}
          sx={{
            color: "black",
          }}
        >
          {" "}
          <Hamburger />
        </Button>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          {DrawerList}
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
