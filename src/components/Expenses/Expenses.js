import React from 'react';
import ExpenseItem from './ExpenseItem.js';

export default function Expenses(props) {
    return (
        <>
           {props.items?.map(e=><ExpenseItem key={e.id} data={e}/>)} 
        </>
    )
}
