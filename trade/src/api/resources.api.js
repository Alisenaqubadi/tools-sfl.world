const API_URL = "/api/v1/trade";

export async function getList() {
  const response = await fetch(`${API_URL}/structure.json`);

  if (!response.ok) {
    throw new Error("Could not load trade list");
  }

  return response.json();
}

export async function getData(id) {
  const response = await fetch(`${API_URL}/csv/${id}.csv`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not load trade data");
  }

  return response.text();
}
