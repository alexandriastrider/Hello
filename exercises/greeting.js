var name = prompt("Hi there! What's your name?");
var output = document.querySelector('#greeting');
output.innerHTML = "<p>Thanks for visiting, " + name + ".</p>";
var name = prompt("Hi there! What's your name?");
var output = document.querySelector('#greeting');
output.textContent = "Thanks for visiting, " + name + ".";
