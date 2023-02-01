import { Section } from "../UI/IgmtInk";

const PageContent = (props) => {
  return (
    <Section>
      <div>{props.title}</div>
      {props.children}
    </Section>
  );
};

export default PageContent;
