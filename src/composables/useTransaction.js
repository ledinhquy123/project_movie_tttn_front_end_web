import { DOMAIN_API } from "@/constants";
import axios from "axios";

async function reservations(data) {
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const response = await axios.post(`${DOMAIN_API}/movies/reservations`, data, { headers: header });
  if(response.status == 200) {
    return response.data == 'ok';
  }
  return false;
}

async function paymentVnPay(amount) {
  const data = {
    'amount': amount
  };
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const response = await axios.post(
    `${DOMAIN_API}/payment/vn-pay`,
    JSON.stringify(data),
    {
      headers: header
    }
  );
  if(response.status == 200) {
    window.location.href = response.data.vnpay_url;
  }
}

async function paymentMomo(amount) {
  const data = {
    'amount': amount
  };
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const response = await axios.post(`${DOMAIN_API}/payment/momo`, data, { headers: header });
  if(response.status == 200) {
    
    window.location.href = response.data.momo_url;
  }
}

async function getNameSeat(data) {
  const body = {
    data: data
  };
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  const response = await axios.post(
    `${DOMAIN_API}/movies/getBill`,
    body,
    { headers: header }
  );

  if(response.status == 200) {
    return response.data;
  }
  return null;
}

async function createTicket(data) {
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };
  const response = await axios.post(`${DOMAIN_API}/transactions/createTicket`, data, { headers: header });
  console.log(response.status);
  console.log(response.data);
}

async function getTicketByUser(userId) {
  const response = await axios.get(`${DOMAIN_API}/transactions/get-ticket/${userId}`);
  console.log(response.status);
  console.log(response.data);
  if(response.status == 200) {
    return response.data.data;
  }
  return null;
}

export function useTransaction() {
  return { reservations, paymentVnPay, paymentMomo, getNameSeat, createTicket, getTicketByUser }
}