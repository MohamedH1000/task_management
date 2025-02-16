import React from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import { Rocket } from "lucide-react";
import { Hourglass } from "lucide-react";
import { CircleCheck } from "lucide-react";
import { Plus } from "lucide-react";
import { Button } from "@mui/material";
import ToDo from "./ToDo";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Projects = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { t } = useTranslation("global");
  return (
    <div className="mt-5 w-full">
      <div className="flex justify-between items-center px-5">
        <h1 className="font-bold text-2xl text-[#235D3A]">
          {t("dashboard.projects.projects")}
        </h1>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#235D3A", color: "white" }} // Add green background and white text
        >
          {t("dashboard.projects.addProject") + " "}
          <Plus />
        </Button>
      </div>
      <div className="mt-4 w-full">
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              variant="fullWidth"
              sx={{
                width: "100%",
                "& .MuiTab-root": {
                  color: "green", // Change the color of unselected tabs
                },
                "& .Mui-selected": {
                  color: "#235D3A", // Change the color of the selected tab
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "green", // Change the color of the indicator
                },
              }}
            >
              <Tab
                label={t("dashboard.projects.todo")}
                icon={<Rocket />}
                {...a11yProps(0)}
                sx={{
                  flexDirection: "row",
                  gap: 1,
                }}
              />
              <Tab
                label={t("dashboard.projects.onProgress")}
                icon={<Hourglass />}
                {...a11yProps(1)}
                sx={{ flexDirection: "row", gap: 1 }}
              />
              <Tab
                label={t("dashboard.projects.completed")}
                {...a11yProps(2)}
                icon={<CircleCheck />}
                sx={{ flexDirection: "row", gap: 1 }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <ToDo />
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </Box>
      </div>
    </div>
  );
};

export default Projects;
