import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box, Tab, Tabs } from "@mui/material";
import { useTranslation } from "react-i18next";
import { CircleCheck, Hourglass, Rocket } from "lucide-react";
import GanttChart from "./GanttChart";

// Setup moment localizer
const localizer = momentLocalizer(moment);

// Dummy data
const events = [
  {
    title: "Meeting with Team",
    start: new Date(2025, 1, 14, 10, 0), // February 14, 2025, 10:00 AM
    end: new Date(2025, 1, 14, 11, 0), // February 14, 2025, 11:00 AM
  },
  {
    title: "Lunch Break",
    start: new Date(2025, 1, 14, 12, 0), // February 14, 2025, 12:00 PM
    end: new Date(2025, 1, 14, 13, 0), // February 14, 2025, 1:00 PM
  },
  {
    title: "Project Deadline",
    start: new Date(2025, 1, 15, 14, 0), // February 15, 2025, 2:00 PM
    end: new Date(2025, 1, 15, 16, 0), // February 15, 2025, 4:00 PM
  },
];
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
const TimeLine = () => {
  const { t } = useTranslation("global");
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Custom event styles
  const eventStyleGetter = (event) => {
    const backgroundColor = event.title.includes("Meeting")
      ? "#3174ad" // Blue for meetings
      : event.title.includes("Lunch")
      ? "#5cb85c" // Green for lunch
      : "#d9534f"; // Red for deadlines

    return {
      style: {
        backgroundColor,
        borderRadius: "5px",
        color: "white",
        border: "none",
      },
    };
  };

  return (
    <>
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
                label={t("dashboard.timeline.calender")}
                icon={<Rocket />}
                {...a11yProps(0)}
                sx={{
                  flexDirection: "row",
                  gap: 1,
                }}
              />
              <Tab
                label={t("dashboard.timeline.ganttchart")}
                icon={<Hourglass />}
                {...a11yProps(1)}
                sx={{ flexDirection: "row", gap: 1 }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div
              style={{ height: "600px", marginTop: "20px" }}
              className="w-full px-20 max-md:px-5"
            >
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView="month" // Default view (month, week, day, agenda)
                views={["month", "week", "day", "agenda"]} // Available views
                onSelectEvent={(event) => alert(`Selected: ${event.title}`)} // Handle event click
                eventPropGetter={eventStyleGetter} // Custom event styles
                tooltipAccessor={(event) => event.title} // Show tooltip on hover
                popup // Enable popup for event details
                selectable // Allow selecting time slots
                onSelectSlot={(slotInfo) =>
                  alert(
                    `Selected slot: ${slotInfo.start.toLocaleString()} - ${slotInfo.end.toLocaleString()}`
                  )
                } // Handle slot selection
              />
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <GanttChart />
          </CustomTabPanel>
        </Box>
      </div>
    </>
  );
};

export default TimeLine;
