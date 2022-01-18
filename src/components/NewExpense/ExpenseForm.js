import React,{ useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm(props) {
    const [title,setTitle]=useState('');
    const [amount,setAmount]=useState('');
    const [date,setDate]=useState('');

   const submitHandler=(e)=>{
       e.preventDefault();
       props.onSaveExpenseData({title,amount,date:new Date(date)});
       setTitle('');
       setAmount('');
       setDate('');
   }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
