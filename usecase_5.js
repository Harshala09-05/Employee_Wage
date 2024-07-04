const days = 20;
function calculateWage(wagePerHour, fullDayHour) {
  const dailyWage = wagePerHour * fullDayHour;
  return dailyWage;
}
function monthlyWedge(days) {
  const dailyWage = calculateWage(20, 8);
  const totalWage = dailyWage * days;

  console.log("Wages for month: " + totalWage);
}
monthlyWedge(days);
