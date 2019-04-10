
function sendformData(){

    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var pin = document.getElementById('pin').value;
    var user = $("#userEmail")[0].textContent;
    let userURLData = {
        email : user,
        address: {
            city:city,
            state:state,
            pin:pin
        }
    };
    $.ajax({
        type: "POST",
        url: "/setimagedata",
        data: userURLData,
        dataType: 'json',
        success: function() {
            alert('Address saved in cookie');
        },
        error: function() {}
    });

}
