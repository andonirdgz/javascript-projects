const initialResult = 0
let result = initialResult

function getUserInput() {
  return parseInt(userInput.value)
}

function createAndWriteOutput(operator, previousResult, number) {
  const previousCalculation = `${previousResult} ${operator} ${number}`
  outputResult(result, previousCalculation)
}

function add() {
  const input = getUserInput()
  const previousResult = result

  result = result + input

  createAndWriteOutput('+', previousResult, input)
}

function substract() {
  const input = getUserInput()
  const previousResult = result

  result = result - input

  createAndWriteOutput('-', previousResult, input)
}

function multiply() {
  const input = getUserInput()
  const previousResult = result

  result = result * input

  createAndWriteOutput('*', previousResult, input)
}

function divide() {
  const input = getUserInput()
  const previousResult = result

  result = result / input

  createAndWriteOutput('/', previousResult, input)
}

addBtn.addEventListener('click', add)
subtractBtn.addEventListener('click', substract)
multiplyBtn.addEventListener('click', multiply)
divideBtn.addEventListener('click', divide)
