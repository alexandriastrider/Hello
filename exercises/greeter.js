<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Greeter!</title>
</head>
 <body>

  <script type="text/javascript" src="greeting.js"></script>


  var name = prompt("Hi there! What's your name?");
  var output = document.querySelector('#greeting');
output.textContent = "Thanks for visiting, " + name + ".</p>";


</body>
</html>
