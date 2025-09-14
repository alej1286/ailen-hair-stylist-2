import { useQuery } from "@tanstack/react-query";
import { API } from "aws-amplify";
import * as queries from "../graphql/queries";

async function ServicesApi() {
  try {
    const response = await API.graphql({ query: queries.listServices });
    const allServices = response?.data?.listServices?.items;

    if (!allServices) return null;

    // Filter out deleted services
    const activeServices = allServices.filter(service => !service._deleted);

    return activeServices.reverse();
  } catch (res) {
    const { errors } = res;
    console.error(errors);
  }
}

export function useFetchServicesApi() {
  return useQuery(["services"], ServicesApi);
}
