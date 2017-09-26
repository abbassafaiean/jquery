define(function () {
    var delUser = function (user_id) {
        var user = {
            user_id: user_id
        };
        var settings = {
            "url": "http://82.102.12.32:8080/backbone-test-server/api/users/info/"+ user.user_id,
            "method": "DELETE"
        }
        $.ajax(settings)
            .done(function (response, status, xhr) {
                if (xhr.status == 200 && function () {
                        $("#test3").click()
                    })
                {
                    alert("okdel");
                }
            })
    }

    return delUser;
});
