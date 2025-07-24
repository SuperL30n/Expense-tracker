import SummaryChart from "./SummaryChart";
import styles from "./summary.module.css";

function Summary({ expenses }) {
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});
  const data = Object.entries(categoryTotals).map(([category, total]) => ({
    category,
    total,
  }));

  const totalSpent = data.reduce((sum, item) => sum + item.total, 0);
  return (
    <div>
      <h2>Summary Overview</h2>

      {expenses.length === 0 ? (
        <p>No Summary yet. Add one!</p>
      ) : (
        <div className={styles.summary}>
          <h3>Total Spent: ${totalSpent.toLocaleString()}</h3>
          <SummaryChart data={data} />
        </div>
      )}
    </div>
  );
}

export default Summary;
