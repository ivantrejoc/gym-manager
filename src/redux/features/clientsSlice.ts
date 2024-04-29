import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ClientsState {
  clients: any[];
}

const initialState: ClientsState = {
  clients: []
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    fetchClients: (state) => {
      state.clients = [];
      return state;
    }
  }
});

export const { fetchClients } = clientsSlice.actions;
export default clientsSlice.reducer;
