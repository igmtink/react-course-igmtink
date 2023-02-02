import NewsletterSignup from "../components/Newsletter/NewsletterSignup";

import { Section } from "../components/UI/IgmtInk";

const Newsletter = (props) => {
  return (
    <Section className="grid grid-cols-1 gap-6">
      <NewsletterSignup />
      <p className="text-center">Sign Up for Newsletter</p>
    </Section>
  );
};

export default Newsletter;

export const action = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");

  console.log(email);
  return { message: "Sign Up successful!" };
};
