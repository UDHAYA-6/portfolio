"use server";
export default async function submitFormDataToServer(FormData) {
  const response = await fetch(`${process.env.BASE_URL}/api/user`, {
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(FormData),
    method: "POST",
  });
  return response.status;
}
