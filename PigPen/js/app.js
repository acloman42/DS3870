var arrEmployees;
$.getJSON("https://www.swollenhippo.com/getEmployessByAPIKey.php?APIKey=Mickey2021!", function(result){
    console.log(result);
    arrEmployees = result;
    buildEmployeeCard();
    $.each(result,function(i,person){
        console.log(person.FirstName);
        console.log(person.FirstName + ' ' + person.LastName);
        $('#txtEmail').val(person.Email);
    })
})

function buildEmployeeCard(){

    let strHTML = '<div class="card mt-5 col-6 offset-3">';
    strHTML += '<h3 class="text-center mt-3"><a href="mailto:' + person.Email +'">John Doe</a></h3>';
    strHTML += '<h4 class="text-center">' + person.Postion +'</h4>';
    strHTML += '<h4 class="mt-3">Profile Details</h4>';
    strHTML += '<p>Hourly Rate:' + person.HourlyRate + '</p>';
    strHTML += '<p>Address: 932 Franklin Heights Drive, Winchester, TN 37398</p>';
    strHTML += '<p>Assignment: Clement Hall</p>';
    strHTML += '<div class="formgroup">';
    strHTML += '<label for="txtPayRate">Pay Rate</label>';
    strHTML += '<input id="txtPayRate">';
    strHTML += '</div>';
    strHTML += '</div>';
}

$('#btnTest').click(function() {
    const decTaxRate = .0925;
    let decHours = $('#txtHours').val();
    let decRate = $('#txtPayRate').val();
    console.log(decHours * decRate);
});
$('#cboEmployeeType').change(function() {
    if($('#cboEmployeeType').val() == 'FULL'){
        //$('#divHours').slideUp();
        //$('#divHours').css('display','none');
        $('#divHours').addClass('d-none');
    }else {
        $('#divHours').removeClass('d-none').slideDown();
    }
})

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }