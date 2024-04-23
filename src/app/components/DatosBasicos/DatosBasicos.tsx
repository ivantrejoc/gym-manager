import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@mui/material";
import styles from "./datosBasicos-styles.module.css";

const DatosBasicos = () => {
  return (
    <form className={styles.container}>
      <div className={styles.idContainer}>
        <TextField
          required
          id="outlined-required"
          label="Identificación:"
          variant="outlined"
          size="small"
                  sx={{                   
                    minWidth: 120, maxWidth: 300 }}
                    className={styles.id}
        />
        <FormControl
          size="small"
          variant="outlined"
          sx={{ minWidth: 120, maxWidth: 300 }}
          className={styles.selectContainer}
        >
          <InputLabel id="select-label">Tipo:</InputLabel>

          <Select
            labelId="select-label"
            id="select-demo"
            label="Tipo"
            value={""}
            className={styles.select}
          >
            <MenuItem value={"Cedula"}>Cédula</MenuItem>

            <MenuItem value={"pasaporte"}>Pasaporte</MenuItem>

            <MenuItem value={"rif"}>RIF</MenuItem>
          </Select>
        </FormControl>
        <div className={styles.activo}>
          <p className={styles.text}>Actívo</p>
          <Checkbox defaultChecked className={styles.checkBox} />
        </div>
      </div>
      <div className={styles.nameContainer}>
        <TextField
          required
          id="outlined-required"
          label="Nombres:"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              width: 1
            }
          }}
          className={styles.name}
        />
        <TextField
          required
          id="outlined-required"
          label="Apellidos:"
          variant="outlined"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              width: 1
            }
          }}
          className={styles.name}
        />
      </div>

      <div className={styles.addressContainer}>
      <TextField
          required
          id="outlined-required"
          label="Dirección 1:"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              width: 1
            }
          }}
          className={styles.address}
        />
        <TextField
          required
          id="outlined-required"
          label="Dirección 2:"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              width: 1
            }
          }}
          className={styles.address}
        />    

      </div>
      <div className={styles.countryContainer}>
    <TextField
          required
          id="outlined-required"
          label="País:"
          variant="outlined"
          size="small"
          
          sx={{
            "& .MuiOutlinedInput-root": {
              width: 1
            }
          }}
          className={styles.country}
        />
        <TextField
          required
          id="outlined-required"
          label="Provincia:"
          variant="outlined"
          size="small"
          
          sx={{
            "& .MuiOutlinedInput-root": {
              width: 1
            }
          }}
          className={styles.country}
        />
        <TextField
          required
          id="outlined-required"
          label="Ciudad:"
          variant="outlined"
          size="small"
          
          sx={{
            "& .MuiOutlinedInput-root": {
              width: 1
            }
          }}
          className={styles.country}
        />
    </div>
    <div className={styles.contactContainer}>
    <TextField
          required
          id="outlined-required"
          label="Telef Fijo:"
          variant="outlined"
          size="small"
          
          sx={{
            "& .MuiOutlinedInput-root": {
              width: 1
            }
          }}
          className={styles.tel}
        />
        <TextField
          required
          id="outlined-required"
          label="Telef Móvil:"
          variant="outlined"
          size="small"
          
          sx={{
            "& .MuiOutlinedInput-root": {
              width: 1
            }
          }}
          className={styles.tel}
        />
        <TextField
          required
          id="outlined-required"
          label="Email:"
          variant="outlined"
          size="small"
          fullWidth          
          sx={{
            "& .MuiOutlinedInput-root": {
              width: 1
            }
          }}
          className={styles.country}
        />

    </div>
    </form>
  );
};
export default DatosBasicos;
