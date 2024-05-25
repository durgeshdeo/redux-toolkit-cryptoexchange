import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "X-RapidAPI-Key": "b3269a27a0msh91152e930384439p1a07bdjsn4d03a8b7a402",
  "X-RapidAPI-Host": "crypto-news-api5.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://crypto-news-api5.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: () => createRequest(`/news`),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
