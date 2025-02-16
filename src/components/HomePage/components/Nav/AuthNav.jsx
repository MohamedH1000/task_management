import React, { useEffect, useState } from "react";
import styled from "styled-components";

import LogoIcon from "../../../../assets/svg/Logo";
import { useTranslation } from "react-i18next";
import ToggleButton from "@mui/material/ToggleButton";
import { Link } from "react-router-dom";

export default function AuthNav() {
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
      {/* <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      {/* {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />} */}
      <div className="px-20 max-md:px-10 max-sm:px-5">
        <nav className="flex items-center justify-between h-[80px]">
          <Link
            className="flex justify-center items-center cursor-pointer gap-3"
            to="/"
            smooth={true}
          >
            <LogoIcon />
            <h1 className="font20 extraBold tajwal-medium text-[#235D3A] font-bold text-xl max-md:text-md">
              {t("header.name")}
            </h1>
          </Link>
          <Link
            style={{ padding: "10px 15px", color: "#397D54" }}
            to="/"
            className="font-bold max-md:text-sm cursor-pointer"
          >
            {t("auth.login.backMain")}
          </Link>
          <div className="md:flex justify-center items-center  gap-4">
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
          </div>
        </nav>
      </div>
    </>
  );
}

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
