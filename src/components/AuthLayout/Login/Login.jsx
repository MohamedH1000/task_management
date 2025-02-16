import React from "react";
import { TextField, Button } from "@mui/material";
import AuthNav from "../../HomePage/components/Nav/AuthNav";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation("global");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };
  return (
    <>
      <AuthNav />
      <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="max-w-[507px] w-full h-[510px] bg-white flex flex-col items-center justify-start rounded-2xl shadow-lg mx-10">
          <h1 className="text-2xl font-bold mb-8 text-[#397D54] mt-10">
            {t("auth.login.login")}
          </h1>
          <form onSubmit={handleSubmit} className="w-full max-w-xs">
            <div className="mb-3 w-full flex flex-col gap-1">
              <label htmlFor="id" className="font-bold text-[#397D54]">
                {t("auth.login.id")}
              </label>
              <TextField
                name="id"
                fullWidth
                label="id"
                variant="outlined"
                type="id"
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#397D54", // Outline color
                    },
                    "&:hover fieldset": {
                      borderColor: "#397D54", // Outline color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#397D54", // Outline color when focused
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#397D54", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#397D54", // Label color when focused
                  },
                  "& .MuiInputBase-input": {
                    color: "#397D54", // Input text color
                  },
                }}
              />
            </div>
            <div className="mb-6 w-full flex flex-col gap-1">
              <label htmlFor="password" className="font-bold text-[#397D54]">
                {t("auth.login.password")}
              </label>

              <TextField
                name="password"
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                required
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#397D54", // Outline color
                    },
                    "&:hover fieldset": {
                      borderColor: "#397D54", // Outline color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#397D54", // Outline color when focused
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#397D54", // Label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#397D54", // Label color when focused
                  },
                  "& .MuiInputBase-input": {
                    color: "#397D54", // Input text color
                  },
                }}
              />
            </div>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                bgcolor: "#397D54",
                height: "50px",
              }}
            >
              {t("auth.login.login")}
            </Button>
            <p className="mt-3 font-bold text-lg text-center text-[#397D54] cursor-pointer">
              {t("auth.login.resetPassword")}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
