import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "./Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../../../assets/svg/Logo";
import BurgerIcon from "../../../../assets/svg/BurgerIcon";
import { useTranslation } from "react-i18next";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import i18n from "../../../../i18n";

export default function TopNavbar() {
  const [t, i18n] = useTranslation("global");
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);
  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg "
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
            <h1
              style={{ marginLeft: "15px" }}
              className="font20 extraBold tajwal-medium"
            >
              {t("header.name")}
            </h1>
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="  max-md:hidden">
            <li className="semiBold font15 pointer ">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                {t("header.main")}
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
              >
                المميزات
              </Link>
            </li>

            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="blog"
                spy={true}
                smooth={true}
                offset={-80}
              >
                المدونات
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="pricing"
                spy={true}
                smooth={true}
                offset={-80}
              >
                الباقات
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                التواصل
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="md:flex justify-center items-center max-md:hidden gap-4">
            {/* <li className="semiBold font15 pointer">
              <a href="/login" style={{ padding: "10px 30px 10px 0" }}>
                تسجيل الدخول
              </a>
            </li> */}
            <div>
              <ToggleButton
                value="web"
                onClick={() => handleChangeLanguage("ar")}
                sx={{
                  backgroundColor: "#73C088", // Use theme color
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#235D3A", // Darker shade on hover
                  },
                }}
              >
                ar
              </ToggleButton>

              <ToggleButton
                value="ios"
                onClick={() => handleChangeLanguage("en")}
                sx={{
                  backgroundColor: "#73C088", // Use theme color
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#235D3A", // Darker shade on hover
                  },
                }}
              >
                en
              </ToggleButton>
            </div>
            <li className="semiBold font15 pointer flexCenter">
              <a
                href="/login"
                className="radius8 lightBg"
                style={{ padding: "10px 15px" }}
              >
                تسجيل الدخول
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  ${i18n.language === "ar" ? "left: 0;" : "right:0;"}
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
