import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amount = transactions.map((transaction) => transaction.amount);
  const total = amount.reduce((prev, curr) => (prev += curr), 0).toFixed(2);
  console.log(total);
  return (
    <>
      <h1>Your Balance</h1>
      <h4>{`RS. =${total}`}</h4>
    </>
  );
};

export default Balance;
