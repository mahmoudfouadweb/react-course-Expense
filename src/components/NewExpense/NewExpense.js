import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

const NewExpense = props => {
  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseLevelFirst(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm
        onFilter={props.onFilter}
        onSaveExpenseDataLevelTwo={saveExpenseDataHandler}
      />
    </div>
  );
};

export default NewExpense;
