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
  this.i= 0

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
    this.label.textContent=this.cosLIST[this.i].textContent

    this.i=this.cosLIST.findIndex((el)=>el.classList.contains('selected'))
    log(this.i)
    this.label.textContent=e.target.textContent
    this.optionsbox.classList.remove('show')
  }
  keySelected(e){
    log(e.code)
    const scrollAmount = 13;
   switch (e.code){
    case 'Enter':this.optionsbox.classList.toggle('show')
    break
   case 'ArrowDown': {
    log(e.code)
  /*   this.optionsbox.scrollTop += scrollAmount; */

      if (this.cosLIST[this.i-1]){
        this.cosLIST[this.i-1].classList.remove('selected');}
        this.cosLIST[this.i].classList.add('selected');
        this.cosLIST[this.i].scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      this.label.textContent=this.cosLIST[this.i].textContent
      this.i+1>=this.cosLIST.length?this.i=0:this.i++
      log(this.i)

    }
    break
    case 'ArrowUp':{
     /*  this.optionsbox.scrollTop -= scrollAmount; */
     this.optionsbox.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    if (this.cosLIST[this.i-1]) {
      this.cosLIST[this.i].classList.remove('selected');
      this.i--
        this.cosLIST[this.i].classList.add('selected')
        this.cosLIST[this.i].scrollIntoView({ block: 'nearst', behavior: 'smooth' })
      }
        
      else{
        this.cosLIST[0].classList.add('selected');
      }
   
      
  }
  break
  }
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