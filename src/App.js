import { useState } from 'react';
import ExpensesList from './components/Expense/ExpensesList';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const expenseHandler = data1 => {
    setExpenses(prevData => [data1, ...prevData]);
    console.log('App');
  };
  const filterHandler = year => {
    const filtered = expenses.filter(selectedYear => {
      return selectedYear === year;
    });
  };
  console.log(expenses);
  return (
    <div>
      <NewExpense
        onFilter={filterHandler}
        onAddExpenseLevelFirst={expenseHandler}
      />
      <ExpensesList expenses={expenses} />
    </div>
  );
}

export default App;
