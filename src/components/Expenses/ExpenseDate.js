import './ExpenseDate.css';

export default function ExpenseDate(props) {
  const date = props.date;
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{date.toLocaleString("en-Us", { month: "long" })}</div>
      <div className='expense-date__year'>{date.toLocaleString("en-US", { day: "2-digit" })}</div>
      <div className='expense-date__day'>{date.getFullYear()}</div>
    </div>
  );
}
