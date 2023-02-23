"use client";
// import component
import LoginWrapper from "../../../components/Comnon/LoginWrapper";
import LogoLanguage from "../../../components/Comnon/LogoLanguage";
import SignupNavbar from "../../../components/Comnon/SignupNavbar";
// import MUI
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import "@/styles/main.css";

function step1() {
  return (
    <LoginWrapper>
      <LogoLanguage />
      <SignupNavbar />
      <div className="signupcontent">

      </div>
    </LoginWrapper>
  );
}
export default step1;
