const dogInput = document.querySelector("#dogs");
const catInput = document.querySelector("#cats");
const fishInput = document.querySelector("#fish");
const button = document.querySelector('button');

const submitHandle = (event) => {
  event.preventDefault(); 
}

button.addEventListener('click', submitHandle)