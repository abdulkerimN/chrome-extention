const purpleFlower = document.getElementById("container");
const thankPa = document.getElementById("thanks")
    // i make the below long code but not good
    // let text = purpleFlower.textContent = "Buy !"
    // purpleFlower.innerHTML = "<button>" + text + "</button>"

// i can write it like
purpleFlower.innerHTML = "<button onclick='buy()'>Bye!</button>";


// the below code works after creating p element in html
purpleFlower.addEventListener("click", function() {
    thankPa.textContent = "shukren"
})

// without p elelment

function buy() {
    container.innerHTML += "<p>peace</p>"
}