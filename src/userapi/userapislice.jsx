import { apislice } from "../auth/apislice";
import { USERS_URL } from "../auth/constant";

export const userapislice = apislice.injectEndpoints({

  endpoints: (builder) => ({
    userlogin: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/login`,
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        },
      
      })
    }),
    userlogout: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json'
        },
      
      })
    })
  })
});

export const { useUserLoginMutation, useUserLogoutMutation } = userapislice;