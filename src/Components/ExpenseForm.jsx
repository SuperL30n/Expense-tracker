import { useState } from "react";
import styles from "./expenseForm.module.css";

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState({});

  function validate() {
    const newErrors = {};
    if (!description.trim()) newErrors.description = "Description is required";
    if (!amount.trim()) newErrors.amount = " Amount is required.";
    else if (isNaN(amount) || Number(amount) <= 0)
      newErrors.amount = "Amount must be a positive number";
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const expense = {
      id: Date.now(),
      description: description.trim(),
      amount: Number(amount),
      category: category.trim() || "Uncategorized",
      date: new Date().toISOString(),
    };

    onAddExpense(expense);

    setDescription("");
    setAmount("");
    setCategory("");
    setErrors({});
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>New Expense</h2>
      <div className={styles.inputGroup}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
            if (errors.description) {
              setErrors((prev) => ({ ...prev, description: undefined }));
            }
          }}
          placeholder="e.g. Groceries"
        />
        {errors.description && (
          <small style={{ color: "red" }}>{errors.description}</small>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="amount">Amount ($)</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
            if (errors.amount) {
              setErrors((prev) => ({ ...prev, amount: undefined }));
            }
          }}
          placeholder="e.g. 25.00"
          step="0.01"
          min="0"
        />
        {errors.amount && (
          <small style={{ color: "red" }}>{errors.amount}</small>
        )}
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="category">Category (optional)</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="e.g. Food"
          step="0.01"
          min="0"
        />
      </div>

      <button
        type="submit"
        disabled={!description.trim() || !amount.trim()}
        style={{ marginTop: 10 }}
      >
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
