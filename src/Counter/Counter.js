import { useDispatch, useSelector } from "react-redux";
import { DecrementCounter, incrementCounter } from "../services/actions/counterAction";


const Counter = () => {

    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();

    const handleIncriment = () => {
        dispatch(incrementCounter())
    }
    const handleDecriment = () => {
        dispatch(DecrementCounter());
    }
    return (
        <div>
            <h1>Hello</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleIncriment}>Incriment</button><button onClick={handleDecriment}>Decriment</button>
        </div>
    );
};

export default Counter;