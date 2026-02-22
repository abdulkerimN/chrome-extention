let savBtn = document.getElementById("input-btn");

// function saveInput() {
//     console.log("Button Clicked from onclick attribute")
// }
// so we dont need to add onclick attribute in html
// the below is professional way
savBtn.addEventListener("click", function() {
    console.log("Button Clicked from addEventListener");
});