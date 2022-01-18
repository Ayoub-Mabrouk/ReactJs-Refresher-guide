import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css'

export default function ExpenseItem(props) {
    const {title,amount,date}=props.data;
    return (
        <div className='expense-item'>
            <ExpenseDate data={date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{amount}</div>
            </div>
        </div>
    )
}
