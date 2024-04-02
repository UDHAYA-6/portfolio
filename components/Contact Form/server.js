"use server";
export default async function submitFormDataToServer(FormData) {
  const response = await fetch("http://localhost:3000/api/user", {
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(FormData),
    method: "POST",
  });
  const responseData = await response.json();
  if (response.ok) {
    return responseData.msg;
  } else {
    return responseData.msg;
  }
}
