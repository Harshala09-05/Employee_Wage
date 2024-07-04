class employee_wage {
    attendence() {
        const isPresent = Math.random();

        if (isPresent >= 0.5) {
            console.log("Employee is present");
        } else {
            console.log("Employee is absent");
        }
    }
    calculateWedge(wagePerHour, fullDayHour) {
        const dailyWage = wagePerHour * fullDayHour;
        console.log("Daily wage of employee is: " + dailyWage);
    }
    calculatePartTimeWedge(wagePerHour, HoursWorked, partTimeHour) {
    
        const totalWedge = wagePerHour * (HoursWorked + partTimeHour);
        console.log("wage of employee: " + totalWedge);
    };
    checkType() {
        let wage;
        let type = "fulltime";
        switch (type) {
            case "fulltime":
                this.calculateWedge(20, 8);

                break;
            case "partTime":
                this.calculatePartTimeWedge(20, 8, 8);

                break;
            default:
                wage = 0;
                console.log("unknown employee");
        }

    }
    
    monthlyWedge(wagePerHour, fullDayHour, days) {
       
        const dailyWage = this.calculateWedge(20, 8);
        const totalWage = (wagePerHour * fullDayHour) * days;
      
        console.log("Wages for month: " + totalWage);
        
    }

    conditionWage() {
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
        totalWage = hours * wagePerHour;
        console.log("Total Working Days: " + day);
        console.log("Total Working Hours: " + hours);
        console.log("Total Wage: " + totalWage);
    };

};
let employee = new employee_wage();
