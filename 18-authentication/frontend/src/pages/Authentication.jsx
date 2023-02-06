import { json, redirect } from "react-router-dom";
import AuthForm from "../components/Authentication/AuthForm";
import { Section } from "../components/UI/IgmtInk";

const Authentication = (props) => {
  return (
    <Section>
      <AuthForm />
    </Section>
  );
};

export default Authentication;

export const action = async ({ request }) => {
  // !To get (Query Parameter) from url
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode" }, { status: 422 });
  }

  // !Get the data from (Form) by (name) of (input)
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(authData),
  });

  // !Invalid URL or Invalid Credentials
  if (response.status === 422 || response.status === 401) {
    // !(React Router) will automatic extract the (data) from (response)
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate user." }, { status: 500 });
  }

  const resData = await response.json();
  // !To get (Authorization Token) from (Backend)
  const token = resData.token;

  localStorage.setItem("token", token);

  // !Set a expiration (Authorization Token)
  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1);
  localStorage.setItem("expiration", expiration.toISOString());

  return redirect("/");
};
