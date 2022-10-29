const API_URL = import.meta.env.VITE_URL;

export function checkStatus(response) {
  if (response?.status >= 200 && response?.status < 400) {
    return response;
  }

  return Promise.reject(response);
}

export async function parseError(response) {
  const apiData = await response.json?.();

  return Promise.reject({
    status: response.status,
    statusText: response.statusText,
    body: apiData,
  });
}

export function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }

  return response.json();
}

export function handleResponse(response) {
  const { success = false } = response;

  if (success) {
    return response;
  }
}

export default function request(url, options = {}) {
  const baseOptions = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };

  return fetch(API_URL + url, { ...baseOptions, ...options })
    .then(checkStatus)
    .then(parseJSON)
    .then(handleResponse)
    .catch(parseError);
}
