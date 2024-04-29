'use client';
import { ClientsDashboard } from "../components/ClientsDashboard";
import clientsStyles from "./clients-styles.module.css";
import {useGetClientsQuery} from "../api/services/clientsApi";
import { Suspense } from "react";


const Clients = () => {

  // //Petición a services Redux Toolkit
  // const { data, error, isLoading, isFetching
  //  } = useGetClientsQuery(null);  
   

  return (
    <div className={clientsStyles.clients}>
      <Suspense fallback={
        <p> Loading... </p>
      }>
         <ClientsDashboard
        />
         
        
      </Suspense>
      
    </div>
  )
}
export default Clients