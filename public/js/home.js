// const user= !{user};
// const urlName= !{urlName};
var imageUrl1='';
var imageUrl2='';
var imageUrl3='';

function sendformData(){
    var url1 = document.getElementById('url1').value;
    var url2 = document.getElementById('url2').value;
    var url3 = document.getElementById('url3').value;
    var user = $("#userEmail")[0].textContent;
    let userURLData = {
        email : user,
        url: {
            url1:url1,
            url2:url2,
            url3:url3
        }
    };
    // console.log(userURLData);

    $.ajax({
        type: "POST",
        url: "/setimagedata",
        data: userURLData,
        dataType: 'json',
        success: function() { $.ajax({
            type: "GET",
            url: "/getuser"
        });},
        error: function() { $.ajax({
            type: "GET",
            url: "/getuser"
        });}
    });
    var c = JSON.stringify(document.cookie);
    $("#c").text(c);
}
