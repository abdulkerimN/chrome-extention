let myLeads = [1, 2, 3]
const inputEl = document.getElementById("input-el")
const savBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
console.log(ulEl)
    // function saveInput() {
    //     console.log("Button Clicked from onclick attribute")
    // }
    // so we dont need to add onclick attribute in html
    // the below is professional way
savBtn.addEventListener("click", function() {
    inputItem = inputEl.value
    myLeads.push(inputItem);
    // console.log(myLeads);
});


// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""
for (let i = 0; i < myLeads.length; i++) {
    // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
    // but the below ia more good
    listItems += "<li>" + myLeads[i] + "</li>";
}

ulEl.innerHTML = listItems