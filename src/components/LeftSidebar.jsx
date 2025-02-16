import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getSidebarLinks } from "../constants";
import { useTranslation } from "react-i18next";

const LeftSidebar = () => {
  const { pathname } = useLocation(); // Ensure you're inside <BrowserRouter>
  const { t } = useTranslation("global");
  const sidebarLinks = getSidebarLinks(t);
  return (
    <section
      className="sticky 
    left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto
    p-6  dark:shadow-none max-sm:hidden lg:w-[266px]"
    >
      <div className="flex flex-1 flex-col gap-6">
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
              <p
                className={`${
                  isActive ? "base-bold" : "base-medium"
                } max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default LeftSidebar;
