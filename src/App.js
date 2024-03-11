import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { deposit, withdraw, reset } from "./store/balance/slice";
import { selectBalance } from "./store/balance/selectors";

function App() {
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);

  const [amount, setAmount] = useState(0);

  function addAmount(e) {
    dispatch(deposit(amount));
    setAmount(0);
    e.preventDefault();
  }

  return (
    <div className="App">
      <p>Balance: {balance}$</p>
      <button
        onClick={() => {
          dispatch(deposit(10));
        }}
      >
        Deposit 10$
      </button>{" "}
      <button
        onClick={() => {
          dispatch(withdraw(10));
        }}
      >
        Withdraw 10$
      </button>{" "}
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>{" "}
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(parseInt(e.target.value))}
      />{" "}
      <button onClick={addAmount}>Add money</button>
    </div>
  );
}

export default App;
