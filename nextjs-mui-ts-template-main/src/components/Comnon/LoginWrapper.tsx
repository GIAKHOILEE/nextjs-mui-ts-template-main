import { ReactNode } from "react";
import "../../styles/main.css";

type LoginWrapperProps = {
  children: ReactNode;
};
function LoginWrapper({ children }: LoginWrapperProps) {
  return (
    <div className="login__wrapper">
      <div className="login-wrapper__container">{children}</div>
    </div>
  );
}
export default LoginWrapper;
