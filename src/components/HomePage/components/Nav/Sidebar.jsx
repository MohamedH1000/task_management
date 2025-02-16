import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../../../assets/svg/CloseIcon";
import LogoIcon from "../../../../assets/svg/Logo";
import ToggleButton from "@mui/material/ToggleButton";
import { useTranslation } from "react-i18next";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  const [t, i18n] = useTranslation("global");
  // const [alignment, setAlignment] = React.useState(i18n.language);
  // const handleChange = (event, newAlignment) => {
  //   setAlignment(newAlignment);
  // };

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <Wrapper className="animate bg-[#235D3A]" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            ادارة المهام
          </h1>
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            {t("header.main")}
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            المميزات
          </Link>
        </li>

        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            المدونات
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-60}
          >
            الباقات
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            التواصل
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="">
        {/* <li className="semiBold font15 pointer">
          <a
            href="/login"
            style={{ padding: "10px 30px 10px 0" }}
            className="whiteColor"
          >
            تسجيل الدخول
          </a>
        </li> */}
        <li className="semiBold font15 pointer flexCenter">
          <a
            href="/login"
            className="radius8 lightBg"
            style={{ padding: "10px 15px" }}
          >
            تسجيل الدخول
          </a>
        </li>
      </UlStyle>
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
          ar
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
          en
        </ToggleButton>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
