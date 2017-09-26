function delUser() {
    var user_id = $("#input").val();
    require(['od'], function (delUserFunction) {
        delUserFunction(user_id);
    });
}
function sendAjax() {
    var user_id = $("#input").val();
    require(['os'], function (os) {
        os.sendAjax(user_id);
    });
}
function addUser() {
         var user_age= $("#input_age").val();
         var user_phone= $("#input_phone").val();
         var user_name=$("#user_name").val();
        require(['op'],function (op) {
            op.adduser(user_age);
            op.adduser(user_name);
            op.adduser(user_phone);
        })
    };