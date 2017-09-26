define('[basic]',function(basic) {
    var op = function (user_age,user_name,user_phone) {
        var user={
        user_age:user_age,
        user_name:user_name,
        user_phone:user_phone
        }
    };
        if (user.user_phone.length != 11) {
            alert("ss")
            return;
        }
        if (user.user_age.length != 2) {
            alert("phineeeee")
            return;
        }
        if (user.user_age < 18 || user.user_age > 65) {
            alert("age error")
            return;
        }
        var settings = {
            "url": basic.url + "/users/info",
            "method": basic.method.POST,
            "headers": {
                "content-type": "application/json"
            },
            "processData": false,
            "data": JSON.stringify(user)
        }
        $.ajax(settings)
            .done(function (response, status, xhr) {
            });
        return {
        adduser:adduser
        }
})

