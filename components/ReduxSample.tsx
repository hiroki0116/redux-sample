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
    <div className="sm:w-1/2 mx-auto px-5">
      <p className="font-bold pb-1">Example 1: </p>
      <div className="flex sm:flex-row flex-col items-center gap-3 border p-2 rounded justify-between">
        <p className="text-center font-bold">Count: {count}</p>
        <Button className="bg-red-400" onClick={handleIncrement}>
          Increment
        </Button>
        <Button className="bg-red-400" onClick={handleDecrement}>
          Decrement
        </Button>
        <Input
          value={val}
          onChange={(e) => setVal(+e.target.value)}
          className="w-20"
        />
        <Button className="bg-red-300" onClick={handleAdd}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default ReduxSample;
