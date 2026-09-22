//Task: Write getGrade(score) that returns a letter grade: 90+ = 'A', 80-89 = 'B', 70-79 = 'C', 60-69 = 'D', below 60 = 'F'.
function getGrade(score) {
  if (score >= 90) 
    return "A - grade";
  else if (score >= 80) 
    return "B - grade";
  else if (score >= 70) 
    return "C - grade";
  else if (score >= 60) 
    return "D - grade";
  else 
    return "F - grade";
}
console.log(getGrade(95)); 
console.log(getGrade(85)); 
console.log(getGrade(72)); 
console.log(getGrade(65)); 
console.log(getGrade(40)); 