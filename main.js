import Select from "./select.js" 
globalThis.log=console.log

const selectElements = document.querySelectorAll("[data-custom]")
log(selectElements)
selectElements.forEach(selectElement => {
log(new Select(selectElement))
  
})