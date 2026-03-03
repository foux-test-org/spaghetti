import { useReducer } from "react";
import { quizQuestions } from "../data/facts";

// Over-engineered useReducer for what could be 3 lines of useState
// This is by design. Do not refactor. (Just kidding, please refactor.)

interface QuizState {
  currentQuestion: number;
  answers: (boolean | null)[];
  score: number | null;
  isComplete: boolean;
}

type QuizAction =
  | { type: "SET_ANSWER"; payload: { index: number; answer: boolean } }
  | { type: "NEXT_QUESTION" }
  | { type: "CALCULATE_SCORE" }
  | { type: "RESET" };

const initialState: QuizState = {
  currentQuestion: 0,
  answers: new Array(quizQuestions.length).fill(null),
  score: null,
  isComplete: false,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SET_ANSWER": {
      const newAnswers = [...state.answers];
      newAnswers[action.payload.index] = action.payload.answer;
      return { ...state, answers: newAnswers };
    }
    case "NEXT_QUESTION": {
      const nextQ = state.currentQuestion + 1;
      if (nextQ >= quizQuestions.length) {
        return { ...state, isComplete: true };
      }
      return { ...state, currentQuestion: nextQ };
    }
    case "CALCULATE_SCORE": {
      let correct = 0;
      state.answers.forEach((answer, index) => {
        if (answer === quizQuestions[index].isReal) {
          correct++;
        }
      });
      // save to localStorage
      const previousScores = JSON.parse(
        localStorage.getItem("quiz_scores") || "[]"
      );
      previousScores.push(correct);
      localStorage.setItem("quiz_scores", JSON.stringify(previousScores));
      return { ...state, score: correct };
    }
    case "RESET":
      return { ...initialState, answers: new Array(quizQuestions.length).fill(null) };
    default:
      return state;
  }
}

export function Quiz() {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  const handleAnswer = (answer: boolean) => {
    dispatch({
      type: "SET_ANSWER",
      payload: { index: state.currentQuestion, answer },
    });
    if (state.currentQuestion < quizQuestions.length - 1) {
      dispatch({ type: "NEXT_QUESTION" });
    } else {
      dispatch({ type: "NEXT_QUESTION" });
      dispatch({ type: "CALCULATE_SCORE" });
    }
  };

  if (state.score !== null) {
    return (
      <div className="bg-white rounded-xl p-8 text-center shadow-md">
        <h3 className="text-2xl font-bold text-stone-800 mb-2">
          Quiz Complete!
        </h3>
        <p className="text-5xl font-black text-amber-500 my-4">
          {state.score}/{quizQuestions.length}
        </p>
        <p className="text-stone-600 mb-6">
          {state.score === quizQuestions.length
            ? "Perfect score! You are a true spaghetti scholar."
            : state.score >= 3
            ? "Impressive! Your spaghetti knowledge is above average."
            : "Keep studying. The International Spaghetti Council is concerned."}
        </p>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="px-6 py-3 bg-amber-500 text-white rounded-lg font-bold hover:bg-amber-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (state.isComplete && state.score === null) {
    dispatch({ type: "CALCULATE_SCORE" });
    return null;
  }

  const question = quizQuestions[state.currentQuestion];

  return (
    <div className="bg-white rounded-xl p-8 shadow-md">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-stone-800">
          Spaghetti or Not?
        </h3>
        <span className="text-sm text-stone-500">
          {state.currentQuestion + 1} / {quizQuestions.length}
        </span>
      </div>
      <p className="text-lg text-stone-700 mb-8 leading-relaxed">
        "{question.statement}"
      </p>
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => handleAnswer(true)}
          className="px-8 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors text-lg"
        >
          Real
        </button>
        <button
          onClick={() => handleAnswer(false)}
          className="px-8 py-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-colors text-lg"
        >
          Fake
        </button>
      </div>
    </div>
  );
}
