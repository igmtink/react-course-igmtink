import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState, useEffect } from "react";
import Modal from "../UI/Modal";
import { emailValidation } from "../Helper/EmailValidation";

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    // !Set a timeout before executing the (useEffect) to avoid network traffic
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(
        // !Helper for (Email Validation)
        emailValidation(enteredEmail) && enteredPassword.trim().length > 6
      );
    }, 500);

    // !This is a (Cleanup Function)

    // !NOTE: This would not run for the very first time execution of our (useEffect)
    return () => {
      console.log("CLEANUP");

      // !This is will clear our (setTimeout) and make a new one for executing again this (useEffect) to avoid calling our (useEffect) everytime we press a keystroke
      clearTimeout(identifier);
    };

    // !Adding ([]) dependencies, everytime we have changes on this two dependencies (Email Input & Password Input) we run again this (useEffect) to validate our form
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);

    // !This is replaced by (useEffect) to avoid hard coded
    // setFormIsValid(
    //   event.target.value.includes("@") && enteredPassword.trim().length > 6
    // );
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);

    // !This is replaced by (useEffect) to avoid hard coded
    // setFormIsValid(
    //   event.target.value.trim().length > 6 && enteredEmail.includes("@")
    // );
  };

  const validateEmailHandler = () => {
    // !Shorthand to set a boolean condition to true
    setEmailIsValid(enteredEmail.includes("@"));
  };

  const validatePasswordHandler = () => {
    // !Shorthand to set a boolean condition to true
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    props.login({ email: enteredEmail, password: enteredPassword });

    enteredEmail("");
    enteredPassword("");
  };

  return (
    <>
      <Card className="p-4 w-full">
        <section>
          <form onSubmit={loginHandler} className="grid gap-6">
            <div className="grid gap-4">
              <input
                className={`w-full rounded-md p-2 bg-neutral-900 ${
                  // !We set a (invalid) validation and (reset) validation
                  emailIsValid === false
                    ? " outline-red-500 outline-2 outline-none"
                    : ""
                }`}
                type="email"
                placeholder="yourname@email.com"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
              <input
                className={`w-full rounded-md p-2 bg-neutral-900 ${
                  // !We set a (invalid) validation and (reset) validation
                  passwordIsValid === false
                    ? " outline-red-500 outline-2 outline-none"
                    : ""
                }`}
                type="password"
                placeholder="Password"
                id="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="px-2 py-4 w-full transition-colors"
                disabled={!formIsValid}
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
