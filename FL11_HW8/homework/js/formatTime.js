function formatTime(inputNumb){
let days = parseInt(inputNumb/1440);
let hours = parseInt((inputNumb - days*1440)/60);
let minutes = inputNumb - (days*1440) - (hours*60);
  let finalDate = days + " day(s) " + hours + " hour(s) " + minutes + " minute(s)";
  return finalDate;
}

formatTime();