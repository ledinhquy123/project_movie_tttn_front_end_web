import { DOMAIN_API } from '@/constants';
import axios from 'axios'

async function sendEmail(emailTo, subject, content) {
  const data = {
    'emailTo': emailTo,
    'subject': subject,
    'content': content
  };
  const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  const response = await axios.post(
    `${DOMAIN_API}/email`,
    data,
    {
      headers: header
    }
  );
  console.log(response.status);
  console.log(response.data);

  if(response.status == 200) {
    alert('Mã đã được gửi về.');
    return response.data.message === 'success';
  }
  return false;
}

async function verifyEmail(email) {
  const response = await axios.post(`${DOMAIN_API}/users/verify-email/${email}`);
  if(response.status == 200) {
    return response.data.status === 'found';
  }
  return false;
}

export function useSendEmail() {
  return { sendEmail, verifyEmail }
}