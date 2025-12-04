import { useReducer } from "react";

const initialState={count:0,step:1};

function reducer(State,action){
  console.log(State,action);
  switch(action.type){
    case 'dec':
      return{...State,count:State.count-State.step}
    case 'inc':
      return{...State,count:State.count+State.step}
    case 'SetCount':
      return{...State,count:action.payload}
    case 'SetStep':
      return{...State,step:action.payload}
    case 'reset':
      return initialState
    default:
      return State;
  }
}

function DateCounter() {

  // const [count, setCount] = useState(0);
  const [State,dispatch]=useReducer(reducer,initialState);
  const {count,step}=State
  // const [step, setStep] = useState(1);

  // This mutates the date object.
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const dec = function () {
    dispatch({type:'dec',payload:-1});
    // setCount((count) => count - 1);
    // setCount((count) => count - step);

  };

  const inc = function () {
    dispatch({type:'inc',payload:1});
    // setCount((count) => count + 1);
    // setCount((count) => count + step);
  };

  const defineCount = function (e) {
    dispatch({type:'SetCount',payload: Number(e.target.value)});
    // setCount(Number(e.target.value));
  };

  const defineStep = function (e) {
    dispatch({type:'SetStep',payload: Number(e.target.value)});
    // setStep(Number(e.target.value));
  };

  const reset = function () {
    dispatch({type:'reset'})
  };

  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
export default DateCounter;
