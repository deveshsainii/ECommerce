import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./constant";
import { Qm } from './constants';  // Import Qm here

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apislice = createApi({
  baseQuery,
  tagTypes: ['Product', 'Order', 'Users', 'Category'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products',
    }),
  }),
});

export const { useGetProductsQuery } = apislice;

// Example function using Qm
function exampleFunction() {
  const status = Qm.pending;  // Ensure Qm is properly initialized
  const state = sS(status);   // Example usage of Qm
  console.log(state);
}
