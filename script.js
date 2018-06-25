$(document).ready(readyNow);

//Variables
//create empty array to take in each employee monthly salary
let monthlyCosts = [];
let employeeList = [];

// create employee class
class Employee{
    constructor(firstName, lastName, employeeID, jobTitle, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeID = employeeID;
        this.jobTitle = jobTitle;
        this.annualSalary = annualSalary;
    }
}

function readyNow(){
    addEventHandlers();
}

// create functionality on submit button click
function addEventHandlers(){
    $('#submitButton').on('click', handleSubmit);
    $('#employeeTable').on('click', '#deleteButton', handleDelete);
}

function handleSubmit(){
    //get input values
    let firstNameVal = $('#firstName').val();
    let lastNameVal = $('#lastName').val();
    let employeeIDVal = $('#employeeID').val();
    let jobTitleVal = $('#jobTitle').val();
    let annualSalaryVal = $('#annualSalary').val();
    calcMonthlyCosts();   
    addRow(firstNameVal, lastNameVal, employeeIDVal, jobTitleVal, annualSalaryVal)
}

function addRow(firstNameVal, lastNameVal, employeeIDVal, jobTitleVal, annualSalaryVal){
    //create row in memory
    let $row = $('<tr id="empRow"></tr>');
    $row.append('<td>' + firstNameVal + '</td>');
    $row.append('<td>' + lastNameVal + '</td>');
    $row.append('<td>' + employeeIDVal + '</td>');
    $row.append('<td>' + jobTitleVal + '</td>');
    $row.append('<td>' + annualSalaryVal + '</td>');
    $row.append('<button id="deleteButton">Delete</button>')
    //append row to DOM
    $('#employeeTable').append($row)
    // Empty out the inputs
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}

//Calculate monthly costs
function calcMonthlyCosts(){
    //take in employee annual and divide by 12
    let empCost = $('#annualSalary').val();
    //change annual salary from a string to a number
    let var1 = parseInt(empCost);
    // divide result (annual salary) by twelve 
    //to result in monthly salary, rounded up to nearest dollar
    let empCost2 = Math.ceil(var1/12);
    //append monthly salary to array
    monthlyCosts.push(empCost2);
    //add array values
    let costArrayVal = 0;
    for (let i=0; i < monthlyCosts.length; i++){
        costArrayVal += parseInt(monthlyCosts[i]);
    }
    reportMonthlyCosts(costArrayVal);
    console.log(costArrayVal);
    
}

function reportMonthlyCosts(costArrayVal){
     //append total to #costPerMonth
    $('#costPerMonth').text('Monthly Costs: $' + costArrayVal.toFixed(2));
    if (costArrayVal > 20000.00){
        document.getElementById("costPerMonth").classList.add("overBudget");
    }
}

function handleDelete(){

    $(this).closest('tr').remove();

}