const num1 = parseFloat(prompt('Enter first number'))
const num2 = parseFloat(prompt('Enter second number'))
if (isNaN(num1) || isNaN(num2)){
    alert('Wrong number') 
} else {
    const sum = num1 + num2
    const dif = num1 - num2
    const mult = num1 * num2
    const div = num1 / num2

    alert(`${num1} + ${num2} = ${sum}`)
    alert(`${num1} - ${num2} = ${dif}`)
    alert(`${num1} * ${num2} = ${mult}`)
    alert(`${num1} / ${num2} = ${div}`)
}
