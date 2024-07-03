function calculateWedge(wagePerHour,HoursWorked,partTimeHour) {
    
  const totalWedge = wagePerHour * (HoursWorked + partTimeHour);
    console.log("wage of employee: " + totalWedge);
};
calculateWedge(20,8,8);
