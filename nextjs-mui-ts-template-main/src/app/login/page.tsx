"use client";

// import component
import LogoLanguage from "@/components/Comnon/LogoLanguage";
import LoginWrapper from "@/components/Comnon/LoginWrapper";
//import MUI
import PublicIcon from "@mui/icons-material/Public";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/Lock";

import "@/styles/main.css";

function Login() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <LoginWrapper>
      <LogoLanguage />
      <form className="login__form">
        <div className="form__input">
          <span>Username</span> <br />
          <TextField
            id="filled-basic"
            label="Enter your username"
            variant="filled"
            className="input"
          />
          <div className="form-input__icon">
            <PersonOutlineIcon className="icon" />
          </div>
        </div>
        <div className="form__input">
          <span>Password</span> <br />
          <TextField
            id="filled-basic"
            label="Enter your password"
            variant="filled"
            type="password"
            className="input"
          />
          <div className="form-input__icon">
            <LockIcon className="icon" />
          </div>
        </div>
        <div className="form__pwinter">
          <div className="pwinter__rememberpw">
            <Checkbox {...label} />
            <span>Remember me</span>
          </div>
          <a className="pwinter__forgot">forgot password?</a>
        </div>
        <Button className="btn form__btnlogin" variant="contained">
          Login now
        </Button>
        <Button className="form__btnsingup" variant="outlined">
          SingUp Now
        </Button>
      </form>
    </LoginWrapper>
  );
}
export default Login;
