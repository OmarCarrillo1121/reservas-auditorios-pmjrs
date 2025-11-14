const BASE_URL = 'http://localhost:8080/api';
// const BASE_URL = 'https://mi-servidor.com/api'; // Produccion

async function request(path, options = {}) {
  const url = `${BASE_URL}${path}`;

  const token = localStorage.getItem('token');

  const defaultHeaders = {
    'Content-Type': 'application/json',
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  const config = {
    ...options,
    headers: { ...defaultHeaders, ...options.headers }
  };

  const response = await fetch(url, config);

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Error ${response.status}: ${error}`);
  }

  return response.json();
}

export const api = {
  get: (path, options = {}) =>
    request(path, { ...options, method: 'GET' }),
  post: (path, body, options = {}) =>
    request(path, { ...options, method: 'POST', body: JSON.stringify(body) }),
  put: (path, body, options = {}) =>
    request(path, { ...options, method: 'PUT', body: JSON.stringify(body) }),
  del: (path, options = {}) =>
    request(path, { ...options, method: 'DELETE' })
};