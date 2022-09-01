import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = props => {
  const [editing, setEditing] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseLevelFirst(expenseData);
  };

  const editOnHandler = () => {
    setEditing(true);
  };
  const editOffHandler = () => {
    setEditing(false);
  };

  return (
    <div className="new-expense">
      {!editing && <button onClick={editOnHandler}>Add New Expense</button>}
      {editing && (
        <ExpenseForm
          onTrigger={editOffHandler}
          onSaveExpenseDataLevelTwo={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
