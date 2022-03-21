import { createContext, useReducer } from 'react';
import questions from '../data';
import { shuffleAnswers } from '../helpers';

const initialState = {
  questions,
  currentIndexQuestion: 0,
  showResults: false,
  answers: shuffleAnswers(questions[0]),
};

const reducer = (state, action) => {
  console.log('reducer: ', state, action);
  if (action.type === 'NEXT_QUESTION') {
    const showResults =
      state.currentIndexQuestion === state.questions.length - 1;
    const currentIndexQuestion = showResults
      ? state.currentIndexQuestion
      : state.currentIndexQuestion + 1;
    const answers = showResults
      ? []
      : shuffleAnswers(questions[currentIndexQuestion]);
    return {
      ...state,
      currentIndexQuestion,
      showResults,
      answers,
    };
  }
  if (action.type === 'RESTART') {
    return initialState;
  }
  return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
