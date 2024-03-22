import { DOMAIN_API } from "@/constants";
import axios from "axios"

async function fetchActorByMoive(idMovie) {
  const response = await axios.get(`${DOMAIN_API}/movies/getActor/${idMovie}`)
  if(response.status == 200) {
    return response.data;
  }
  return null;
}

export function useActor() {
  return { fetchActorByMoive  }
}