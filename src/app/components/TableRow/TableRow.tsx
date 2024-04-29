"use client";
import { Avatar, Chip } from "@mui/material";
import tableRowStyles from "./tableRow-styles.module.css";
import { useRouter } from "next/navigation";

interface RowProps {
  id: string,
  names: string,
  lastNames: string,
  dni: number,
  associate: number, 
 
}

const TableRow = ({id, names, lastNames, dni , associate}: RowProps ) => {  
  const status = "activo";

  // Redirect
  const router = useRouter();
  const handleRedirect = (id :string) =>{
    router.push(`/clients/${id}`);
  };

  return (
    <tr className={tableRowStyles.rowLayout}>
      <td className={tableRowStyles.td1}>        
        <div className={tableRowStyles.nombreRow}>
          <p>{names}  {lastNames}</p>
        </div>
      </td>
      <td className={tableRowStyles.td2}>
        <p className={tableRowStyles.idRow}>{dni}</p>
      </td>
      <td className={tableRowStyles.td3}>
        {status === "activo"? (<Chip variant="outlined" color="success"
label="Activo" avatar={<Avatar sx={{background: "#AAF362" }}>A</Avatar>} />) : (<Chip variant="outlined" color="error"
label="Inactivo" avatar={<Avatar sx={{background: "#F64314", color: "#FFFFFF" }}>I</Avatar>} />)}        
      </td>
      <td className={tableRowStyles.td4}>
        <p className={tableRowStyles.socioRow}>{associate}</p>
      </td>
      <td className={tableRowStyles.td5}>
        <button onClick={()=>{handleRedirect(id)}} className={tableRowStyles.button}>
          <p className={tableRowStyles.label}>Detalles</p>
        </button>
      </td>      
    </tr>
  );
};
export default TableRow;
