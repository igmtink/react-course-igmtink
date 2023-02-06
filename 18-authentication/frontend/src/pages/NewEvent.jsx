import { Section } from "../components/UI/IgmtInk";

import { json, Link, redirect } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import EventForm from "../components/Events/EventForm";

const NewEvent = (props) => {
  return (
    <Section className="grid grid-cols-1 gap-4">
      <div className="w-fit">
        <Link to=".." relative="path">
          <div className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 hover:bg-neutral-900/75 transition-colors rounded-md">
            <BiArrowBack />
            Back
          </div>
        </Link>
      </div>
      <EventForm method="post" />
    </Section>
  );
};

export default NewEvent;

// // (action) to add (Data)
// export const action = async ({ request, params }) => {
//   // To get the (Data) form (Form)
//   const data = await request.formData();
//
//   const eventData = {
//     title: data.get("title"),
//     image: data.get("image"),
//     date: data.get("date"),
//     description: data.get("description"),
//   };
//
//   // const enteredTitle = data.get('title')
//   // const enteredImage = data.get('image')
//   // const enteredDate = data.get('date')
//   // const enteredDescription = data.get('description')
//
//   const response = await fetch("http://localhost:8080/events", {
//     method: "POST",
//     // To send the (Data) correctly on the (Backend)
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(eventData),
//   });
//
//   // (Validation)
//   if (response.status === 422) {
//     return response;
//   }
//
//   if (!response.ok) {
//     throw json({ message: "Could not save event." }, { status: "500" });
//   }
//
//   return redirect("/events");
// };
