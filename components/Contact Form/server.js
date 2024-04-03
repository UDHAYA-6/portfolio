"use server";
export default async function submitFormDataToServer(prev, FormValues) {
  const Name = FormValues.get("Name");
  const Email = FormValues.get("Email");
  const Message = FormValues.get("Message");
  const FormData = { Name, Email, Message };
  const response = await fetch(`${process.env.BASE_URL}/api/user`, {
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
