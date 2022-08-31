import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import './ExpensesList.css';
import { useState } from 'react';

function ExpensesList(props) {
  const [selectedYear, setSelectedYear] = useState('2020');
  const addEnteredYear = theYear => {
    setSelectedYear(theYear);
  };
  console.log(selectedYear);
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onAddYear={addEnteredYear} />
        {props.expenses.map(expense => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
    </div>
  );
}

export default ExpensesList;
