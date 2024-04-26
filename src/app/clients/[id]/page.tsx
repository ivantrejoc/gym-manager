import { ClientSheet } from "@/app/components/ClientSheet";
import styles from "./clientById-styles.module.css";

const ClientById = () => {
  return (
    <section className={styles.clientById}>      
      <ClientSheet />
    </section>
  );
};
export default ClientById;
