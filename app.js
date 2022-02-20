const body = document.querySelector("#one");
let city = document.querySelector("#city");
const btnn = document.querySelector("#submit");
let deg = document.querySelector(".temprature-degree");
let desc = document.querySelector(".temprature-description");
let nameofcity = document.querySelector(".name");
let time=document.querySelector(".time");
let error_msg=document.getElementById("error");
// search.addEventListener('click' , console.log(city.value));
 btnn.addEventListener('click' , function(){
  
  if(city.value===""){
    error_msg.innerHTML="please enter city name"
    alert("plase enter city name")
  }
  
   else{
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=df8805b218019cc28ee719f8c0d9667e`)
      .then( response => response.json())
      .then(data => {
        const  degg = data['main']['temp'] ;
        const dessc =data['weather'][0]['description'];
        const  cityName = data['name']

                    
                  
        deg.innerText= `${Math.round(degg-273.15)}°C`;
        desc.innerText= dessc
        nameofcity.innerText= cityName
        error_msg.parentElement.removeChild(error_msg)
        city.value=''
      })
    }
   
 });

                        
              



var today = new Date();
const currenttime=today.getHours();
//  const currenttime=17;
                
if(currenttime>=6 && currenttime<11){
  console.log('Morning');
  body.style.backgroundColor="yellow";
  body.setAttribute("class","morning");
                 

}
else if(currenttime>=12 && currenttime<17){
  console.log("afternoon");
  body.style.backgroundColor="#8f8b66";
  body.setAttribute("class","afternoon");
}
else if(currenttime>=17 && currenttime<=18){
  console.log("evening");
  body.setAttribute("class","evening");
}
else{
  console.log("night");
  body.style.backgroundColor="black";
  body.setAttribute("class","night");
     

}    
const timer=()=>{
  setInterval(()=>{
  let presentTime=new Date().toLocaleTimeString();
  time.innerText=presentTime;
},1000);
}
timer();




