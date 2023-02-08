import { useRef } from "react";

const NewMeetupForm = (props) => {
  const titleEntered = useRef();
  const descriptionEntered = useRef();
  const imageEntered = useRef();
  const addressEntered = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const meetupData = {
      title: titleEntered.current.value,
      description: descriptionEntered.current.value,
      image: imageEntered.current.value,
      address: addressEntered.current.value,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <main className="p-4">
      <h1 className="mb-8 text-2xl font-bold text-center uppercase">
        New Meetup
      </h1>
      <form onSubmit={submitFormHandler} className="grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 gap-2">
          <div className="grid grid-cols-1 gap-1.5">
            <label className="text-sm" htmlFor="title">
              Title
            </label>
            <input
              className="p-2 bg-neutral-200 rounded-md"
              name="title"
              type="text"
              ref={titleEntered}
            />
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <label className="text-sm" htmlFor="description">
              Description
            </label>
            <input
              className="p-2 bg-neutral-200 rounded-md"
              name="description"
              type="text"
              ref={descriptionEntered}
            />
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <label className="text-sm" htmlFor="image">
              Image
            </label>
            <input
              className="p-2 bg-neutral-200 rounded-md"
              name="image"
              type="text"
              ref={imageEntered}
            />
          </div>
          <div className="grid grid-cols-1 gap-1.5">
            <label className="text-sm" htmlFor="image">
              Address
            </label>
            <input
              className="p-2 bg-neutral-200 rounded-md"
              name="address"
              type="text"
              ref={addressEntered}
            />
          </div>
        </div>
        <button
          className="px-4 py-2 rounded-md bg-neutral-900 text-white"
          type="submit"
        >
          Add
        </button>
      </form>
    </main>
  );
};

export default NewMeetupForm;
