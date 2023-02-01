import { Link, useParams } from "react-router-dom";

import { Section } from "../components/UI/IgmtInk";
import { MdEdit } from "react-icons/md";

const EventDetail = (props) => {
  const params = useParams();

  return (
    <Section>
      <Link
        to={`/${params.eventId}/edit`}
        className="flex justify-end items-center"
      >
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-900/75 transition-colors rounded-md">
          <MdEdit className="text-yellow-500" />
          Edit
        </div>
      </Link>
    </Section>
  );
};

export default EventDetail;
