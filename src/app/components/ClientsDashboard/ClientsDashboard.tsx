"use client";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Pagination } from "../Pagination";
import TableRow from "../TableRow/TableRow";
import clientsDasboardStyles from "./clientsDashboard-styles.module.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useGetClientsQuery } from "@/app/api/services";
import { useState } from "react";

interface FormData {
  input: String;
}

const ClientsDashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  //Petición a services Redux Toolkit
  const { data, error, isLoading, isFetching } = useGetClientsQuery(null);

  const clients = data;

  // Lógica searchBar
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) =>
    console.log("LOS DATOS DE SEARCH BAR: ", data)
  );

  //Lógica paginado
  const indexOfLastClient = currentPage * pageSize;
  const indexOfFirstClient = indexOfLastClient - pageSize;
  const currentClients = clients?.slice(indexOfFirstClient, indexOfLastClient);

  const pagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className={clientsDasboardStyles.layout}>
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
          {/* Search bar */}
          <div className={clientsDasboardStyles.search}>
            <form onSubmit={onSubmit} className={clientsDasboardStyles.frame}>
              <input
                className={clientsDasboardStyles.input}
                placeholder="Buscar por nombre..."
                type="text"
                {...register("input")}
              />
              <button type="submit">
                <SearchSharpIcon
                  sx={{
                    color: "#939393",
                    ":hover": { color: "#501fa3" }
                  }}
                />
              </button>
            </form>
          </div>
        </div>
        {/* Table */}
        <table className={clientsDasboardStyles.table}>
          <thead className={clientsDasboardStyles.rowLayout}>
            <tr className={clientsDasboardStyles.itemsHeader}>
              <th className={clientsDasboardStyles.th1}>
                <div className={clientsDasboardStyles.nombre}>
                  <p>Nombres y apellidos</p>
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
            {currentClients?.map((client: any) => (
              <TableRow
                key={client.id}
                id={client.id}
                names={client.names}
                lastNames={client.last_name}
                dni={client.dni}
                associate={client.socio}
              />
            ))}
          </tbody>
          <tfoot className={clientsDasboardStyles.footerLayout}>
            <Pagination
              pageSize={pageSize}
              clients={clients || []}
              currentPage={currentPage}
              pagination={pagination}
            />
          </tfoot>
        </table>
      </div>
    </section>
  );
};
export default ClientsDashboard;
