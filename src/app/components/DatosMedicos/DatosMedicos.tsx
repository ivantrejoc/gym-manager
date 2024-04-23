import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import styles from "./datosMedicos-styles.module.css";

const DatosMedicos = () => {
  return (
    <form action="" className={styles.container}>
      <div className={styles.ageContainer}>
        <TextField
          size="small"
          label="Fecha Nac:"
          className={styles.birthDate}
        />
        <TextField size="small" label="Edad:" className={styles.age} />

        <FormControl
          size="small"
          variant="outlined"
          sx={{ minWidth: 120, maxWidth: 300 }}
          className={styles.selectContainer}
        >
          <InputLabel id="select-label">Sexo:</InputLabel>

          <Select
            labelId="select-label"
            id="select-demo"
            label="Tipo"
            value={""}
            className={styles.select}
          >
            <MenuItem value={"masculino"}>Masculino</MenuItem>

            <MenuItem value={"femenino"}>Femenino</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.weightContainer}>
        <TextField size="small" label="Peso:" className={styles.weight} />
        <TextField size="small" label="IMC:" className={styles.weight} />

        <FormControl
          size="small"
          variant="outlined"
          className={styles.selectTrainingContainer}
        >
          <InputLabel id="select-label"> Entrenamiento:</InputLabel>

          <Select
            labelId="select-label"
            id="select-demo"
            variant="outlined"
            label="Tipo"
            value={""}
            className={styles.select}
          >
            <MenuItem value={"gimnasio"}>Gimnasio</MenuItem>

            <MenuItem value={"cardio"}>Cardiovascular</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className={styles.medicalContainer}>
        <div className={styles.injuriesContainer}>
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Lesiones"
            sx={{ m: 0 }}
          />

          <TextField
            size="small"
            label="Indique la lesión:"
            fullWidth
            className={styles.injuries}
          />
        </div>
        <div className={styles.diseasesContainer}>
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Enfermedades Crónicas"
            sx={{ m: 0 }}
          />

          <TextField
            size="small"
            label="Indique la enfermedad:"
            fullWidth
            className={styles.injuries}
          />
        </div>

        <div className={styles.medicationContainer}>
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="start"
            label="Medicación"
            sx={{ m: 0 }}
          />

          <TextField
            size="small"
            label="Indique el medicamento:"
            fullWidth
            className={styles.injuries}
          />
        </div>
      </div>
    </form>
  );
};
export default DatosMedicos;
