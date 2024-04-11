import { ClientsDashboard } from "../components/ClientsDashboard";
import clientsStyles from "./clients-styles.module.css";

const Clients = () => {
  return (
    <div className={clientsStyles.clients}>
      <ClientsDashboard/>
    </div>
  )
}
export default Clients