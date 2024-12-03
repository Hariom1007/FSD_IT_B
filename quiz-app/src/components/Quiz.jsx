import React, { useState } from 'react'
import qBank from './data'


const Quiz = () => {
    const[qid,setQid]=useState(0);
    function handlePrevious(){
        if(qid>0)
            setQid(qid-1)
    }
    function handleNext(){
        if(qid<qbank.length-1)
            setQid(qid+1)
    }
  return (
    <div className="quiz-container">
        Question {qBank[qid].id} : {qBank[qid].ques}<br/>
        <input type='radio' name='opt'/>{qBank[qid].opt1}<br/>
        <input type='radio' name='opt'/>{qBank[qid].opt2}<br/>
        <input type='radio' name='opt'/>{qBank[qid].opt3}<br/>
        <input type='radio' name='opt'/>{qBank[qid].opt4}<br/>
        <button id="previous" onClick={handlePrevious}>Previous</button>
        <button id="next" onClick={handleNext}>Next</button>
    </div>
  )
}

export default Quiz