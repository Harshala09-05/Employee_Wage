//calculate Part time wage of employee. 
function calculateWedge(wagePerHour,HoursWorked,partTimeHour) {
    
  const totalWedge = wagePerHour * (HoursWorked + partTimeHour);
    console.log("wage of employee: " + totalWedge);
};
//call function
calculateWedge(20,8,8);
