import { Plus } from "lucide-react";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TaskCard from "./TaskCard";

const ToDo = () => {
  const tasks = [
    {
      title: "Design Task Management",
      dueDate: "Oct 15",
      priority: "High",
      description: "Redesign the user interface to improve user experience.",
      role: "Web Developer",
      progress: 25,
    },
    {
      title: "Mobile Fitness App",
      dueDate: "Oct 10",
      priority: "Medium",
      description:
        "Develop a mobile app to track fitness activities and provide personalized workout plans.",
      role: "Mobile Developer",
      progress: 40,
    },
    {
      title: "Landing Page Compro",
      dueDate: "Oct 12",
      priority: "Low",
      description:
        "Create a landing page to showcase company services and attract potential clients.",
      role: "UI Designer",
      progress: 60,
    },
    {
      title: "Fintech Mobile App",
      dueDate: "Oct 18",
      priority: "High",
      description:
        "Build a mobile app for managing personal finances, including budgeting and expense tracking.",
      role: "UI Designer",
      progress: 55,
    },
    {
      title: "Dashboard Exploration",
      dueDate: "Oct 5",
      priority: "High",
      description:
        "Design a dashboard to provide users with an overview of their data and key metrics.",
      role: "Web Developer",
      progress: 100,
    },
    {
      title: "Logo & Branding",
      dueDate: "Oct 3",
      priority: "Low",
      description:
        "Develop a new logo and branding materials to refresh the company’s visual identity.",
      role: "Graphic Designer",
      progress: 100,
    },
    {
      title: "E-commerce Platform",
      dueDate: "Oct 20",
      priority: "High",
      description:
        "Develop an e-commerce platform with features like product listings, shopping cart, and payment integration.",
      role: "Full Stack Developer",
      progress: 30,
    },
    {
      title: "Social Media Campaign",
      dueDate: "Oct 8",
      priority: "Medium",
      description:
        "Plan and execute a social media campaign to increase brand awareness and engagement.",
      role: "Marketing Specialist",
      progress: 70,
    },
    {
      title: "Data Analytics Tool",
      dueDate: "Oct 25",
      priority: "High",
      description:
        "Create a tool for analyzing large datasets and generating actionable insights.",
      role: "Data Scientist",
      progress: 45,
    },
    {
      title: "Customer Support Portal",
      dueDate: "Oct 14",
      priority: "Medium",
      description:
        "Develop a portal for customers to submit support tickets and track their resolution status.",
      role: "Web Developer",
      progress: 50,
    },
    {
      title: "Product Launch Event",
      dueDate: "Oct 22",
      priority: "High",
      description:
        "Organize a virtual event to launch a new product and engage with potential customers.",
      role: "Event Coordinator",
      progress: 65,
    },
    {
      title: "Content Management System",
      dueDate: "Oct 30",
      priority: "Medium",
      description:
        "Build a CMS to allow easy content updates and management for the company website.",
      role: "Software Engineer",
      progress: 35,
    },
    {
      title: "User Research Study",
      dueDate: "Oct 17",
      priority: "Low",
      description:
        "Conduct user research to gather insights and improve product usability.",
      role: "UX Researcher",
      progress: 80,
    },
    {
      title: "Mobile Game Development",
      dueDate: "Oct 28",
      priority: "High",
      description:
        "Develop a mobile game with engaging gameplay and high-quality graphics.",
      role: "Game Developer",
      progress: 20,
    },
    {
      title: "SEO Optimization",
      dueDate: "Oct 11",
      priority: "Medium",
      description:
        "Optimize the company website for search engines to improve organic traffic.",
      role: "SEO Specialist",
      progress: 75,
    },
    {
      title: "Cloud Migration",
      dueDate: "Oct 19",
      priority: "High",
      description:
        "Migrate the company’s infrastructure to a cloud-based platform for better scalability.",
      role: "Cloud Engineer",
      progress: 50,
    },
    {
      title: "Employee Training Program",
      dueDate: "Oct 13",
      priority: "Low",
      description:
        "Develop a training program to enhance employee skills and productivity.",
      role: "HR Specialist",
      progress: 90,
    },
    {
      title: "Cybersecurity Audit",
      dueDate: "Oct 24",
      priority: "High",
      description:
        "Conduct a comprehensive audit to identify and address security vulnerabilities.",
      role: "Cybersecurity Analyst",
      progress: 40,
    },
    {
      title: "Newsletter Design",
      dueDate: "Oct 9",
      priority: "Low",
      description:
        "Design a monthly newsletter to keep clients informed about company updates.",
      role: "Graphic Designer",
      progress: 85,
    },
    {
      title: "API Integration",
      dueDate: "Oct 16",
      priority: "Medium",
      description:
        "Integrate third-party APIs to enhance the functionality of the company’s software.",
      role: "Software Engineer",
      progress: 55,
    },
    {
      title: "Virtual Reality Experience",
      dueDate: "Oct 29",
      priority: "High",
      description:
        "Develop a VR experience for immersive product demonstrations.",
      role: "VR Developer",
      progress: 25,
    },
    {
      title: "Customer Feedback Analysis",
      dueDate: "Oct 21",
      priority: "Medium",
      description:
        "Analyze customer feedback to identify areas for improvement in products and services.",
      role: "Data Analyst",
      progress: 70,
    },
  ];

  return (
    <>
      <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
        <button className="text-[gray] border-dashed rounded-md px-4 py-4 flex w-full justify-center border-[1px]  cursor-pointer">
          Add Task <Plus />
        </button>
        <button className="text-[gray] border-dashed rounded-md px-4 py-4 flex justify-center border-[1px] w-full cursor-pointer max-sm:hidden">
          Add Task <Plus />
        </button>
        <button className="text-[gray] border-dashed rounded-md px-4 py-4 flex justify-center border-[1px] w-full cursor-pointer max-md:hidden">
          Add Task <Plus />
        </button>
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-3 gap-3 max-md:grid-cols-2 max-sm:grid-cols-1">
          {tasks.map((task, i) => (
            <Card
              key={i}
              variant="outlined"
              sx={{
                borderRadius: "10px",
              }}
              className="shadow-md"
            >
              <TaskCard task={task} />
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ToDo;
