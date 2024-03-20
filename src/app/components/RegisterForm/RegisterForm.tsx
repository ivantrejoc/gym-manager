import registerFormSytles from "./registerForm-styles.module.css";
import Image from "next/image";

const RegisterForm = () => {
    return (
        <div className={registerFormSytles.layout}>
          <div className={registerFormSytles.cardHeader}>
            <div className={registerFormSytles.content}>
              <div className={registerFormSytles.textHeader}>
                <h3 className={registerFormSytles.title}>Crear Usuario</h3>
                <p className={registerFormSytles.callToAction}>
                  Registra tus credenciales
                </p>
              </div>
              <Image className= {registerFormSytles.image} src={"/images/gym-manager.png"} 
              width={1000}
              height={1000}
              alt="gym manager logo" />
            </div>
          </div>
          <div className={registerFormSytles.cardContent}>
            <form className={registerFormSytles.form} action="">
              <input
                className={registerFormSytles.input}
                type="text"
                placeholder="Usuario"
              />
              <input
                className={registerFormSytles.input}
                type="password"
                placeholder="Contraseña"
              />
              <input
                className={registerFormSytles.input}
                type="password"
                placeholder="Repite tu contraseña"
              />
              
              <select className={registerFormSytles.role} name="role" id="role">
              <option className={registerFormSytles.options} defaultValue={0}>Escoge tu rol
                </option>
  <option className={registerFormSytles.options} value="usuario">Usuario</option>
  <option className={registerFormSytles.options} value="Administrador">Administrador</option>
  
</select>
                  <button className={registerFormSytles.button}>
                <p className={registerFormSytles.textButton}>Regístrate</p>
            </button>
            <div className={registerFormSytles.actions}>
                <a className={registerFormSytles.linkText1} href="/login">¿Ya tienes cuenta? Inicia sesión
                    </a>
                
            </div>
            </form>
        
          </div>
        </div>
      );
}
export default RegisterForm