import Question from './Question';
import { useContext, useReducer } from 'react';
import { QuizContext } from '../contexts/quiz';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='quiz'>
      <div>
        <div className='score'>Question 1/8</div>
        <Question questions={quizState.questions} />
        <div
          className='next-button'
          onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
        >
          Next question
        </div>
      </div>
    </div>
  );
};

export default Quiz;
