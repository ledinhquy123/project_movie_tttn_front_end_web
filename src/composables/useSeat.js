import { DOMAIN_API } from "@/constants";
import axios from "axios";

async function getSeat(screenId, showtimeId) {
  const response = await axios.get(`${DOMAIN_API}/movies/getSeats/${screenId}/${showtimeId}`);
  if(response.status == 200) {
    return response.data;
  }
  return null;
}

export function useSeat() {
  return { getSeat }
}