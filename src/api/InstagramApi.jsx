import { useQuery } from "@tanstack/react-query";
import { API } from "aws-amplify";

async function InstagramApi() {
  const instagramapi = await API.get("instagramapi", "/items");
  return instagramapi;
}

export function useFetchInstagramApi() {
  return useQuery(["instagram"], InstagramApi);
}
