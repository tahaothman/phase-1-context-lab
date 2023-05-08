/* Your Code Here */
function createEmployeeRecord(arr){
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents:[],
        timeOutEvents: [],
    }
}

function createEmployeeRecords(employeeData){
    return employeeData.map(createEmployeeRecord);
}

function createTimeInEvent  (dateStamp){
    let [date, hour] = dateStamp.split(' ')
  
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date,
    })
  
    return this
  }

  function createTimeOutEvent  (dateStamp){
    const [date, hour] = dateStamp.split(' ')
  
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour),
        date,
    })
  
    return this
  }

  function hoursWorkedOnDate  (date){
    let inEvent = this.timeInEvents.find(function(e){
        return e.date === date
    })
  
    let outEvent = this.timeOutEvents.find(function(e){
        return e.date === date
    })
  
    return (outEvent.hour - inEvent.hour) / 100
  }

  function wagesEarnedOnDate  (date){
    let wage = hoursWorkedOnDate.call(this, date)
        * this.payPerHour
    return parseFloat(wage.toString())
  }
  
  function findEmployeeByFirstName  (array, firstName) {
  return array.find(function(recod){
    return recod.firstName === firstName
  })
  }

  function calculatePayroll  (employeeRecords){
    return employeeRecords.reduce(function(a, b){
        return a+allWagesFor.call(b)
    },0)
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

