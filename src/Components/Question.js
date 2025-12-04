import Option from "./options";

function Question({question,dispatch,Answer}){
    return <div>
        <h4>{question.question}</h4>
        <Option question={question} dispatch={dispatch} Answer={Answer}/>
    </div>
}

export default Question;