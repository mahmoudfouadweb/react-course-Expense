import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import './ExpensesList.css';
import { useState } from 'react';

function ExpensesList(props) {
  const [selectedYear, setSelectedYear] = useState('2019');
  const addEnteredYear = theYear => {
    setSelectedYear(theYear);
  };
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onYear={selectedYear} onAddYear={addEnteredYear} />
        {props.expenses.map((expense, i) => (
          <ExpenseItem
            key={expense.id}
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
