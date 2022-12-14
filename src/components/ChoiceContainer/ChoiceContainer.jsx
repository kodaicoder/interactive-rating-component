import { forwardRef } from "react";
import { Choice } from "../Choice/Choice";
import classes from "./choice-container.module.css";

export const ChoiceContainer = forwardRef((props, ref) => {
  return (
    <div className={classes.container}>
      {props.numbersArray.map((number) => (
        <Choice
          key={number}
          score={number}
          onScoreSelected={props.onScoreSelected}
          ref={ref}
        />
      ))}
    </div>
  );
});
