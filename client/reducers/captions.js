const captions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CAPTION':
      return [
        ...state,
        {
          id: action.id,
          caption: action.caption
        }
      ]

    default:
      return state
  }
}

export default captions
