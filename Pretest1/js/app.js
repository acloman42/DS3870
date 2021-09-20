var arrEmployee;
$.getJSON("https://www.swollenhippo.com/getStaffByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrEmployee = result;
    buildEmployeeCard();
})

function buildEmployeeCard(){
    $.each(arrEmployee,function(i,person){
        let strHTML = '<div class="card col-3 mt-3">';
        strHTML += '<img src="images/profile.png" alt="Profile Image" style="margin:auto; max-width:100%;">';
        strHTML += '<h3 class="text-center">' + person.FirstName + ' ' + person.LastName + '</h3>';
        strHTML += '<h4 class="text-center">' + person.Title +'</h4>';
        strHTML += '<h4 class="mt-3">Contact Details</h4>';
        strHTML += '<p>Phone Number: <a href="call:' + person.HomePhone + '">' + person.HomePhone + '</a></p>';
        strHTML += '<p>Email: <a href="mailto:' + person.Email + '">' + person.Email + '</a></p>';
        strHTML += '<h4 class="mt-3">Address</h4>';
        strHTML += '<p>' + person.StreetAddress1 + '</p>';
        strHTML += '<p>' + person.City + ', ' + person.State + '</p>';
        strHTML += '<h4 class="mt-3">Pay Details</h4>';
        strHTML += '<p id=txtHourlyWage>Pay Rate: ' + person.HourlyWage + '</p>';
        strHTML += '<p id=txtHours>Hours Worked: ' + person.Hours + '</p>';
        strHTML += '<p id=txtTaxRate> Tax Rate: ' + person.TaxRate + '</p>';
        strHTML += '<div class="form-group">';
        strHTML += '<label class="mr-2">Goal Pay:</label>';
        strHTML += '<input class="txtGoalPay" enabled>';
        strHTML += '<button class="btn btn-primary btn-block btnFindHoursForGoal btn-center btn-sm">Find Hours for Goal</button>'
        strHTML += '</div>';
        strHTML += '</div>';

        $('#divEmployeeCards').append(strHTML);
        $('#tblEmployees tbody').append('<tr><td>' + person.FirstName + '</td><td>' + person.LastName + '</td></tr>');
    })
    $('#tblEmployees').DataTable();
}

$(document).on('click','.btnFindHoursForGoal',function(){
    let decHours = $(this).closest('.card').find('.txtHours').val();
    console.log(decHours);
    let decHourlyWage = $(this).closest('.card').find('.txtHourlyWage').text().split(': ')[1];
    console.log(decHourlyWage);
    $(this).closest('.card').find('.txtGoalPay').val(decHours * decHourlyWage);
});