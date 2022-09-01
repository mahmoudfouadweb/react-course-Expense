import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import './ExpensesList.css';
import { useState } from 'react';

function ExpensesList(props) {
  const [selectedYear, setSelectedYear] = useState('2019');
  const addEnteredYear = theYear => {
    setSelectedYear(theYear);
    props.onFilter(theYear);
  };
  let expenesesContent = <h1>No Data Found...</h1>;
  if (props.expenses.length > 0) {
    expenesesContent = props.expenses.map((expense, i) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onYear={selectedYear} onAddYear={addEnteredYear} />
        {expenesesContent}
      </div>
    </div>
  );
}

export default ExpensesList;
