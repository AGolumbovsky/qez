const initState = {
  options: {
    loading: false
  },
  questions: [],
  questionsCount: 0,
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
          // ...userAnswers, 
          
        }
      }

    default:
      return state
  }
}

export default Reducer
