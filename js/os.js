define(['basic'],function (basic) {
    var sendAjax = function (user_id) {
        var user={
            user_id: user_id
        };
        alert(basic.method.POST)
        var settings = {
            "url": basic.url + "users/info/"+user.user_id,
            "method": basic.method.GET
        }
        $.ajax(settings)
            .done(function (response) {
                $("#result").html(JSON.stringify(response));
                $("#input1").val(response.user_name);
            });
    };

    var editUser = function (user_id,user_age,user_phone,user_name) {
        var user = {
            user_id: user_id,
            user_age: user_age,
            user_name: user_name,
            user_phone: user_phone
        }
        //if(user.user_name =/[A-Za-z]/g){
        // alert("kk")
        //   return;
        //}
        if (user.user_name.length !=0) {
            alert("sRRR")
            return;
        }

        if (user.user_phone.length !=11) {
            alert("ss")
            return;
        }
        if (user.user_age.length!=2) {
            alert("www")
            return;
        }
        if (user.user_age < 18 || user.user_age > 65) {
            alert("age error")
            return;
        }
        var settings = {
            "url": baseUrl + "/info/" + user.user_id,
            "method": "PUT",
            "headers": {
                "content-type": "application/json"
            },
            "processData": false,
            "data": JSON.stringify(user)
        }
        $.ajax(settings)
            .done(function (response, status, xhr) {
                $("#result").html(JSON.stringify(response));
                $("#input1").val(response.user_name)
            })

    };
    return {
        sendAjax : sendAjax,
        editUser : editUser
    }
})


