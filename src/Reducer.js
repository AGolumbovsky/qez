const initState = {
  options: {
    loading: false
  },
  questions: [],
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
      }

    default:
      return state
  }
}

export default Reducer
