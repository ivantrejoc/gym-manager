import Tabs from "@/app/components/Tabs/Tabs";
import newClientStyles from "./new-client-styles.module.css";

const NewClient = () => {
  return (
    <div className={newClientStyles.newClient}>
        <Tabs />
    </div>
  )
}
export default NewClient