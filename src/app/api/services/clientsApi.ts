import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Client {
  id: string;
  socio: number;
  dni: number;
  names: string;
  last_name: string;
  registration_date: string;
  telf_fijo: string;
  telf_movil: string;
  email: string;
  address: string;
  address_2: string;
  country: string;
  state: string;
  city: string;
  birthdate: string;
  age: number;
  gender: string;
  weight: number;
  imc: number;
  training_type: string;
  injuries: string;
  injury_type: string;
  chronic_diseases: string;
  disease_type: string;
  medication: string;
  medicine_details: string;
  instructors: string[];
  classes: string[];
  notes: string;
}

const URL = "http://localhost:3001/";

export const clientsApi = createApi({
  reducerPath: "clientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${URL}`
  }),
  endpoints: (builder) => ({
    getClients: builder.query<Client[], null>({
      query: () => 'clients'
    }),
    getClientById: builder.query<Client, { id: string }>({
      query: ({ id }) => `clients/${id}`
    })
  })
});

export const { useGetClientsQuery, useGetClientByIdQuery } = clientsApi;
