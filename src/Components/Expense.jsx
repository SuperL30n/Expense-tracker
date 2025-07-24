import styles from "./expenseList.module.css";

function Expense({ expense, onDeleteExpense }) {
  const { id, description, amount, category } = expense;

  return (
    <li className={styles.item}>
      <div className={styles.format}>
        <span>
          <strong>{description} </strong>{" "}
        </span>{" "}
        - <span>${amount.toFixed(2)}</span>
        <span>
          {" "}
          <em>({category})</em>
        </span>
      </div>
      <button onClick={() => onDeleteExpense(id)} className={styles.deleteBtn}>
        &times;
      </button>
    </li>
  );
}

export default Expense;
