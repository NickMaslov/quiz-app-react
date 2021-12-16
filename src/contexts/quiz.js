import { createContext, useReducer } from 'react';

const initialState = {
  questions: [],
  currentIndexQuestion: 0,
};

const reducer = (state, action) => {
  console.log('reducer: ', state, action);
  if (action.type === 'NEXT_QUESTION') {
    return {
      ...state,
      currentIndexQuestion: state.currentIndexQuestion + 1,
    };
  }
  return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
