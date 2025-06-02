const newElement = document.createElement("a");

function hoverBtn2(){
      newElement.textContent = "Click me!";
      newElement.href = "https://www.example.com";
      newElement.target = "_blank"; // Open in a new tab
      newElement.style.display = "block"; // Make it a block element
      newElement.style.color = "Green"; // Set text color
      newElement.style.textDecoration = "none";
      document.body.appendChild(newElement);
}

function hoverOutBtn2() {
      newElement.style.color = "black"; // Reset text color
}