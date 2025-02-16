import * as React from "react";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import { Avatar, AvatarGroup, LinearProgress } from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const TaskCard = ({ task }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#ff4444"; // Red for high priority
      case "Medium":
        return "#ffbb33"; // Yellow for medium priority
      case "Low":
        return "#00C851"; // Green for low priority
      default:
        return "#e0e0e0"; // Default color (gray)
    }
  };
  return (
    <React.Fragment>
      <CardContent>
        {/* Task Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", color: "#235D3A" }} // Green color for title
        >
          {task.title}
        </Typography>

        {/* Due Date and Priority */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Due: {task.dueDate}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color:
                task.priority === "High"
                  ? "#ff4444" // Red for high priority
                  : task.priority === "Medium"
                  ? "#ffbb33" // Yellow for medium priority
                  : "#00C851", // Green for low priority
              fontWeight: "bold",
            }}
          >
            <Chip
              label={task.priority}
              sx={{
                backgroundColor: getPriorityColor(task.priority), // Set background color dynamically
                color: "#ffffff", // Text color (white for better contrast)
                fontWeight: "bold", // Make the text bold
              }}
            />
          </Typography>
        </Box>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{ mt: 2, color: "text.secondary", fontWeight: "bold" }}
        >
          {task.description}
        </Typography>

        {/* Role and Progress */}
        <Chip label={task.role} className="mt-5" />

        <Box sx={{ width: "100%", mt: 2 }}>
          {/* Progress Bar */}
          <LinearProgress
            variant="determinate" // Show determinate progress
            value={task.progress} // Set progress value
            sx={{
              height: 10, // Adjust height of the progress bar
              borderRadius: 5, // Add rounded corners
              backgroundColor: "#e0e0e0", // Background color of the progress bar
              "& .MuiLinearProgress-bar": {
                borderRadius: 5, // Rounded corners for the progress bar
                backgroundColor: "#397D54", // Color of the progress bar
              },
            }}
          />
          {/* Progress Percentage Text */}
          <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
            Progress: {task.progress}%
          </Typography>
        </Box>
      </CardContent>
      <div className="flex justify-center items-center">
        <hr className="text-[#235D3A] w-[95%] " />
      </div>
      {/* Action Button */}
      <CardActions className="flex justify-between items-center">
        <Button
          size="small"
          sx={{
            color: "#235D3A", // Green text color
            fontWeight: "bold",
            textTransform: "none", // Disable uppercase transformation
          }}
        >
          View Details
        </Button>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </CardActions>
    </React.Fragment>
  );
};

export default TaskCard;
