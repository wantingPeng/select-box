import Select from "./select.js"  
globalThis.log=console.log
const selectElements = document.querySelectorAll("[data-custom]")
const option = document.querySelectorAll("option")
log(option[1].selected)
log(selectElements)

log(selectElements)
selectElements.forEach(selectElement => {
log(new Select(selectElement))

})