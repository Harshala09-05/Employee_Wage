function conditionWage() {
    let totalWage = 0;
    let wagePerHour = 20;
    let fullDayHour = 8;
    let day = 0;
    let hours = 0;



    while (day < 20 && hours <= 160) {
        
        
        let emp_check = Math.floor(Math.random() * 3);
        
    
        if (emp_check == 1) {
            hours += fullDayHour;
        } else if (emp_check == 2) {
            hours += 4;
        } else {
            hours;
        }
        
        
        day++;

        
    };
    totalWage = hours* wagePerHour;
    console.log("Total Working Days: " + day);
    console.log("Total Working Hours: " + hours);
    console.log("Total Wage: " + totalWage);
    
};
