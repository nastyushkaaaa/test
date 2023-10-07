const BASE_URL =
  'https://api.mockfly.dev/mocks/bcc4fc96-d541-4147-a07b-eae2b895bc19';

export async function fetchCars() {
  const response = await fetch(`${BASE_URL}/catalog`);
  return await response.json();
}

export async function addCarToFavorites(values) {
  const response = await fetch(`${BASE_URL}/favorites`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
  return await response.json();
}
