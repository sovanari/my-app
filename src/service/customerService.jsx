// services/customerService.js

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.example.com";

export async function getAllCustomers() {
  const res = await fetch(`${BASE_URL}/customers`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch customers");
  return res.json();
}

export async function getCustomerById(id) {
  const res = await fetch(`${BASE_URL}/customers/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch customer");
  return res.json();
}
