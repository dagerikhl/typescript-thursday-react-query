import axios from "axios";
import { QueryFunctionContext, useQuery } from "react-query";
import { IApplication } from "../types/IApplication";

const APPLICATIONS_KEYS = {
  Get: [{ scope: "applications" }] as const,
  GetPaginated: (index: number, limit: number) =>
    [{ ...APPLICATIONS_KEYS.Get[0], index, limit }] as const,
};

type GetKey = typeof APPLICATIONS_KEYS.Get;

export const getApplications = async ({
  queryKey: [{ scope }],
}: QueryFunctionContext<GetKey>): Promise<IApplication[]> =>
  axios.get(`/api/${scope}`).then(({ data }) => data);

export const useGetApplications = () =>
  useQuery<IApplication[], Error, IApplication[], GetKey>(
    APPLICATIONS_KEYS.Get,
    getApplications
  );

type GetPaginatedKey = ReturnType<typeof APPLICATIONS_KEYS.GetPaginated>;

export const getPaginatedApplications = async ({
  queryKey: [{ scope, index, limit }],
}: QueryFunctionContext<GetPaginatedKey>): Promise<IApplication[]> =>
  axios
    .get(`/api/${scope}?index=${index}&limit=${limit}`)
    .then(({ data }) => data);

export const useGetPaginatedApplications = (index: number, limit: number) =>
  useQuery<IApplication[], Error, IApplication[], GetPaginatedKey>(
    APPLICATIONS_KEYS.GetPaginated(index, limit),
    getApplications
  );
