export default class Select{
  constructor(element){
  this.selementElement = element
  this.custom=document.createElement('div')
  this.label=document.createElement('input')
  this.optionsbox=document.createElement('ul')
  this.optionsValue=getFormattedOptions(document.querySelectorAll('option'))
 element.style.display='none'
  setUpEle(this)
  element.after(this.custom)
  this.cosLIST
  this.i= 0
  this.searchsStream=""
}
get selectedEL(){
  return  this.optionsValue.find(obj=> obj.selected).label
}

 addClicked(e){
  if ( this.cosLIST.some((el)=>el.classList.contains('selected')))
    {
    const old= this.cosLIST.find((el)=>el.classList.contains('selected'))
    removeSelect(old)
/*     old.classList.remove('selected') */
  }

   /*  e.target.classList.add('selected') */
    addSelect(e.target)
    this.label.value=this.cosLIST[this.i].textContent

    this.i=this.cosLIST.findIndex((el)=>el.classList.contains('selected'))
    log(this.i)
/*     this.label.value=e.target.value
 */    this.optionsbox.classList.remove('show')
  }
  keySelected(e){
   switch (e.code){
    case 'Enter':this.optionsbox.classList.toggle('show')
    break
   case 'ArrowDown': {
  /*   this.optionsbox.scrollTop += scrollAmount; */

      if (this.cosLIST[this.i-1])
        {
        /* this.cosLIST[this.i-1].classList.remove('selected'); */
        removeSelect(this.cosLIST[this.i-1])

      }
/*         this.cosLIST[this.i].classList.add('selected');
 */       addSelect(this.cosLIST[this.i])
 this.cosLIST[this.i].scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      this.label.value=this.cosLIST[this.i].textContent
      this.i+1>=this.cosLIST.length?this.i=0:this.i++
      log(this.i)

    }
    break
    case 'ArrowUp':{
    if (this.cosLIST[this.i-1]) {
     /*  this.cosLIST[this.i].classList.remove('selected'); */
     removeSelect(this.cosLIST[this.i-1])

      this.i--
      /*   this.cosLIST[this.i].classList.add('selected') */
        addSelect( this.cosLIST[this.i])
        this.label.value=this.cosLIST[this.i].textContent

      }
        
      else{
        this.cosLIST[0].classList.add('selected');
        addSelect( this.cosLIST[0])
      }
      this.cosLIST[this.i].scrollIntoView({ block: 'nearest', behavior: 'smooth' })
      
  }
  break
  default:{
    this.optionsbox.classList.add('show')

    e.key=='Backspace'?this.searchsStream=this.searchsStream.slice(0,-1):this.searchsStream +=e.key

    log(this.searchsStream)

      const ValueOfsearched=this.optionsValue.find(obj=>obj.label.toLowerCase().startsWith(this.searchsStream))
     /*  this.cosLIST.forEach(el=>el.classList.remove('selected')) */
     this.cosLIST.forEach(el=>removeSelect(el)) 
      this.cosLIST.find(el=>el.dataset.value==ValueOfsearched.value).classList.add('selected'); 

  }
  break
  }
  
}

}
function removeSelect(el){
  el.classList.remove('selected')
}
function addSelect(el){
  el.classList.add('selected')
}

function setUpEle(select){
  select.custom.classList.add('custom-select-container')

/*   select.label.classList.add('custom-select-label')
 */  select.label.id='custom-select-label'
 select.label.type='text'
select.custom.append(select.label)
  select.label.value=select.selectedEL
/*   select.label.tabIndex=0
 */  select.label.addEventListener('click', ()=>{
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