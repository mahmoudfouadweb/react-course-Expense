import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../NewExpense/ExpensesFilter';
import './ExpensesList.css';
import { useState } from 'react';

function ExpensesList(props) {
  const [selectedYear, setSelectedYear] = useState('2019');
  const addEnteredYear = theYear => {
    setSelectedYear(theYear);
    console.log(theYear);
  };

  const filterHandler = year => {
    const filtered = props.expenses.filter(selectedYear => {
      return selectedYear === year;
    });
    console.log('filterHandler', filtered);
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
