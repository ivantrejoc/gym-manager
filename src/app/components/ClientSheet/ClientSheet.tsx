import { Divider } from "@mui/material";
import styles from "./clientSheet-styles.module.css";
import { DatosBasicosSheet } from "../DatosBasicosSheet";
import { DatosMedicosSheet } from "../DatosMedicosSheet";

const ClientSheet = () => {
  return (
    <section className={styles.layout}>
        <div className={styles.sheet}>
            <div className={styles.leftSide}>
                <DatosBasicosSheet />
                
            </div>
            <Divider orientation="vertical" sx={{
              height: 1
            }} className={styles.verticalDivider} />
            <div className={styles.rightSide}>
                <DatosMedicosSheet />
            </div>
        </div>
    </section>
  )
}
export default ClientSheet