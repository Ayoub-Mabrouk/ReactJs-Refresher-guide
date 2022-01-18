import ExpenseDate from "./ExpenseDate.js";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
  let {title, amount, date } = props.data;
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}
