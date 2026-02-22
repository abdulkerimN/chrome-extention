let myLeads = []
const inputEl = document.getElementById("input-el")
const savBtn = document.getElementById("input-btn");

// function saveInput() {
//     console.log("Button Clicked from onclick attribute")
// }
// so we dont need to add onclick attribute in html
// the below is professional way
savBtn.addEventListener("click", function() {
    inputItem = inputEl.value
    myLeads.push(inputItem);
    console.log(myLeads);
});