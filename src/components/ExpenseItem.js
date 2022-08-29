import './ExpenseItem.css';
function ExpenseItem(props) {
  const year = props.date;
  const month = props.date;
  const day = props.date;
  return (
    <div className="expense-item" id={props.id}>
      <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
