/* Your Code Here */

function createEmployeeRecord(employeeDetails){
return {firstName : employeeDetails[0], familyName : employeeDetails[1], title : employeeDetails[2],
     payPerHour : employeeDetails[3], timeInEvents : [], timeOutEvents : [] }
}

function createEmployeeRecords(arrayOfEmployeesArray){
    let employeeRecord = [];
    arrayOfEmployeesArray.forEach(employee => {  employeeRecord.push(createEmployeeRecord(employee)) })
    return employeeRecord
}

function createTimeInEvent(date){
   let dateHour = date.split(' ')
    let timeIn = {
        type : "TimeIn",
        hour : +dateHour[1],
        date : dateHour[0]
    }
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(date){
    let dateHour = date.split(' ')
     let timeOut = {
         type : "TimeOut",
         hour : +dateHour[1],
         date : dateHour[0]
     }
     this.timeOutEvents.push(timeOut)
     return this
 }



function hoursWorkedOnDate(date) {
    let timeIn = this.timeInEvents.filter(day => (day.date === date))
    let timeOut = this.timeOutEvents.filter(day =>(day.date === date)) 
    for (let i = 0; i < timeIn.length; i++) {
        return (timeOut[i].hour - timeIn[i].hour)/100
    }
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour; 
}

function findEmployeeByFirstName(employeeArray, firstName) {
    let employee = employeeArray.find(record => record.firstName === firstName)
    return employee
}


function calculatePayroll(arrayPay) {
    let employeeArray = arrayPay.reduce((acumulator, pay)=>{
        return acumulator + allWagesFor.call(pay)
    },0)
   return employeeArray
}


/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

