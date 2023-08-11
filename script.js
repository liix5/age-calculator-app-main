let outYear = document.getElementById('ageyears')
let outMonth = document.getElementById('agemonths')
let outDay = document.getElementById('agedays')

let inYear = document.getElementById('year')
let inMonth = (document.getElementById('month'))
let inDay = document.getElementById('day')

let Yearup = document.getElementById('yearup')
let Monthup = document.getElementById('monthup')
let Dayup = document.getElementById('dayup')

let errorDiv = document.getElementById('error')

let inputf = document.querySelectorAll('input')



let now = new Date()
let birth = new Date()


let ageyear =0 
let agemonth =0
let ageday = 0
let therty = ['4','6','9','11']
let thertyone = ['1','3','5','7','8','10','12']
let twenty = ['2']

function toEnglishNumber(strNum) {
  var ar = '٠١٢٣٤٥٦٧٨٩'.split('');
  var en = '0123456789'.split('');
  strNum = strNum.replace(/[٠١٢٣٤٥٦٧٨٩]/g, x => en[ar.indexOf(x)]);
  strNum = strNum.replace(/[^\d]/g, '');
  return strNum
}

toEnglishNumber('٢٠٠٣')

let count=()=>{
 
  let inyear= inYear.value
  let inmonth= inMonth.value
  let inday = inDay.value

  
  inyear=toEnglishNumber(inyear)
  inmonth = toEnglishNumber(inmonth)
  inday = toEnglishNumber(inday)
  
 
 
 birth.setFullYear((inyear), (inmonth), (inday))

 let ageyear = now.getFullYear()-(birth.getFullYear())
 let agemonth = now.getMonth()-(birth.getMonth()-1)
 let ageday = now.getDate()-(birth.getDate())

 


 
//لاني حاطه شرط على اذا كان الشهر مساوي لشهرنا ف ماله داعي نزيد الشهور الحاليه واحد
//اذا كان شهر ميلادك باقي ما جا فما كملت السنه ف ننقص من السنوات ١
 if(now.getMonth() < birth.getMonth()){
  ageyear--
  agemonth = (12-birth.getMonth()) + (now.getMonth())
 }


 //start counting days from today 
 if (birth.getDate() > now.getDate()) {
  ageday = (30-birth.getDate()) + now.getDate()
 }else if (birth.getMonth()>now.getMonth()) {
  //if your birthday has come and your birthday month did not 
  agemonth++
 }


 //if you were born today you lived 0 days
 if(birth.getDate()== now.getDate()){
  ageday = 0
 }

 //if you were born early this month you have become a year older and you have lived 0 months
 if (birth.getMonth()-1 == now.getMonth()&& now.getDate()>=birth.getDate()) {
  agemonth = 0
  ageyear ++
 }
 

 
 let growy=0
 let growd=0
 let growm=0

 let counterY = setInterval (upanim=()=>{
   growy+=1
   outYear.innerText = growy

  if(ageyear == growy || ageyear==0){
    clearInterval(counterY)
    outYear.innerText=ageyear
  }
 },50)

 let counterM = setInterval (upanim=()=>{
   growm+=1
   outMonth.innerText = growm

  if(agemonth == growm || agemonth == 0){
    clearInterval(counterM)
    outMonth.innerText = agemonth
  }
 },50)

 let counterD = setInterval (upanim=()=>{
   growd+=1
   outDay.innerText = growd

  if(ageday == growd || ageday==0){
    clearInterval(counterD)
    outDay.innerText=ageday
  }
 },50)
 

}









let errors=()=>{
let err= false



let inyear=inYear.value
let inmonth= inMonth.value
let inday = inDay.value


inyear=toEnglishNumber(inyear)
inmonth = toEnglishNumber(inmonth)
inday = toEnglishNumber(inday)


if(inmonth == '' || inmonth =="0" ||inmonth > 12 || isNaN(inmonth) ){
  inMonth.classList.add('inerror')
 Monthup.classList.add('worderror')

 outDay.innerText = '--'
 outYear.innerText = '--'
 outMonth.innerText = '--'

 err = true

}else{
  Monthup.classList.remove('worderror')
  inMonth.classList.remove('inerror')
  errorDiv.innerText=' '
  
}



if(inyear == '' || inyear.length > 4 ||  inyear > now.getFullYear() || 1900>inyear || isNaN(inyear)){
  inYear.classList.add('inerror')
 Yearup.classList.add('worderror')

 outDay.innerText = '--'
 outYear.innerText = '--'
 outMonth.innerText = '--'

 err = true

}else{
  Yearup.classList.remove('worderror')
  inYear.classList.remove('inerror')
}



if(inday == '' || inday.length > 2 ||inday > 31 || isNaN(inday)){
  inDay.classList.add('inerror')
  Dayup.classList.add('worderror')

  outDay.innerText = '--'
  outYear.innerText = '--'
  outMonth.innerText = '--'

  err = true

 
}else{
  Dayup.classList.remove('worderror')
  inDay.classList.remove('inerror')
}



if((inday>28 && twenty.includes(inmonth))||(inday>30 && therty.includes(inmonth)) ){
  inDay.classList.add('inerror')
  Dayup.classList.add('worderror')
  inMonth.classList.add('inerror')
  Monthup.classList.add('worderror')

  outDay.innerText = '--'
 outYear.innerText = '--'
 outMonth.innerText = '--'

 err = true
}

//run the count function only if there is no error

if(err){
  errorDiv.innerText='Invalid date'
}else{
  errorDiv.innerText=' '
  count();
}

}



let lived=()=>{
  
  errors();
}

document.addEventListener('keydown',(e)=>{
  if(e.key=='Enter'){
    errors()
  }
})