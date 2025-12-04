import Headers from "./Header";
import MainSection from "./MainSection";
import {useEffect,useReducer} from "react"
import Loader from "./Loader"
import Error from "./Error"
import StartScreen from "./StartScreen";
import Question from "./Question";

const initialState={
  questions:[],
  //loading,error,finished,active,ready
  status:'loading',
  index:0,
  Answer:null,
  points:0,
}

function reducer(state,action){
  switch(action.type){
    case 'dataRecieved':
      return {...state,questions:action.payload,status:'ready'};
    case 'dataFailed':
      return {...state,status:'error'};
    case 'start':
      return {...state,status:'active'};
    case 'newAnswer':
      const question=state.questions.at(state.index);
      return {...state,Answer:action.payload,points:action.payload===question.correctOption? state.points+question.points: state.points};
    default:
      throw new Error("Action is Unknown");
  } 
}

export default function App(){


  const[state,dispatch]=useReducer(reducer,initialState);
  const {questions,status,index,Answer}=state;

  const numQuestions=questions.length;

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({type:'dataRecieved',payload:data}))
      .catch((err) => dispatch({type:'dataFailed'}));
  },[]);

  return <div className="app">
    <Headers/>
    <MainSection>
      {status ==='loading' && <Loader/>}
      {status==='error' && <Error/>}
      {status==='ready'&& <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
      {status==='active' && <Question question={questions[index]} dispatch={dispatch} Answer={Answer} />}
    </MainSection>
  </div>  
}