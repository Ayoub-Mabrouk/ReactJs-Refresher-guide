import { useState } from "react";
import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  let { amount, date } = props.data;
  const [title,setTitle]=useState(props.data.title);
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={()=>setTitle("mam")}>Change Title</button>
    </div>
  );
}
