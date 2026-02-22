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

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
}