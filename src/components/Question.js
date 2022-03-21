import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';
import Answer from './Answer';

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentIndexQuestion];
  return (
    <div>
      <div
        className='question'
        onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
      >
        {currentQuestion.question}
      </div>
      <div className='answers'>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </div>
    </div>
  );
};

export default Question;
