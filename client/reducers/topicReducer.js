import topicData from '../../data/topics'

const initialState = topicData.topics
console.log("topic reducer active")

const topics = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default topics