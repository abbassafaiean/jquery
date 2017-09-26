var Student;
Student = Backbone.Model.extend({
    getLevel: function () {
        var age = this.get("age");
        var level = age - 6;
        return level;
    }
});
function registerStudent() {
    var pattern=/[ac]/i;

    var student= new Student({
        name:$("#name").val(),
        family:$("#family").val(),
        age: $("#age").val(),
    });
   var nage=$("#age").val();
    if (nage < 7) {
        alert("boro shireto bokhor");
        return;
    }
    else{
        alert("Tabrik, shoma ba mofahiat sabt shodeid.\nkelas shoma : " + student.getLevel());
        return;
    }
}