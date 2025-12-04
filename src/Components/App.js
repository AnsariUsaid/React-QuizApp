import Headers from "./Header";
import MainSection from "./MainSection";
import {useEffect,useReducer} from "react"
import Loader from "./Loader"
import Error from "./Error"
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import ProgressBar from "./Progressbar";
import FinishScreen from "./FinishScreen";
import Timer from "./Timer";
import Footer from "./Footer";


const Secs_per_question=30;

const initialState={
  questions:[],
  //loading,error,finished,active,ready
  status:'loading',
  index:0,
  Answer:null,
  points:0,
  highScore:0,
  secondsRemaining:null,
}

function reducer(state,action){
  switch(action.type){
    case 'dataRecieved':
      return {...state,questions:action.payload,status:'ready'};
    case 'dataFailed':
      return {...state,status:'error'};
    case 'start':
      return {...state,status:'active',secondsRemaining:state.questions.length*Secs_per_question};
    case 'newAnswer':
      const question=state.questions.at(state.index);
      return {...state,Answer:action.payload,points:action.payload===question.correctOption? state.points+question.points: state.points};
    case 'nextQuestion':
      return {...state,index:state.index+1,Answer:null};
    case 'finish':
      return {...state,status:'finished',highScore:state.points>state.highScore?state.points:state.highScore};
    case 'restart':
      return{...state,index:0,status:'active',Answer:null,points:0,secondsRemaining:state.questions.length*Secs_per_question};
    case 'tick':
      return{...state,secondsRemaining:state.secondsRemaining-1,status:state.secondsRemaining===0?'finished':state.status};
    default:
      throw new Error("Action is Unknown");
  } 
}

export default function App(){


  const[state,dispatch]=useReducer(reducer,initialState);
  const {questions,status,index,Answer,points,highScore,secondsRemaining}=state;

  const numQuestions=questions.length;
  const maxPoints=questions.reduce((prev,cur)=>prev+cur.points,0);

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
      {status==='active' &&
        <>
        <ProgressBar index={index} numQuestions={numQuestions} points={points} maxPoints={maxPoints}/>
        <Question question={questions[index]} dispatch={dispatch} Answer={Answer} />
        <Footer>    
          <Timer dispatch={dispatch} secondsRemaining={secondsRemaining}/>
          <NextButton dispatch={dispatch} Answer={Answer} numQuestions={numQuestions} index={index}/>
        </Footer>
        </> 
      }
      {status==='finished' && <FinishScreen points={points} maxPoints={maxPoints} highScore={highScore} dispatch={dispatch}/>}
    </MainSection>
  </div>  
}