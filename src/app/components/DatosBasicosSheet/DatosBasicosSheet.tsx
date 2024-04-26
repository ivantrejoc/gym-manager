import { Divider } from "@mui/material";
import styles from "./datosBasicosSheet-styles.module.css";

const DatosBasicosSheet = () => {
  return (
    <section className={styles.container}>
      <section className={styles.datosBasicos}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Datos Básicos:</h2>
          <Divider
            sx={{
              width: 1
            }}
          />
        </div>

        {/* Datos Identificación */}
        <section className={styles.idContainer}>
          <div className={styles.socio}>
            <h3 className={styles.subtitle}>No. Socio</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>11.123.456</p>
            </div>
          </div>

          <div className={styles.id}>
            <h3 className={styles.subtitle}>Identificación</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>11.123.456</p>
            </div>
          </div>

          <div className={styles.status}>
            <h3 className={styles.subtitle}>Estatus</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Actívo</p>
            </div>
          </div>
          <div className={styles.registrationDate}>
            <h3 className={styles.subtitle}>Fecha de Ingreso</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>21/11/2023</p>
            </div>
          </div>
        </section>

        {/* Nombres y apellidos   */}
        <section className={styles.nameContainer}>
          <div className={styles.names}>
            <h3 className={styles.subtitle}>Nombres</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Jose Alberto</p>
            </div>
          </div>
          <div className={styles.names}>
            <h3 className={styles.subtitle}>Apellidos</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>García Colmenares</p>
            </div>
          </div>
        </section>

        {/* Datos contacto */}
        <section className={styles.contactContainer}>
          <div className={styles.telf}>
            <h3 className={styles.subtitle}>Telf Fijo</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>02417268963</p>
            </div>
          </div>
          <div className={styles.telf}>
            <h3 className={styles.subtitle}>Telf Móvil</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>04127268963</p>
            </div>
          </div>

          <div className={styles.email}>
            <h3 className={styles.subtitle}>Email</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>josealgar@gmail.com</p>
            </div>
          </div>
        </section>
        {/* Dirección               */}
        <section className={styles.addressContainer}>
          <div className={styles.address1}>
            <h3 className={styles.subtitle}>Dirección</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Av. Siempre viva, calle los pinos</p>
            </div>
          </div>
          <div className={styles.dataContainer}>
            <p className={styles.data}>Casa 29-14</p>
          </div>
        </section>

        {/* Pais */}
        <section className={styles.countryContainer}>
          <div className={styles.country}>
            <h3 className={styles.subtitle}>País</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Venezuela</p>
            </div>
          </div>

          <div className={styles.country}>
            <h3 className={styles.subtitle}>Provincia</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Aragua</p>
            </div>
          </div>

          <div className={styles.country}>
            <h3 className={styles.subtitle}>Ciudad</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Maracay</p>
            </div>
          </div>
        </section>
      </section>

      {/* Datos medicos */}
      <section className={styles.datosMedicos}>
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Datos Médicos</h2>
          <Divider
            sx={{
              width: 1
            }}
          />
        </div>
        {/* Fecha nac */}

        <section className={styles.ageContainer}>
          <div className={styles.birthDate}>
            <h3 className={styles.subtitle}>Fecha nac</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>15/01/1996</p>
            </div>
          </div>

          <div className={styles.age}>
            <h3 className={styles.subtitle}>Edad</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>28</p>
            </div>
          </div>

          <div className={styles.birthDate}>
            <h3 className={styles.subtitle}>Sexo</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Masculino</p>
            </div>
          </div>
        </section>

        {/* Peso */}
        <section className={styles.weightContainer}>
          <div className={styles.weight}>
            <h3 className={styles.subtitle}>Peso</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Kg 85</p>
            </div>
          </div>
          <div className={styles.weight}>
            <h3 className={styles.subtitle}>IMC</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>120</p>
            </div>
          </div>
          <div className={styles.training}>
            <h3 className={styles.subtitle}>Tipo Entrenamiento</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Gimnasio</p>
            </div>
          </div>
        </section>

        {/* Lesiones */}
        <section className={styles.injuriesContainer}>
          <div className={styles.weight}>
            <h3 className={styles.subtitle}>Lesiones</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Sí</p>
            </div>
          </div>
          <div className={styles.injuries}>
            <h3 className={styles.subtitle}>Detalles lesión</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Lesión de rodilla</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default DatosBasicosSheet;
