<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Greeter!</title>
</head>
<body>


  var name = prompt("Hi there! What's your name?");
  var output = document.querySelector('#greeting');
output.textContent = "Thanks for visiting, " + name + ".</p>";

var firstName = prompt("Hi there! What's your first name?");
var lastName = prompt("What's your last name?");
var output = document.querySelector('#greeting');

if(firstName && lastName){
   output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + ".</p>";
} else {
   output.innerHTML = "<p>Please tell us your first and last names!</p>";
}

var firstName = prompt("Hi there! What's your first name?") || "Visitor";
var lastName = prompt("What's your last name?") || "McDefaultson";
var output = document.querySelector('#greeting');

output.innerHTML = "<p>Thanks for visiting, " + firstName + " " + lastName + ".</p>";

<script type="text/javascript" src="greeting.js"></script>

</body>
</html>
