function calculateWedge(wagePerHour, fullDayHour) {
  const dailyWage = wagePerHour * fullDayHour;
  console.log(" wage of employee is: " + dailyWage);
}

function partTimeWege(wagePerHour, fullDayHour, partTimeHour) {
  const totalWedge = wagePerHour * (fullDayHour + partTimeHour);
  console.log("wage of employee: " + totalWedge);
}

let wage;
let type = "partTime";
switch (type) {
  case "fulltime":
    calculateWedge(20, 8);

    break;
  case "partTime":
    partTimeWege(20, 8, 8);

    break;
  default:
    wage = 0;
    console.log("unknown employee");
}
