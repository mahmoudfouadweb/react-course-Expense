import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  function clickHandler() {
    setTitle('Updated');
    setTimeout(() => setTitle(props.title), 1500);
  }
  console.log(title);

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
