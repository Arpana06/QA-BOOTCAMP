//Task: Write dayType(day) that takes a day name string and returns 'Weekend' for Saturday/Sunday and 'Weekday' for the rest. Use a switch statement.
function dayType(day) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "Weekend";
    default:
      return "Weekday";
  }
}
console.log(dayType("Sunday"));  
console.log(dayType("Tuesday"));