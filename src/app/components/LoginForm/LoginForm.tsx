import loginFormStyles from "./loginForm-styles.module.css";
import Image from "next/image";

const LoginForm = () => {
  return (
    <div className={loginFormStyles.layout}>
      <div className={loginFormStyles.cardHeader}>
        <div className={loginFormStyles.content}>
          <div className={loginFormStyles.textHeader}>
            <h3 className={loginFormStyles.title}>Inicia Sesión</h3>
            <p className={loginFormStyles.callToAction}>
              Ingresa tus credenciales
            </p>
          </div>
          <Image className= {loginFormStyles.image} src={"/images/gym-manager.png"} 
          width={1000}
          height={1000}
          alt="gym manager logo" />
        </div>
      </div>
      <div className={loginFormStyles.cardContent}>
        <form className={loginFormStyles.form} action="">
          <input
            className={loginFormStyles.input}
            type="text"
            placeholder="Usuario"
          />
          <input
            className={loginFormStyles.input}
            type="password"
            placeholder="Contraseña"
          />
              <button className={loginFormStyles.button}>
            <p className={loginFormStyles.textButton}>Inicia Sesión</p>
        </button>
        <div className={loginFormStyles.actions}>
            <a className={loginFormStyles.linkText1} href="">Crear cuenta
                </a>
            <a className={loginFormStyles.linkText2} href="">Olvidaste tu contraseña?
                </a>
        </div>
        </form>
    
      </div>
    </div>
  );
};
export default LoginForm;
