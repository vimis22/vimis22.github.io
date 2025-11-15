// Converted from quiz.js to a simple function/hook style
export function checkAnswer(questionNumber, selectedValue) {
  if (selectedValue) {
    const correct = (questionNumber === 1 && selectedValue === '4')
      || (questionNumber === 2 && selectedValue === '8')
    if (correct) alert('This answer is right')
    else alert('This answer is wrong')
    return correct
  } else {
    alert('Please select an answer')
    return false
  }
}
