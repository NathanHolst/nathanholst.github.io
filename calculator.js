div = document.createElement('div')
body = document.querySelector('body')
body.appendChild(div)

var cont = true
var num1
var num2
var operator
const rslts = [];

rsltTable = document.createElement('div')
div.appendChild(rsltTable)


while (cont) {
    num1 = prompt("Value of x", "")
    operator = prompt("operator")
    num2 = prompt("Value of y")
    if (confirm("Continue?"))
        cont = true
    else
        cont = false
    compute()
}
totRslts = []
for (const val of rslts) {
    if (isNaN(val[3])) {}
        // do nothing
    else
        totRslts.push(+val[3])
}

minRslts = Math.min(...totRslts)
maxRslts = Math.max(...totRslts)
sumRslts = 0
for (const val of totRslts) {
    sumRslts += val
}
avgRslts = sumRslts/(totRslts.length)

finalTable = document.createElement('div')
div.appendChild(finalTable)

finalTable.innerHTML = `<table><tr><th>Min</th><th>Max</th><th>Average</th><th>Total</th></tr><tr><td>${minRslts}</td><td>${maxRslts}</td><td>${+avgRslts.toFixed(2)}</td><td>${sumRslts}</td></tr></table>`

function compute(){
    let x = num1
    let y = num2
    let op = operator
    var isValid = true
    var rslt

    if (isNaN(x) || isNaN(y)) {
        // The first or second value is not a number
        rslt = "wrong input\nnumber"
        isValid = false
    }
    if (op !== "+" && op !== "-" && op !== "%" && op !== "/" && op !== "*") {
        // Operator is not supported
        rslt = "computation\nerror"
        isValid = false
    }

    if (isValid) {
        rslt = eval(x + op + y)
    }

    buildTable(x, op, y, rslt)
}

function buildTable(x, op, y, rslt) {
    let newVal = [x, op, y, rslt]
    rslts.push(newVal)
    var newTable = "<table>\n<tr><th>x</th><th>op</th><th>y</th><th>result</th></tr>\n"
    for (const value of rslts) {
        newTable = newTable + `<tr><td>${value[0]}</td><td style="background-color: #f6dcac">${value[1]}</td><td>${value[2]}</td><td>${value[3]}</td></tr>\n`
    }
    newTable = newTable + "</table>"
    rsltTable.innerHTML = newTable
}
