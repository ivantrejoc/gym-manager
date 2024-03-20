import LoginForm from "../components/LoginForm/LoginForm";
import loginStyles from "./login-styles.module.css";

const Login = () => {
  return (
    <main className={loginStyles.view}>
      <LoginForm />
    </main>
  );
};
export default Login;
