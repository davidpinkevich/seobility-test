import { TData } from '../types';

async function postData(url: string, data: TData) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const dataResponse = await response.json();
  return dataResponse;
}

export default postData;
