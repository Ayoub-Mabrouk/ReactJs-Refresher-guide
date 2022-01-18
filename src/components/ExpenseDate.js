export default function ExpenseDate(props) {
  const date = props.data;
  return (
    <div>
      <div>{date.toLocaleString("en-Us", { month: "long" })}</div>
      <div>{date.toLocaleString("en-US", { day: "2-digit" })}</div>
      <div>{date.getFullYear()}</div>
    </div>
  );
}
