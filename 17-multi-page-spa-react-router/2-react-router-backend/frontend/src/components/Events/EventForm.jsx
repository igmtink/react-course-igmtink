import { Button } from "../UI/IgmtInk";

import { json, redirect } from "react-router-dom";

import {
  Form,
  useNavigate,
  useNavigation,
  useActionData,
} from "react-router-dom";

const EventForm = ({ method, event }) => {
  const navigate = useNavigate();
  // !To monitor (Form) currently (State)
  const navigation = useNavigation();
  // !To get response on (Backend) by (action loader)
  const data = useActionData();

  // !When (Form) is submitting
  const isSubmitting = navigation.state === "submitting";

  // !Programmatically (navigation) of (Router React)
  // const formCancelHandler = (event) => {
  //   navigate("..");
  // };

  console.log(data);

  return (
    <div className="grid grid-cols-1 gap-4">
      {/* !To get the (validation) from (Backend) */}
      {data && data.errors && (
        <ul>
          {Object.values(data.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      {/* !Using (Form) of (React Router) is automatically execute the (action loader) */}
      <Form method={method} className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 gap-2">
          <input
            className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
            name="title"
            type="text"
            placeholder="Title"
            defaultValue={event ? event.title : ""}
          />
          <input
            className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
            name="image"
            type="text"
            placeholder="Image URL"
            defaultValue={event ? event.image : ""}
          />
          <input
            className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
            name="date"
            type="date"
            defaultValue={event ? event.date : ""}
          />
          <textarea
            className="w-full max-w-sm bg-neutral-900 p-2 rounded-md"
            name="description"
            rows="10"
            placeholder="Description"
            defaultValue={event ? event.description : ""}
          ></textarea>
        </div>
        <div className="flex justify-end max-w-sm">
          <div className="grid grid-flow-col auto-cols-fr gap-2 max-w-sm">
            <Button
              attr={{ disabled: isSubmitting }}
              className="bg-yellow-500 text-neutral-900 hover:bg-yellow-500/75"
            >
              {isSubmitting ? "Submitting..." : "Save"}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default EventForm;

// (action) to add (Data)
export const action = async ({ request, params }) => {
  // To get the (Data) from (Form)
  const data = await request.formData();
  // To get the (method) from (Form)
  const method = request.method;

  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  // const enteredTitle = data.get('title')
  // const enteredImage = data.get('image')
  // const enteredDate = data.get('date')
  // const enteredDescription = data.get('description')

  // Dynamic way of sending a request
  let url = "http://localhost:8080/events";

  if (method === "PATCH") {
    const eventId = params.eventId;
    url = "http://localhost:8080/events/" + eventId;
  }

  const response = await fetch(url, {
    method: method,
    // To send the (Data) correctly on the (Backend)
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });

  // (Validation)
  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: "500" });
  }

  return redirect("/events");
};
