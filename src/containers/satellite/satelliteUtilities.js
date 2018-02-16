function updateHistory(data){
  // keep last 10 minutes
  var d = new Date(data.position.last_updated)
  const x = d.getHours() +":"+ d.getMinutes() +":"+ d.getSeconds()
  const y = data.position.altitude
  data.position.x = x;
  data.position.y = y;
  data.history.push( data.position )
  if(data.history.length >= 60) {
    data.history.shift();
  }
  return data
}

function updateAverage(data){
  const len = data.history.length;
  const start = (len > 6) ?  len - 6 : 0;
  let count = 0
  for(let j = start; j < len; j++){
    count += data.history[j].altitude
  }
  data.average = (len > 6) ? (count / 6) : (count / len)
  return data
}

function pushAlert(data){
  if(data.history.length > 6){
    if(data.average >= 160 && data.orbit === false) {
      data.orbit = true;
      data.alert = { message: "Sustained Low Earth Orbit Resumed.", date: new Date() }
      return data
    }
    if(data.average < 160 && data.orbit === true){
      data.orbit = false;
      data.alert = { message: "WARNING: RAPID ORBITAL DECAY IMMINENT!", date: new Date() }
      return data
    }
  }
  return false
}


export const modifyHistory = input => updateHistory(input)
export const checkAverage = input => updateAverage(input)
export const checkAlert = input => pushAlert(input)
