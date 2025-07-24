import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import Summary from "./Components/Summary";
import "./App.css";
import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);

  function onAddExpense(item) {
    setExpenses((expenses) => [...expenses, item]);
  }
  function onDeleteExpense(id) {
    setExpenses((expenses) => expenses.filter((expense) => expense.id !== id));
  }

  return (
    <div className="container">
      <div class="box">
        <ExpenseForm onAddExpense={onAddExpense} />
      </div>
      <div class="box">
        <ExpenseList expenses={expenses} onDeleteExpense={onDeleteExpense} />
      </div>
      <div class="box">
        <Summary expenses={expenses} />
      </div>
    </div>
  );
}

export default App;
