console.log("Welcome to Employee Wage Computation Program on Master Branch");
// for checking employee present or not.
function attendence() {
  //uses random()function for random input.
  const isPresent = Math.random() ;

  if (isPresent >= 0.5) {
    console.log("Employee is present");
  } else {
    console.log("Employee is absent");
  }
}
