import {
  LayoutGrid,
  FileText,
  CalendarDays,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

export const getSidebarLinks = (t) => [
  {
    imgURL: LayoutGrid,
    route: "/dashboard",
    label: t("dashboard.leftSideBar.overview"),
  },
  {
    imgURL: FileText,
    route: "/projects",
    label: t("dashboard.leftSideBar.projects"),
  },
  {
    imgURL: CalendarDays,
    route: "/timeline",
    label: t("dashboard.leftSideBar.timeline"),
  },
  {
    imgURL: Users,
    route: "/team",
    label: t("dashboard.leftSideBar.team"),
  },
  {
    imgURL: Settings,
    route: "/settings",
    label: t("dashboard.leftSideBar.settings"),
  },
  {
    imgURL: LogOut,
    route: "/logout",
    label: t("dashboard.leftSideBar.logout"),
  },
];
