import Expense from "./Expense";
import styles from "./expenseList.module.css";

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div>
      <h2>Expense List</h2>{" "}
      {expenses.length === 0 ? (
        <p className={styles.empty}>No expenses yet. Add one!</p>
      ) : (
        <ul className={styles.list}>
          {expenses.map((expense) => (
            <Expense
              expense={expense}
              key={expense.id}
              onDeleteExpense={onDeleteExpense}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ExpenseList;
