/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meter = 3.281
const feet = 1 / 3.281
const liter = 0.264
const gallon = 1 / 0.204
const kilogram = 2.204
const pound = 1 / 2.204

let inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function () {
  lengthValue()
})

function lengthValue() {
  let value = parseFloat(inputEl.value)
  if (isNaN(value)) {
    lengthEl.innerHTML = `0 meters = 0 feet | 0 feet = 0 meters`

    volumeEl.innerHTML = `0 litres = 0 gallons | 0 gallons = 0 litres`

    massEl.innerHTML = `0 kilos = 0 pounds | 0 
    pounds = 0 kilos`
  } else {
    meterValue = (value * meter).toFixed(3)
    feetValue = (value * feet).toFixed(3)
    litreValue = (value * liter).toFixed(3)
    gallonValue = (value * gallon).toFixed(3)
    kilogramValue = (value * kilogram).toFixed(3)
    poundValue = (value * pound).toFixed(3)

    lengthEl.innerHTML = `${value} meters = ${meterValue} feet | ${value} feet = ${feetValue} meters`

    volumeEl.innerHTML = `${value} litres = ${litreValue} gallons | ${value} gallons = ${gallonValue} litres`

    massEl.innerHTML = `${value} kilos = ${kilogramValue} pounds | ${value} pounds = ${poundValue} kilos`
  }
  inputEl.value = ""
}
