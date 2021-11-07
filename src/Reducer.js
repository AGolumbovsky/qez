const initState = {
  options: {
    loading: false,
    question_category: ``,
    question_difficulty: ``,
    question_type: ``,
    amount_of_questions: 50,
    // sam dobavil
    level: ``,
  },
  questions: [],
  index: 0,
  score: 0,
}

const Reducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_LOADING':
      return {
        ...state,
        options: {
          ...state.options,
          loading: action.loading,
        },
      }

    case 'CHANGE_CATEGORY':
      return {
        ...state,
        options: {
          ...state.options,
          question_category: action.question_category,
        },
      }

    case 'CHANGE_LESSON':
      return {
        ...state,
        options: {
          ...state.options,
          lesson_selection: action.lesson_selection,
        },
      }

    case 'CHANGE_TYPE':
      return {
        ...state,
        options: {
          ...state.options,
          question_type: action.question_type,
        },
      }

    case 'CHANGE_AMOUNT':
      return {
        ...state,
        options: {
          ...state.options,
          amount_of_questions: action.amount_of_questions,
        },
      }

    case 'SET_QUESTIONS':
      return {
        ...state,
        questions: action.questions,
      }

    case 'SET_INDEX':
      return {
        ...state,
        index: action.index,
      }

    case 'SET_SCORE':
      return {
        ...state,
        score: action.score,
      }
    // sam dobavil
    case 'SET_LEVEL':
      return {
        ...state,
        level: action.level,
    }

    


    default:
      return state
  }
}

export default Reducer
