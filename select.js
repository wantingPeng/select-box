export default class Select{
  constructor(element){
  this.selementElement = element
  this.custom=document.createElement('div')
  this.label=document.createElement('span')
  this.optionsbox=document.createElement('ul')
  this.optionsValue=getFormattedOptions(document.querySelectorAll('option'))
 element.style.display='none'
  setUpEle(this)
  element.after(this.custom)
  this.cosLIST
  
}
get selectedEL(){
  return  this.optionsValue.find(obj=> obj.selected).label
}
 addClicked(e){
  if ( this.cosLIST.some((el)=>el.classList.contains('selected')))
    {
    const old= this.cosLIST.find((el)=>el.classList.contains('selected'))
    old.classList.remove('selected')
  }
    e.target.classList.add('selected')
    this.label.textContent=e.target.textContent
    this.optionsbox.classList.remove('show')
  }

  keySelected(e){
    log('sssssssss ')
log(e.code)
  }
}



function setUpEle(select){
  select.custom.classList.add('custom-select-container')

  select.label.classList.add('custom-select-label')
  select.custom.append(select.label)
  select.label.textContent=select.selectedEL
  select.label.tabIndex=0
  select.label.addEventListener('click', ()=>{
    select.optionsbox.classList.toggle('show')
  }
)
select.label.addEventListener('keydown',(e)=>{
  log('sssssssss ')
  select.keySelected(e)})

 select.cosLIST=select.optionsValue.map(obj => {
  const cosOption=document.createElement('li')
  cosOption.classList.add('custom-select-option')
  cosOption.textContent=obj.label
  cosOption.dataset.value=obj.value 
 /*  cosOption.classList.toggle('selected' ,obj.selected) */
   select.optionsbox.append(cosOption) 
   return cosOption
 }
)
  select.optionsbox.classList.add('custom-select-optionsbox')
  select.custom.append(select.optionsbox)
 select.optionsbox.addEventListener('click',(e)=>{select.addClicked(e)})


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