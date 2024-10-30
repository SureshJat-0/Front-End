const BaseUrl = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/";
let dropdowns = document.querySelectorAll(".select-container select");
let fromFlag = document.querySelector(".from img");
let toFlag = document.querySelector(".to img");
let fromSelect = document.querySelector(".from select");
let toSelect = document.querySelector(".to select");
let cnvBtn = document.querySelector(".btn button");
let input = document.querySelector(".input");
let output = document.querySelector(".output");
let inputVal = 100;

// Adding all options of codes.js in 'From' and 'To' select
for (let select of dropdowns) {
    for (currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);

        if (currCode === "USD" && select.name === "from") {
            newOption.selected = true;
        } else if (currCode === "INR" && select.name === "to") {
            newOption.selected = true;
        }
    }
    // Changing flag when option is chenged
    select.addEventListener("change", (evt) => {
        let element = evt.target;
        let currCode = element.value;
        let countryCode = countryList[currCode];

        let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
        if (select.name === 'from') {
            fromFlag.src = newSrc;
        } else if (select.name === "to") {
            toFlag.src = newSrc;
        }
    });
}
// Update
let getRes = async () => {
    let fromCurr = fromSelect.value.toLowerCase();
    let toCurr = toSelect.value.toLowerCase();
    let response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr}.json`);
    let data = await response.json();
    // Getting Exchange Rate
    let rate = data[fromCurr][toCurr];
    let result = inputVal * rate;
    // Setting output
    if (result < 0) {
        output.innerText = "Enter Positive Number!";
    } else {
        output.innerText = result;
    }
}

// Getting value of input field
input.addEventListener("change", (evt) => {
    inputVal = evt.target.value;
});

// Convert Button
cnvBtn.addEventListener("click", () => {
    // Getting result
    getRes();
});

// First time when window is loaded 
window.addEventListener("load", () => {
    getRes();
});
