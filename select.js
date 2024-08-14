export default class Select{
  constructor(element){
  this.selementElement = element
  this.custom=document.createElement('div')
  this.label=document.createElement('span')
  this.options=document.createElement('ul')
  setUpEle(this)
  element.after(this.custom)
}
}
function setUpEle(select){
  select.custom.classList.add('custom-select-container')

  select.label.classList.add('custom-select-label')
  select.custom.append(select.label)

  select.options.classList.add('custom-select-options')
  select.custom.append(select.options)
}