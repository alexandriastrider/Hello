var response = prompt("You walk into a room with two doors. Type 'Door 1' to enter the first door, type 'Door 2' to enter the second door.");

if(response === 'Door 1'){
  response = prompt("You have entered a beautiful forest full of fairies.");
} else if (response === "Door 2"){
  response = prompt("You have entered into the beach full of mermaids.");
} else {
  alert("Please type in a valid input! Refresh the page to try again.");
}
