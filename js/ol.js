function list() {
var settings = {
    "url": "http://82.102.12.32:8080/backbone-test-server/api/users",
    "method": "GET"
}
$.ajax(settings)
    .done(function (response, status, xhr) {
        if (xhr.status == 200 && function () {
                $("#test5").click()
            })
        {
            $("#result").html(JSON.stringify(response));
        }
    })

};