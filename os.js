$(function () {


    alert("abas");
});

function sendAjax() {
    var user={
        user_id: $("#input").val()
    };

    var settings = {
        "url": "http://82.102.12.32:8080/backbone-test-server/api/users/info/"+user.user_id,
        "method": "GET"
    }
    $.ajax(settings)
        .done(function (response) {
            $("#result").html(JSON.stringify(response));
            $("#input1").val(response.user_name);
        });
}

function editUser() {
    var user={
        user_id: $("#input").val(),
        user_age: $("#input_age").val(),
        user_name: $("#input_name").val(),
        user_phone: $("#input_phone").val()
    };

    var settings = {
        "url": "http://82.102.12.32:8080/backbone-test-server/api/users/info/"+user.user_id,
        "method": "PUT",
        "headers": {
            "content-type":"application/json"
        },
        "processData": false,
        "data": JSON.stringify(user)
    }
    $.ajax(settings)
        .done(function (response,status,xhr) {
            $("#result").html(JSON.stringify(response));
            $("#input1").val(response.user_name);
        });
}


