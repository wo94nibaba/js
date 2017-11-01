alert($);
// 底部按钮点击事件函数
$(document).ready(function(){
    // 从上一个页面获取参数
    var role=JSON.parse(sessionStorage.getItem("key"));
    var num=role.length;
    var a=0;
    var b=num;
    // btn1按钮事件函数
    $("#btn1").click(function() {
        if(b===1) {
            $("#btn2").show().text("查看法官日志");
            $(this).hide();
            $("#pic1").hide();
            $("#pic2").show();
            $("#role-num").show();
            $("#role-value").text(role[a]);
            $("#num-value2").text(a+1);
            a=a+1;
        }
        else {
            $(this).hide();
            $("#btn2").show();
            $("#pic1").hide();
            $("#pic2").show();
            $("#role-num").show();
            $("#role-value").text(role[a]);
            $("#num-value2").text(a+1);
            a=a+1;
        }
    });
    // brn2按钮事件函数
    $("#btn2").click(function() {
        if(b===1) {
            window.location.href="js4.html";
        }
        else {
            $("#btn1").show();
            $("#btn2").hide();
            $("#pic1").show();
            $("#pic2").hide();
            $("#role-num").hide();
            $("#circle-value").text(a+1);
            $("#num-value1").text(a+1);
            b=b-1;
        }
    });
});
// header部分页面跳转函数
function back() {
    window.location.href="js2.html";
}
function quit() {
    var q=confirm("确定退出本局游戏吗？");
    if(q===true) {
        window.location.href="task7-1.html";
    }
}