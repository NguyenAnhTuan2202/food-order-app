import styled from "./MealItemForm.module.css";
import Input from "../../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [isAmountValid, setIsAmountValid] = useState(true);
  const inputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const numberOfAmount = +inputRef.current.value;
    if (
      inputRef.current.value.trim().length === 0 ||
      numberOfAmount < 1 ||
      numberOfAmount > 5
    ) {
      setIsAmountValid(false);
      return;
    }

    props.addToCart(numberOfAmount);
  };

  return (
    <form className={styled.form} onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button>+Add</button>
      {!isAmountValid && <p>Please enter amount between from 1 to 5</p>}
    </form>
  );
};

export default MealItemForm;
