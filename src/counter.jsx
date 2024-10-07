import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <div class="counter__main">
      <h1> welcome in react with RTK</h1>
      <div class="counter__innermain">
        <p>Counter</p>
        {count}
      </div>
      <div class="counter__actionbutton">
        <button onClick={(state) => dispatch(increment())}>Plus +</button>
        <button onClick={() => dispatch(decrement())}>Minu -</button>
      </div>
    </div>
  );
};

export default Counter;
