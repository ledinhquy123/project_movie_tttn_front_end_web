import axios from "axios"

async function fetchActorByMoive(idMovie) {
  const response = await axios.get(`http://127.0.0.1:8000/api/movies/getActor/${idMovie}`)
  if(response.status == 200) {
    return response.data;
  }
  return null;
}

export function useActor() {
  return { fetchActorByMoive  }
}