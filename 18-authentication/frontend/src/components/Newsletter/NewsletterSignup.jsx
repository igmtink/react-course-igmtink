import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import { Button, Section } from "../UI/IgmtInk";

const NewsletterSignup = (props) => {
  // (useFetcher) trigger an (action) or also a (loader) without navigating to the page which the (action or loader) belongs, it will trigger anywhere in (Route)
  const fetcher = useFetcher();

  // Get the (data) or (state) of (Form) without navigating to the page which the (action or loader) is belong
  const { data, state } = fetcher;

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);

  return (
    <div className="grid grid-cols-1 gap-6">
      <fetcher.Form
        method="post"
        action="/newsletter"
        className="flex gap-2 items-center"
      >
        <input
          className="w-full max-w-sm bg-neutral-800 p-2 rounded-md"
          type="email"
          name="email"
          placeholder="Email"
        />
        <Button className="bg-yellow-500 text-neutral-900 hover:bg-yellow-500/75 flex-shrink-0">
          Sign Up
        </Button>
      </fetcher.Form>
    </div>
  );
};

export default NewsletterSignup;
