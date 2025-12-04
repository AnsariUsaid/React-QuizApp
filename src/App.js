import Headers from "./Header";
import MainSection from "./MainSection";
import {useEffect,useReducer} from "react"
import Loader from "./Loader"
import Error from "./Error"
import StartScreen from "./StartScreen";

const initialState={
  questions:[],
  //loading,error,finished,active,ready
  status:'loading',
}
function reducer(state,action){
  switch(action.type){
    case 'dataRecieved':
      return {...state,questions:action.payload,status:'ready'};
    case 'dataFailed':
      return {...state,status:'error'};
    default:
      throw new Error("Action is Unknown");
  } 
}

export default function App(){


  const[state,dispatch]=useReducer(reducer,initialState);
  const {questions,status}=state;

  const numQuestions=questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type:'dataRecieved',payload:data}))
      .catch((err) => dispatch({type:'dataFailed'}));
  });

  return <div className="app">
    <Headers/>
    <MainSection>
      {status ==='loading' && <Loader/>}
      {status==='error' && <Error/>}
      {status==='ready'&& <StartScreen numQuestions={numQuestions}/>}
    </MainSection>
  </div>  
}