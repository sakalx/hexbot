const BASE_URL = 'https://api.noopschallenge.com/hexbot';
// GET /hexbot?count=1000&width=500&height=500&seed=FF7F50,FFD700,FF8C00

const checkStatus = response =>
    (response.ok || response.status === '200')
        ? Promise.resolve(response)
        : Promise.reject(new Error(response.statusText));

export async function getColors({count = 1, width = null, height = null} = {}) {
  const response = await fetch(
      `${BASE_URL}?count=${count}&width=${width}&height=${height}`,
  );
  const data = await checkStatus(response);

  return data.json();
}