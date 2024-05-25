import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": process.env.NEWS_KEY,
  "X-RapidAPI-Host": process.env.NEWS_HOST,
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEWS_URL,
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`/news`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
