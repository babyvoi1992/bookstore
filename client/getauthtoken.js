$(document).ready(function () {
    //your code here

    $("#login").click(function () {
        var user = {
            email: $("#email").val(),
            password: $("#password").val()
        }
        var jqxhr  =  $.ajax({

            url: 'http://localhost:3000/api/v1/sign_in',
            type: 'post',
            headers: { 'x-my-custom-header': 'some value' },
            crossDomain: true,
            dataType: 'json',
            data: user,

            complete: function(response)
            {
                console.log(response.getAllResponseHeaders())
            }


        });
    jqxhr.getAllResponseHeaders()

    });
});