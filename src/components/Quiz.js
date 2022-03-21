import Question from './Question';
import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';
import { useEffect } from 'react';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const apiUrl = 'https://opentdb.com/api.php?amount=10&encode=url3986';

  useEffect(() => {
    if (quizState.questions.length > 0) {
      return;
    } else {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) =>
          dispatch({ type: 'LOADED_QUESTIONS', payload: data.results })
        );
    }
  });

  return (
    <div className='quiz'>
      {quizState.showResults && (
        <div className='results'>
          <div className='congratulations'>Congratulations</div>
          <div className='results-info'>
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of{' '}
              {quizState.questions.length}{' '}
            </div>
            <div
              className='next-button'
              onClick={() => dispatch({ type: 'RESTART' })}
            >
              Restart
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && quizState.questions.length > 0 && (
        <div>
          <div className='score'>
            Question {quizState.currentIndexQuestion + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          <div
            className='next-button'
            onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
          >
            Next question
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
