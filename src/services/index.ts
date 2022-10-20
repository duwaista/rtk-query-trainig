import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { IPostItem } from "../types/post";

const baseUrl = process.env.SERVICE_URL || "";

const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPostItem[], void>({
      query: () => "/feed",
    }),
    getPostById: builder.query<IPostItem, number>({
      query: (id) => `/feed/${id}`,
    })
  }),
});

export const {
  useGetAllPostsQuery,
  useGetPostByIdQuery,
} = rootApi;

export default rootApi;
