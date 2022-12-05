import { useState } from "react";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [isValid, setIsValid] = useState(true);
  const [enteredUser, setUser] = useState("");
  const [enteredAge, setAge] = useState("");

  // !Error States for diffrent error
  const [error, setError] = useState();

  // !To dismiss the (ErrorModal) component we set the (error) useState into (null)
  const errorHanlder = () => {
    setError(null);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      errorHanlder();
    }
  });

  const userHandler = (event) => {
    if (enteredUser.trim().length !== 0) {
      setIsValid(true);
    }

    setUser(event.target.value);
  };

  const ageHandler = (event) => {
    if (enteredAge.trim().length !== 0) {
      setIsValid(true);
    }

    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const user = {
      _id: Math.random(),
      username: enteredUser,
      age: enteredAge,
    };

    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      setIsValid(false);

      // !Error State for Invalid Input
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });

      return;
    }

    if (+enteredAge < 1) {
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

    setUser("");
    setAge("");
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
              value={enteredUser}
              onChange={userHandler}
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
              value={enteredAge}
              onChange={ageHandler}
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
