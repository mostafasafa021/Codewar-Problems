function outed(meet, boss){
  let result = 0
  meet[boss] *= 2
  for (const element of Object.values(meet)) {
    result += element
  }
  let finalResult = result / Object.values(meet).length
  if (finalResult <= 5) return "Get Out Now!"
  
  return "Nice Work Champ!"
}

console.log(outed({'tim':10, 'jim':2, 'randy':10, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':10, 'mr':10}, 'laura'))