"use client";

// import component
import LogoLanguage from "@/components/Comnon/LogoLanguage";
import LoginWrapper from "@/components/Comnon/LoginWrapper";

//import MUI
import TextField from "@mui/material/TextField";
import LockIcon from "@mui/icons-material/Lock";
import Button from "@mui/material/Button";

import "@/styles/main.css";

function changePw() {
  return (
    <LoginWrapper>
      <LogoLanguage />
      <form className="changePw__form">
        <div className="form__input">
          <span>New Password</span> <br />
          <TextField
            id="filled-basic"
            label="Enter your new password"
            variant="filled"
            type="password"
            className="input"
          />
          <div className="form-input__icon">
            <LockIcon className="icon" />
          </div>
        </div>
        <div className="form__input">
          <span>Confirm Password</span> <br />
          <TextField
            id="filled-basic"
            label="Please Re-enter your password"
            variant="filled"
            type="password"
            className="input"
          />
          <div className="form-input__icon">
            <LockIcon className="icon" />
          </div>
        </div>
        <Button className="btn form__btnlogin" variant="contained">
          Change Password
        </Button>
      </form>
    </LoginWrapper>
  );
}
export default changePw;
