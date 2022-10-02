const inputsNode = document.querySelectorAll('input');
const inputsContainer = document.querySelector('.container-inputs');
const result = document.querySelector('#result-sum');
const meanResult = document.querySelector('#result-mean');
const minResult = document.querySelector('#result-min');
const maxResult = document.querySelector('#result-max');
const addInputBtn = document.querySelector('#addInputBtn');

const inputs = [...inputsNode];

function calculate(inputs) {
	const allInputs = inputs.map((el) => +el.value);
	const sum = allInputs.reduce((prevVal, val) => prevVal + val);
	const mean = sum / allInputs.length || 0;
	const max = Math.max(...allInputs) || 0;
	const min = Math.min(...allInputs) || 0;
	result.innerHTML = `Suma: ${sum}, średnia: ${mean}, max: ${max}, min: ${min}`;
}

document.addEventListener('input', (e) => {
	calculate(inputs);
});

addInputBtn.addEventListener('click', (e) => {
	const newInput = document.createElement('input');
	newInput.type = 'number';
	inputsContainer.append(newInput);
	inputs.push(newInput);
});
