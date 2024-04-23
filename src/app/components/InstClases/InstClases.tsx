import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styles from "./instClases-styles.module.css";

const InstClases = () => {
  return (
    <form action="" className={styles.container}>
      <div className={styles.inputsContainer}>

        <div className={styles.clasesContainer}>

        <FormControl size="small" variant="outlined" className={styles.selectContainer}>
          <InputLabel id="select-label">Clases:</InputLabel>

          <Select
            labelId="select-label"
            id="select-demo"
            value={""}
            label="Label"
            className={styles.select}
          >
            <MenuItem value={10}>Ten</MenuItem>

            <MenuItem value={20}>Twenty</MenuItem>

            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" variant="outlined" 
        className={styles.selectContainer}>
          <InputLabel id="select-label">Instructores:</InputLabel>

          <Select
            labelId="select-label"
            id="select-demo"
            value={""}
            label="Label"
            className={styles.select}
          >
            <MenuItem value={10}>Ten</MenuItem>

            <MenuItem value={20}>Twenty</MenuItem>

            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      
        </div>
        <TextField variant="outlined"
        minRows= "true"
        maxRows= "false"
        rows={5}
        multiline
        fullWidth
        label="Observaciones:"      
        className={styles.remarks} />
        <button className={styles.button}>
          <p className={styles.textButton}>Crear cliente</p>
        </button>
      </div>
    </form>
  );
};
export default InstClases;
