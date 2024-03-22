import { DOMAIN_API } from "@/constants";
import axios from "axios";

async function fetchCombos() {
  const response = await axios.get(`${DOMAIN_API}/combos`);
  if(response.status == 200) {
    return response.data.combos;
  }
  return null;
}

export function useCombo() {
  return { fetchCombos };
}