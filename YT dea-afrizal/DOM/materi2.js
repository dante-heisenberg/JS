// SELECTORS
const btn1 = document.getElementById('btn1'); //spesifik
const btn2 = document.querySelector('#btn2'); //lebih fleksibel



// apply styles untuk html element
btn1.style.border = 'none';
btn1.style.backgroundColor = 'red';
btn1.style.color = 'white';
btn1.style.padding = '10px 20px';
btn1.style.borderRadius = '5px';

// EVENTS 
function gantiWarna() {
      btn1.style.backgroundColor = 'blue';
      btn1.style.color = 'white';
}
const defaultColor = btn1.style.backgroundColor;

function hoverIn() {
      btn1.style.backgroundColor = 'green';
      btn1.style.color = 'white';
      const newElement = document.createElement('p');
      newElement.textContent = 'Hovering over the button!';
      body.append(newElement);
}

function hoverOut() {
      btn1.style.backgroundColor = defaultColor;
      btn1.style.color = 'white';
}