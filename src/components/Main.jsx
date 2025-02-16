import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import {
  Assignment as TotalTasksIcon,
  CheckCircle as CompletedTasksIcon,
  Star as StaredTasksIcon,
  Block as StuckTasksIcon,
} from "@mui/icons-material";
const Main = () => {
  const dates = [
    "2023-10-01", // Sunday
    "2023-10-02", // Monday
    "2023-10-03", // Tuesday
    "2023-10-04", // Wednesday
    "2023-10-05", // Thursday
    "2023-10-06", // Friday
    "2023-10-07", // Saturday
  ];

  // Function to get the day of the week from a date
  const getDayOfWeek = (date) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayIndex = new Date(date).getDay();
    return days[dayIndex];
  };

  // Format the x-axis labels to show both date and day of the week
  const xAxisData = dates.map((date) => `${date} (${getDayOfWeek(date)})`);
  const metrics = [
    {
      title: "Total Tasks",
      value: 24,
      icon: <TotalTasksIcon fontSize="large" />,
      color: "#397D54", // Green
    },
    {
      title: "Completed Tasks",
      value: 12,
      icon: <CompletedTasksIcon fontSize="large" />,
      color: "#00C851", // Light green
    },
    {
      title: "Stared Tasks",
      value: 5,
      icon: <StaredTasksIcon fontSize="large" />,
      color: "#ffbb33", // Yellow
    },
    {
      title: "Stuck Tasks",
      value: 3,
      icon: <StuckTasksIcon fontSize="large" />,
      color: "#ff4444", // Red
    },
  ];
  // Sample series data (e.g., metrics for each date)
  const seriesData = [4, 8, 2, 6, 9, 3, 7];
  return (
    <>
      <div className="w-full px-5">
        <Grid container spacing={3}>
          {metrics.map((metric, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: metric.color,
                  color: "#ffffff", // White text for better contrast
                  borderRadius: 2, // Rounded corners
                  boxShadow: 3, // Add shadow
                }}
              >
                <CardContent
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {metric.title}
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      {metric.value}
                    </Typography>
                  </div>
                  <div>{metric.icon}</div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <BarChart
        xAxis={[
          {
            scaleType: "band",
            data: xAxisData, // x-axis labels (date + day of the week)
            label: "Date (Day of the Week)", // x-axis label
          },
        ]}
        series={[
          {
            data: seriesData, // y-axis values
            label: "Metric", // Series label
            color: "#397D54", // Custom bar color
          },
        ]}
        width={600}
        height={400}
        className="mt-10 max-md:!w-[400px] max-sm:!w-[300px]"
      />
    </>
  );
};

export default Main;
