console.log("Hello");
var response = prompt("You walk into a room with two doors. Type 'Door 1' to enter the first door, type 'Door 2' to enter the second door.");

if(response === 'Door 1'){
  response = prompt("You have entered a beautiful forest full of fairies.");
} else if (response === "Door 2"){
  response = prompt("You have entered into the beach full of mermaids.");
} else {
  alert("Please type in a valid input! Refresh the page to try again.");
}

var response = prompt("In the forest full of fairies, theres two big trees. Type 'Tree 1' to enter the first tree, type 'Tree 2' to enter the second tree.");

if(response === 'Tree 1'){
  response = prompt("You have chosen the wishing fairy tree.You are granted one wish!");
} else if (response === 'Tree 2'){
  response = prompt("You have chosen the evil fairy tree. You have been turned into a toadstool!");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
  }

  var response = prompt("At the beach, theres two mermaids. Type 'Blue' to go to the blue mermaid, type 'Red' to go to the red mermaid.");

  if(response === 'Blue'){
    response = prompt("You have chosen to follow the blue mermaid and she gives you your very own mermaid tail.");
  } else if (response === 'Red'){
    response = prompt("You have chosen to follow the red mermaid and she is looking to take you as her prisoner.");
  } else {
    alert("Please type in a valid input! Refresh the page to try again.");
  }
