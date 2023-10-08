const BASE_URL =
  'https://api.mockfly.dev/mocks/bcc4fc96-d541-4147-a07b-eae2b895bc19';

export async function fetchCars() {
  const response = await fetch(`${BASE_URL}/catalog`);
  return await response.json();
}
