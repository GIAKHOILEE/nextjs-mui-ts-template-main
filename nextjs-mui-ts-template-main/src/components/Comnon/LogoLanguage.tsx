"use client";

import { ReactNode } from "react";
import "../../styles/main.css";
import PublicIcon from "@mui/icons-material/Public";

function LogoLanguage() {
  return (
    <div className="head">
      <div className="logo">
        <img src="/imgs/VBPO_Logo.png" alt="" />
      </div>
      <div className="language">
        <PublicIcon className="language__icon" />
        <span>ENG</span>
      </div>
    </div>
  );
}
export default LogoLanguage;
