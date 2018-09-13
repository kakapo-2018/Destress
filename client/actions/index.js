let nextCaptionId = 0

export const addCaption = (word) => {
  return {
    type: 'ADD_WORD',
    id: nextCaptionId++,
    word
  }
}
