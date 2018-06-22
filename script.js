$(document).ready(readyNow);

//Variables

function readyNow(){
    console.log('huhu');
    addEventHandlers();
}

//Class Employee
class Employee{
    constructor(firstNameVal, lastNameVal, employeeIDVal, jobTitleVal, annualSalaryVal){
        this.firstNameVal = firstNameVal;
        this.lastNameVal = lastNameVal;
        this.employeeIDVal = employeeIDVal;
        this.jobTitleVal = jobTitleVal;
        this.annualSalaryVal = annualSalaryVal;
    }
}
function addEventHandlers(){

    $('#submitButton').on('click', handleSubmit);
    //append row to DOM
}

function handleSubmit(){
    //get input values
    let firstNameVal = $('#firstName').val();
    let lastNameVal = $('#lastName').val();
    let employeeIDVal = $('#employeeID').val();
    let jobTitleVal = $('#jobTitle').val();
    let annualSalaryVal = $('#annualSalary').val();   
    addRow(firstNameVal, lastNameVal, employeeIDVal, jobTitleVal, annualSalaryVal)
}

function addRow(firstNameVal, lastNameVal, employeeIDVal, jobTitleVal, annualSalaryVal){
    //create row in memory
    let $row = $('<tr></tr>');
    $row.append('<td>' + firstNameVal + '</td>');
    $row.append('<td>' + lastNameVal + '</td>');
    $row.append('<td>' + employeeIDVal + '</td>');
    $row.append('<td>' + jobTitleVal + '</td>');
    $row.append('<td>' + annualSalaryVal + '</td>');
    $('#employeeTable').append($row)
    $('#firstName').val('');
    $('#lastName').val('');
    $('#employeeID').val('');
    $('#jobTitle').val('');
    $('#annualSalary').val('');
}