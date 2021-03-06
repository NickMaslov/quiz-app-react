import { createContext, useReducer } from 'react';
// import questions from '../data';
import { normalizeQuestions, shuffleAnswers } from '../helpers';

const initialState = {
  questions: [],
  currentIndexQuestion: 0,
  showResults: false,
  answers: [], //shuffleAnswers(questions[0]),
  currentAnswer: '',
  correctAnswersCount: 0,
};

const reducer = (state, action) => {
  // console.log('reducer: ', state, action);

  switch (action.type) {
    case 'NEXT_QUESTION': {
      const showResults =
        state.currentIndexQuestion === state.questions.length - 1;
      const currentIndexQuestion = showResults
        ? state.currentIndexQuestion
        : state.currentIndexQuestion + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentIndexQuestion]);
      return {
        ...state,
        currentIndexQuestion,
        showResults,
        answers,
        currentAnswer: '',
      };
    }
    case 'RESTART': {
      return initialState;
    }
    case 'SELECT_ANSWER': {
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentIndexQuestion].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case 'LOADED_QUESTIONS': {
      const normalizedQuestions = normalizeQuestions(action.payload);
      return {
        ...state,
        questions: normalizedQuestions,
        answers: shuffleAnswers(normalizedQuestions[0]),
      };
    }
    default: {
      return state;
    }
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
