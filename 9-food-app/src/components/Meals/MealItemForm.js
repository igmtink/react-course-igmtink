import Input from "../UI/Input";
import Button from "../UI/Button";
import { useRef, useState } from "react";
import Alert from "../UI/Alert";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;

    // !This will convert an a (String Number) to (Number)
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmountNumber < 1) {
      console.log("Not Submitted");
      setAmountIsValid(false);
      return;
    }

    props.addToCart(enteredAmountNumber);
  };

  return (
    <>
      <form onSubmit={submitHandler} className="flex gap-2">
        <Input
          className="bg-neutral-900 text-center w-20"
          ref={amountInputRef}
          input={{
            type: "number",
            min: "0",
            max: "5",
            step: "1",
            defaultValue: "0",
          }}
        />
        <Button
          type="submit"
          className="bg-amber-300 hover:bg-amber-400 transition-colors w-10 h-10 rounded-full flex justify-center items-center text-center p-4"
        >
          +
        </Button>
      </form>

      {!amountIsValid && (
        <Alert
          className={`bg-red-500 animate-fade-in-out ${setTimeout(() => {
            setAmountIsValid(true);
          }, 3000)}`}
        >
          Please enter a valid amount!
        </Alert>
      )}
    </>
  );
};

export default MealItemForm;
