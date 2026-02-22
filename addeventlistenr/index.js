// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box
// 3. Log out "I want to open the box!" when it's clickedlet theBox = document.getElementById("box")

theBox.addEventListener("click", function() {
    alert("I want to open the box!");
});