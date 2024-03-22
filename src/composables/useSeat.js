import axios from "axios";

async function getSeat(screenId, showtimeId) {
  const response = await axios.get(`http://localhost:8000/api/movies/getSeats/${screenId}/${showtimeId}`);
  if(response.status == 200) {
    return response.data;
  }
  return null;
}

export function useSeat() {
  return { getSeat }
}