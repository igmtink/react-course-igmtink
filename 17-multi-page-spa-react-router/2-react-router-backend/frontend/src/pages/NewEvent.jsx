import { Section } from "../components/UI/IgmtInk";

import { Link } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";

const NewEvent = (props) => {
  return (
    <Section>
      <div className="w-fit">
        <Link to=".." relative="path">
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-900/75 transition-colors rounded-md">
            <BiArrowBack />
            Back
          </div>
        </Link>
      </div>
    </Section>
  );
};

export default NewEvent;
