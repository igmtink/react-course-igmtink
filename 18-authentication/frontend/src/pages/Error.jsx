import PageContent from "../components/Layout/PageContent";

import { useRouteError } from "react-router-dom";
import { Section } from "../components/UI/IgmtInk";
import { Fragment } from "react";
import Header from "../components/Layout/Header";

const Error = (props) => {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

  console.log(error.status);

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find resource or page.";
  }

  return (
    <Fragment>
      <Header />
      <Section className="p-4 mx-auto max-w-6xl">
        <PageContent title={title}>
          <p>{message}</p>
        </PageContent>
      </Section>
    </Fragment>
  );
};

export default Error;
