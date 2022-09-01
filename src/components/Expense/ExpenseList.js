import ExpenseItem from './ExpenseItem';
import './ExpenseList.css';
const ExpenseList = props => {
  if (props.items === 0) {
    return <h1 className="expenses-list__fallback">No Data Found...</h1>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense, i) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
