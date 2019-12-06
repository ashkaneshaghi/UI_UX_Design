"use strict";

// Function to for getElementById
function $(id) {
  return document.getElementById(id);
}

var name = "Ashkan Es Haghi";

// Placing Hello World in div in index.html
$("root").textContent = "Hello World! My name is " + name;