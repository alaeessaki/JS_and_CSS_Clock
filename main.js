var seconds, minutes, hours ;
var sec_somme = 0;
var min_somme = 0;
var hour_somme = 0;
var hour_hands = document.getElementById("hrs")
var min_hand = document.getElementById("mins")
var second_hand = document.getElementById("scs")
var isSet = false;
function Horloge(){
  var time = new Date()
  seconds = time.getSeconds()
  minutes = time.getMinutes()
  hours = time.getHours()
  Afficher(seconds,minutes,hours)
  console.log(hours + ":" + minutes + ":" + seconds)
}
function setTime(seconds, minutes, hours){
  sec_somme = 84 + seconds*6
  min_somme = 84 + minutes*6
  hour_somme = 90 + hours*30
  isSet = true;
}
setInterval(Horloge, 1000);
function Afficher(seconds,minutes,hours){
  if(isSet == false){
    setTime(seconds, minutes, hours)
  }
  if(sec_somme!=360){
    sec_somme = sec_somme + 6;
  }
  else{
    sec_somme = 0;
  }
  if(min_somme!=360){
    min_somme = min_somme + 0.1
  }
  else{
    min_somme = 0;
  }
  if(hour_somme!=360){
    hour_somme = hour_somme + (60/3600)
  }
  else{
    hour_somme = 0;
  }
  console.log(sec_somme)
  console.log(min_somme)
  console.log(hour_somme)
  hour_hands.style = "transform: rotate("+hour_somme+"deg);"
  min_hand.style = "transform: rotate("+min_somme+"deg);"
  second_hand.style = "transform: rotate("+sec_somme+"deg);"
}
console.log(isSet)