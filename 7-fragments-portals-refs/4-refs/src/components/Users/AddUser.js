import { useState, useRef } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [isValid, setIsValid] = useState(true);

  // !(useRef) to connect (React) code to (HTML) code
  // !We can now manipulate limited the (DOM), like reading / passing only the value of input
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const errorHanlder = () => {
    setError(null);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      errorHanlder();
    }
  });

  const userHandler = () => {
    if (nameInputRef.current.value.trim().length !== 0) {
      setIsValid(true);
    }
  };

  const ageHandler = () => {
    if (ageInputRef.current.value.trim().length !== 0) {
      setIsValid(true);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    const user = {
      _id: Math.random(),
      username: enteredName,
      age: enteredUserAge,
    };

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setIsValid(false);

      // !Error State for Invalid Input
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }

    if (+enteredUserAge < 1) {
      setIsValid(false);

      // !Error State for Invalid Age
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });

      return;
    }

    props.addedUser(user);
    console.log(user);

    enteredName = "";
    enteredUserAge = "";
  };

  return (
    <div>
      {/* Set a (Error Modal) depends on error */}
      {/* If we have an error we automatic call (setError) to set the error title & error message on refresh the page so our (ErrorModal) component can read the (error.title & error.message) */}
      {error && (
        <ErrorModal
          onClick={errorHanlder}
          title={error.title}
          message={error.message}
        />
      )}
      <form className="grid gap-6" onSubmit={submitHandler}>
        <div className="grid gap-3">
          <div className="grid gap-2">
            <label
              htmlFor="username"
              className={`${!isValid ? "text-red-500" : "text-white"}`}
            >
              Username
            </label>
            <input
              id="username"
              className={`w-full bg-transparent rounded-md px-2 py-1 border-b-neutral-700 border-b-2 ${
                !isValid
                  ? "border-b-red-500 bg-red-300"
                  : "border-b-neutral-700 bg-transparent"
              }`}
              onChange={userHandler}
              // !To connect our (HTML) code to (React) code
              ref={nameInputRef}
              type="text"
            />
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="age"
              className={`${!isValid ? "text-red-500" : "text-white"}`}
            >
              Age
            </label>
            <input
              id="age"
              className={`w-full bg-transparent rounded-md px-2 py-1 border-b-neutral-700 border-b-2 ${
                !isValid
                  ? "border-b-red-500 bg-red-300"
                  : "border-b-neutral-700 bg-transparent"
              }`}
              onChange={ageHandler}
              // !To connect our (HTML) code to (React) code
              ref={ageInputRef}
              type="number"
            />
          </div>
        </div>

        <Button
          className="w-full bg-amber-500 p-3 text-neutral-900 hover:bg-amber-600 transition-colors"
          type="submit"
        >
          Add User
        </Button>
      </form>
    </div>
  );
};

export default AddUser;
