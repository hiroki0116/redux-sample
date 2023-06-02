import { useState } from "react";
import Button from "antd/lib/button";
import Input from "antd/lib/input";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../stores/counter/counterSlice";
import { RootState } from "../stores/store";

const ReduxSample = () => {
  const [val, setVal] = useState(0);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const handleIncrement = () => dispatch(increment());
  const handleDecrement = () => dispatch(decrement());
  const handleAdd = () => dispatch(incrementByAmount(val));
  return (
    <>
      <div className="text-center">Reducer Count: {count}</div>
      <div className="flex justify-center gap-5 py-5">
        <Button className="bg-red-400" onClick={handleIncrement}>
          Increment
        </Button>
        <Button className="bg-red-400" onClick={handleDecrement}>
          Decrement
        </Button>
      </div>
      <div className="flex justify-center gap-5 w-44 mx-auto">
        <Input value={val} onChange={(e) => setVal(+e.target.value)} />
        <Button className="bg-red-300" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </>
  );
};

export default ReduxSample;
