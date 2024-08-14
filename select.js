export default class Select{
  constructor(element){
  this.selementElement = element
  this.custom=document.createElement('div')
  this.label=document.createElement('span')
  this.optionsbox=document.createElement('ul')
  this.optionsValue=getFormattedOptions(document.querySelectorAll('option'))
 
  setUpEle(this)
  element.after(this.custom)
}
get selectedEL(){
  return  this.optionsValue.find(el=> el.selected)
}
}
function setUpEle(select){
  select.custom.classList.add('custom-select-container')

  select.label.classList.add('custom-select-label')
  select.custom.append(select.label)
  select.label.textContent=select.selectedEL.label

  select.optionsbox.classList.add('custom-select-optionsbox')
  select.custom.append(select.optionsbox)

 select.optionsValue.forEach(el => {
 const cosOption=document.createElement('li')
 cosOption.classList.add('custom-select-option')
 cosOption.textContent=el.label
 cosOption.dataset.value=el.value 
 cosOption.classList.toggle('selected' ,el.selected)

  select.optionsbox.append(cosOption) 
})
}
function getFormattedOptions(optionsList){
 return [...optionsList].map(el=>{
   return {
    value:el.value,
    label:el.label,
    selected:el.selected,
    element:el
   }
 }
)
}