import { Divider, List, ListItem, ListSubheader } from "@mui/material";
import styles from "./datosMedicosSheet-styles.module.css";

const DatosMedicosSheet = () => {
  return (
    <section className={styles.container}>
      {/* Enfermedades */}
      <div className={styles.medicDataContainer}>
        <section className={styles.diseasesContainer}>
          <div className={styles.diseases}>
            <h3 className={styles.subtitle}>Enfermedades Crónicas</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Sí</p>
            </div>
          </div>
          <div className={styles.details}>
            <h3 className={styles.subtitle}>Detalles Enfermedad</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Asma, alergia al plovo</p>
            </div>
          </div>
        </section>
        {/* Medicacion */}
        <section className={styles.diseasesContainer}>
          <div className={styles.diseases}>
            <h3 className={styles.subtitle}>Medicación</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Sí</p>
            </div>
          </div>
          <div className={styles.details}>
            <h3 className={styles.subtitle}>Detalles Medicamento</h3>
            <div className={styles.dataContainer}>
              <p className={styles.data}>Inhalador</p>
            </div>
          </div>
        </section>

        <div className={styles.titleContainer}>
          <h2 className={styles.title}>Instructores y Clases:</h2>
          <Divider
            sx={{
              width: 1
            }}
          />
        </div>

        <section className={styles.instructorsContainer}>
          <List
            className={styles.list}
            subheader={
              <ListSubheader
                sx={{
                  height: "25%",
                  width: 1,
                  fontFamily: "montserrat",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  justifyContent: "flex-start",
                  textAlign: "left",
                  color: "#000",
                  background: "none"
                }}
                component="div"
                id="nested-list-subheader"
              >
                <p className={styles.subtitle}>Instructores</p>
              </ListSubheader>
            }
          >
            <ListItem sx={{ width: 1, height: "25%" }}>
              <p className={styles.instructor}>Pedro Pérez</p>
            </ListItem>
            <ListItem sx={{ width: 1, height: "25%" }}>
              <p className={styles.instructor}>Pedro Pérez</p>
            </ListItem>
            <ListItem sx={{ width: 1, height: "25%" }}>
              <p className={styles.instructor}>Pedro Pérez</p>
            </ListItem>
          </List>

          <List
            className={styles.list}
            subheader={
              <ListSubheader
                sx={{
                  height: "25%",
                  width: 1,
                  fontFamily: "montserrat",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  justifyContent: "flex-start",
                  textAlign: "left",
                  color: "#000",
                  background: "none"
                }}
                component="div"
                id="nested-list-subheader"
              >
                <p className={styles.subtitle}>Instructores</p>
              </ListSubheader>
            }
          >
            <ListItem sx={{ width: 1, height: "25%" }}>
              <p className={styles.instructor}>TRX</p>
            </ListItem>
            <ListItem sx={{ width: 1, height: "25%" }}>
              <p className={styles.instructor}>Crossfit</p>
            </ListItem>
            <ListItem sx={{ width: 1, height: "25%" }}>
              <p className={styles.instructor}>Zumba</p>
            </ListItem>
          </List>
        </section>

        <section className={styles.notesContainer}>
          <h3 className={styles.subtitle}>Observaciones</h3>
          <div className={styles.notes}>
            <p className={styles.data}>Inhalador</p>
          </div>
        </section>
        <div className={styles.buttonGroup}>
          <button className={styles.button}>
            <p className={styles.textButton}>Editar</p>
          </button>
          <button className={styles.button}>
            <p className={styles.textButton}>Borrar</p>
          </button>
          <button className={styles.button}>
            <p className={styles.textButton}>Cerrar</p>
          </button>
        </div>
      </div>
    </section>
  );
};
export default DatosMedicosSheet;
