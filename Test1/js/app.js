var arrEmployee;
$.getJSON("https://www.swollenhippo.com/getProfileDatailsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrEmployee = result;
    buildEmployeeCard();
})

var arrEmployeeContact;
$.getJSON("https://www.swollenhippo.com/getProfileDatailsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrEmployeeContact = result;
    buildEmployeeContactCard();
})

var arrPayStubs;
$.getJSON("https://www.swollenhippo.com/getPayStubsByAPIKey.php?APIKey=DuffManSays,Phrasing!", function(result){
    console.log(result);
    arrPayStubs = result;
    buildEmployeeTableRow();
})

$(document).on('click','#btnToggleContentDetails',function(){
    $('#divEmployeeCards').slideToggle();
    $('#divEmployeeCards').slideToggle();
})

function buildEmployeeCard(){
    $.each(arrEmployee,function(i,person){
        let strHTML = '<div class="card mt-1 col-md-5 offset-1 ">';
        strHTML += '<div class="row g-0">';
        strHTML += '<div class="col-md-4 mt-2 mr-2">';
        strHTML += '<img src="images/archer.jpg" alt=Profile Image';
        strHTML += 'class="img-fluid rounded-circle"';
        strHTML += '/>';
        strHTML += '</div>';
        strHTML += '<div class="card-body">';
        strHTML += '<h3 class="ml-3"><a href="mailto:' + person.Email + '" class="aEmail text-blue">' + person.FirstName + ' ' + person.LastName + '<a/></h3>';
        strHTML += '<h4 class="ml-3">Code Name: ' + person.CodeName +'</h4>';
        strHTML += '<h4 class="ml-3">Billing Agency: ' + person.Agency +'</h4>';
        strHTML += '<h4 class="ml-3">Position: ' + person.Job +'</h4>';
        strHTML += '<h4 class="ml-3">Hire Date: ' + person.HireDate +'</h4>';

        strHTML += '</div>';
        strHTML += '</div>';
        strHTML += '<button class="btn mt-1 btn-primary btn-block btnToggleContentDetails btn-center btn-sm">Toggle Content Details</button>'
        strHTML += '</div>';


        $('#divEmployeeCards').append(strHTML);
        
        
    })
}


function buildEmployeeContactCard(){
    $.each(arrEmployeeContact,function(i,person){
        let strContactHTML = '<div class="card bg-dark text-black mt-1 col-md-3 offset-1">';
        strContactHTML += '<h5 class="mt-2">Email: <a href="mailto:' + person.Email + '" class="aEmail text-white">'  + person.Email + '</a></h3>';
        strContactHTML += '<h5 class="">Phone: <a href="tel:' + person.Phone + '" class="aPhone text-white">'  + person.Phone +'</a></h4>';
        strContactHTML += '<h5 class="mt-2">Street Address: ' + person.Street1 +'</h4>';
        strContactHTML += '<h5 class="">City: ' + person.City +'</h4>';
        strContactHTML += '<h5 class="">State: ' + person.State +'</h4>';
        strContactHTML += '<h5 class="">Zip: ' + person.ZIP +'</h4>';
        strContactHTML += '<h5 class="mt-2">Emergency Contact: ' + person.EContact +'</h4>';
        strContactHTML += '<h5 class="">Phone: <a href="tel:' + person.EContactNumber + '" class="aNumber text-white">'  + person.EContactNumber +'</a></h4>';
        strContactHTML += '</div>';
        strContactHTML += '</div>';

        $('#divEmployeeCards').append(strContactHTML);
    })
}


function buildEmployeeTableRow(){
    $.each(arrPayStubs,function(i,person){
        $('#tblEmployees tbody').append('<tr><td>' + person.Month + '</td><td>' + person.Year + '</td><td>' + person.Sales + '</td><td>' + person.Hours + '</td><td>' + person.Rate + '</td><td>' + person.CommissionRate + '</td><td>' + ((person.Hours * person.Rate) + (person.CommissionRate * person.Sales)) +'</td><tr>');
    })

    $('#tblEmployees').DataTable();
}