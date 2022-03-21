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
        {quizState.answers.map((answer, index) => (
          <Answer key={index} index={index} answer={answer} />
        ))}
      </div>
    </div>
  );
};

export default Question;
