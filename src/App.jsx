
import "./App.css";
import { decrement, increment } from "./redux/features/counter/counterSlice.ts";
import { useAppDispatch, useAppSelector } from "./redux/hook.ts";

function App() {
  const dispatch = useAppDispatch();
  const {count}= useAppSelector((state) => state.counter);

  const handleIncrement = (amount) => {
    dispatch(increment(amount));
  };
  const handleDecrement = (amount) => {
    dispatch(decrement(amount));
  };

  return (
    <>
      <h1>Redux counter</h1>
      <div className="flex">
        <button onClick={()=>handleDecrement(1)}>decrement</button>
        <p>{count}</p>
        <button onClick={()=>handleIncrement(2)}>increment</button>
      </div>
    </>
  );
}

export default App;
