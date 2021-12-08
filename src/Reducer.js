const initState = {
  options: {
    loading: false
  },
  questions: [],
  currentQuestion: {

  },
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
        currentQuestion: action.questions[state.questionIndex]
      }
      
    case 'CURRENT_QUESTION':
      return {
        ...state,
        // currentQuestion: state.questions[action.questionIndex]
        currentQuestion: state.questions[action.questionIndex]
      }
        
    default:
      return state
  }
}

export default Reducer
