//Get input
var input = document.querySelector('input');

//Listen for enter key on input field
input.addEventListener('keydown', function(event){
  var userInput = input.value;
  var greeting = document.querySelector('.col-md-6');
  var p = document.createElement('p');

//If enter key is pressed
  if(event.key === 'Enter') {
    if (userInput.length > 0) {
    p.innerText = `Hello ${userInput}, nice to meet you!`;
    greeting.appendChild(p);
  } else {
    p.innerText = `No name? It is still nice to meet you!`;
    greeting.appendChild(p);
  }
    event.preventDefault();

  //Clear input field
  input.value ='';
  }
}, false);
