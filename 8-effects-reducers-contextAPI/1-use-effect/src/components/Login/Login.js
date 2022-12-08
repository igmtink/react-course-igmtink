import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState, useRef } from "react";
import Modal from "../UI/Modal";

const Login = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [error, setError] = useState("");

  // !To dismiss the (ErrorModal) component we set the (error) useState into (null)
  const errorHanlder = () => {
    setError(null);
  };

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      errorHanlder();
    }
  });

  const loginHandler = (event) => {
    event.preventDefault();

    const user = {
      _id: Math.random(),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };

    if (
      emailInputRef.current.value.trim().length === 0 ||
      passwordInputRef.current.value.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    props.login(user);

    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";
  };

  return (
    <>
      {error && (
        <Modal
          onClick={errorHanlder}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className="p-4 w-full">
        <section>
          <form onSubmit={loginHandler} className="grid gap-6">
            <div className="grid gap-3">
              <input
                className="w-full rounded-md p-2 bg-neutral-900"
                type="email"
                placeholder="yourname@email.com"
                ref={emailInputRef}
              />
              <input
                className="w-full rounded-md p-2 bg-neutral-900"
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="px-2 py-4 w-full transition-colors"
              >
                Login
              </Button>
            </div>
          </form>
        </section>
      </Card>
    </>
  );
};

export default Login;
