const user= !{user};
var imageUrl1='';
var imageUrl2='';
var imageUrl3='';

function sendformData(){
    var url1 = document.getElementById('url1').value;
    var url2 = document.getElementById('url2').value;
    var url3 = document.getElementById('url3').value;
    $.ajax({
        type: "POST",
        url: "/setimagedata",
        data: {'url1':url1,
            'url2':url2,
            'url3':url3},
        success: function(){},
        dataType: 'json'
    });
}
