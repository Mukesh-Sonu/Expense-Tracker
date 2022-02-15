import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((prev, curr) => (prev += curr), 0).toFixed(2);
  const income = amounts
    .filter((curr) => curr > 0)
    .reduce((prev, curr) => (prev += curr), 0)
    .toFixed(2);

  const expense = (
    amounts
      .filter((curr) => curr < 0)
      .reduce((prev, curr) => (prev += curr), 0) * -1
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">{expense}</p>
      </div>
    </div>
  );
};

export default IncomeExpenses;
