import ExpensesFilter from '../NewExpense/ExpensesFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpenseList from './ExpenseList';

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2019');
  const addEnteredYear = theYear => {
    setSelectedYear(theYear);
    props.onFilter(theYear);
  };

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter onYear={selectedYear} onAddYear={addEnteredYear} />
        <ExpenseList items={props.expenses} />
      </div>
    </div>
  );
}

export default Expenses;
