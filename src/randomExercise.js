const randomExercise = exercises => {
  const randNum = Math.floor(Math.random() * exercises.length)
  return { ...exercises[randNum] }
}
export default randomExercise