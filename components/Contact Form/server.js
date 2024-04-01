"use server";
export default async function submitFormDataToServer(FormData) {
  const response = await fetch("/api/user", {
    headers: { "content-Type": "application/json" },
    body: JSON.stringify(FormData),
    method: "POST",
  });
  console.log("server component working", response);
  const responseData = await response.json();
  console.log(responseData);
  if (response.ok) {
    return responseData;
  } else {
    return responseData.msg;
  }
}
