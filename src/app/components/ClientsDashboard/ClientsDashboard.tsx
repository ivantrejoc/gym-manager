"use client";
import { useDispatch, useSelector } from "react-redux";
import { Pagination } from "../Pagination";
import TableRow from "../TableRow/TableRow";
import clientsDasboardStyles from "./clientsDashboard-styles.module.css";
import { useGetClientsQuery } from "@/app/api/services";

const ClientsDashboard = () => {
  //Petición a services Redux Toolkit
  const { data, error, isLoading, isFetching } = useGetClientsQuery(null);

  const clients = data;
  console.log("LOS CLIENTES EN CLIENTS DASHBOARD: ", clients);

  return (
    <div className={clientsDasboardStyles.layout}>
      {/* Header */}
      <div className={clientsDasboardStyles.header}>
        <div className={clientsDasboardStyles.content}>
          <h5 className={clientsDasboardStyles.title}>Clientes</h5>
          <p className={clientsDasboardStyles.subtitle}>Detalle de clientes</p>
        </div>
      </div>
      <div className={clientsDasboardStyles.divider}></div>
      <div className={clientsDasboardStyles.tableContent}>
        <div className={clientsDasboardStyles.toolBar}>
          <div className={clientsDasboardStyles.search}>
            <form className={clientsDasboardStyles.frame}>
              <input
                className={clientsDasboardStyles.input}
                placeholder="Buscar por nombre..."
                type="text"
              />
            </form>
          </div>
        </div>
        {/* Table */}
        <table className={clientsDasboardStyles.table}>
          <thead className={clientsDasboardStyles.rowLayout}>
            <tr className={clientsDasboardStyles.itemsHeader}>
              <th className={clientsDasboardStyles.th1}>
                <div className={clientsDasboardStyles.nombre}>
                  <p>Nombre y apellido</p>
                </div>
              </th>
              <th className={clientsDasboardStyles.th2}>
                <p className={clientsDasboardStyles.id}>id</p>
              </th>
              <th className={clientsDasboardStyles.th3}>
                <p className={clientsDasboardStyles.estatus}>Estatus</p>
              </th>
              <th className={clientsDasboardStyles.th4}>
                <p className={clientsDasboardStyles.socio}>No.Socio</p>
              </th>
              <th className={clientsDasboardStyles.th5}>
                <p className={clientsDasboardStyles.acciones}>Acciones</p>
              </th>
            </tr>
          </thead>

          <tbody className={clientsDasboardStyles.tbody}>
            {clients?.map((client) => (
              <TableRow
                key={client.id}
                names={client.names}
                lastNames={client.last_name}
                dni={client.dni}
                associate={client.socio}
              />
            ))}
          </tbody>
          <tfoot className={clientsDasboardStyles.footerLayout}>
            <Pagination />
          </tfoot>
        </table>
      </div>
    </div>
  );
};
export default ClientsDashboard;
