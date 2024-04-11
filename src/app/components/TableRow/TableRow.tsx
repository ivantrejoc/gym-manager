import { StatusChip } from "../StatusChip";
import tableRowStyles from "./tableRow-styles.module.css";

const TableRow = () => {
  return (
    <tr className={tableRowStyles.rowLayout}>
      <td className={tableRowStyles.td1}>
        <input type="checkbox" className={tableRowStyles.checkbox} />
        <div className={tableRowStyles.nombreRow}>
          <p>Pedro Castillo</p>
        </div>
      </td>
      <td className={tableRowStyles.td2}>
        <p className={tableRowStyles.idRow}>13465879</p>
      </td>
      <td className={tableRowStyles.td3}>
        <StatusChip />        
      </td>
      <td className={tableRowStyles.td4}>
        <p className={tableRowStyles.socioRow}>123456</p>
      </td>
      <td className={tableRowStyles.td5}>
        <button className={tableRowStyles.button}>
          <p className={tableRowStyles.label}>Detalles</p>
        </button>
      </td>      
    </tr>
  );
};
export default TableRow;
