const initState = {
  options: {
    loading: false
  },
  questions: [],
  questionsCount: 0,
  currentQuestion: {

  },
  //idk
  userAnswers: {},
  questionIndex: 0
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

    case 'SET_QUESTIONS': 
      return {
        ...state,
        questions: action.questions,
        questionsCount: action.questionsCount,
        currentQuestion: action.questions[state.questionIndex]
      }
      
    case 'CURRENT_QUESTION':
      return {
        ...state,
        currentQuestion: state.questions[action.questionIndex],
        questionIndex: action.questionIndex
        // currentQuestion: action.currentQuestion
      }
        
    case 'SELECTED_ANSWER':
      return {
        ...state,
        userAnswers: {
         ...state.userAnswers, [action.questionId]: action.selectedAnswerId

        }
      }

    case 'TOGGLE_REVIEW_QUESTION':
      return {
        ...state,
        isFromReview: action.isFromReview
      }

    case 'RESULTS':
      return {
        ...state,
        questions: state.questions,
        userAnswers: state.userAnswers
      }

    case 'RESET_QUESTIONS':
      return initState

    default:
      return state
  }
}

export default Reducer
