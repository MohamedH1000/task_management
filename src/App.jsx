import { Route, Routes } from "react-router-dom";
import "./App.css";
import RightSidebar from "./components/RightSidebar";
import Home from "./components/Home";
import Login from "./components/AuthLayout/Login/Login";
import Register from "./components/AuthLayout/Register/Register";
import DefaultLayout from "./Layouts/DefaultLayout";
import AuthLayout from "./Layouts/AuthLayout";
import HomeLayout from "./Layouts/HomeLayout";
import HomePage from "./components/HomePage/HomePage";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Projects from "./components/DashboardLayout/Projects";
import TimeLine from "./components/DashboardLayout/TimeLine";
import Team from "./components/DashboardLayout/Team";
import Settings from "./components/DashboardLayout/Settings";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  return (
    <>
      <Routes>
        {/* Routes with DefaultLayout (includes sidebar) */}
        <Route element={<HomeLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
        <Route element={<DefaultLayout />}>
          <Route
            path="/dashboard"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/timeline" element={<TimeLine />} />
          <Route path="/team" element={<Team />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" />
          {/* Add other routes that need the sidebar here */}
        </Route>

        {/* Routes with AuthLayout (no sidebar) */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
