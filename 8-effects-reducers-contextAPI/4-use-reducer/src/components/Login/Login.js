import Button from "../UI/Button";
import Card from "../UI/Card";
import { useState, useEffect, useReducer } from "react";
import Modal from "../UI/Modal";
import { emailValidation } from "../Helper/EmailValidation";

// !Reducer Function parameters
const emailReducer = (state, action) => {
  // !(action) getting all value from (dispatchEmail)

  // console.log("STATE:");
  // console.log(state);
  //
  // console.log("ACTION:");
  // console.log(action);

  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  if (action.type === "INPUT_BLUR") {
    // !(state) this is our latest (states / dispatchEmail)
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }

  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  // !(enteredEmail & emailIsValid)
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  // !Object Destructuring
  // !We extract the (isValid) from our (useReducer) and set an alias (emailIsValid / passwordIsValid)
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("CLEANUP");

      clearTimeout(identifier);
    };

    // !We set only validation on our dependencies
    // !We only need to run this (useEffect) when the validation is changed

    // !NOTE: To optimize our (useEffect) to avoid sending to many https request
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    // !(dispatchEmail) Passing value from (useReducer) to Reducer Function (emailReducer)
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });

    // console.log("EMAIL STATE:");
    // console.log(emailState);

    // setFormIsValid(
    //   // !(emailState.value) Getting value from (useReducer) that we pass using (dispatchEmail)
    //   emailState.isValid && passwordState.isValid
    // );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_INPUT", val: event.target.value });

    // setFormIsValid(passwordState.isValid && emailState.isValid);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isValid);

    // !We only pass (type) because we don't have any value just checking if (true or false)
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    // setPasswordIsValid(enteredPassword.trim().length > 6);

    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const loginHandler = (event) => {
    event.preventDefault();

    props.login({ email: emailState.value, password: passwordState.value });

    emailState.value("");
    passwordState.value("");
  };

  return (
    <>
      <Card className="p-4 w-full">
        <section>
          <form onSubmit={loginHandler} className="grid gap-6">
            <div className="grid gap-4">
              <input
                className={`w-full rounded-md p-2 bg-neutral-900 ${
                  emailState.isValid === false
                    ? " outline-red-500 outline-2 outline-none"
                    : ""
                }`}
                type="email"
                placeholder="yourname@email.com"
                id="email"
                value={emailState.value}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
              <input
                className={`w-full rounded-md p-2 bg-neutral-900 ${
                  passwordState.isValid === false
                    ? " outline-red-500 outline-2 outline-none"
                    : ""
                }`}
                type="password"
                placeholder="Password"
                id="password"
                value={passwordState.value}
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
