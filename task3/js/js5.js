$(document).ready(function() {
    // 按钮点击事件
    $(".back").click(function() {
        window.location.href="js4.html";
    });
    $(".closed").click(function() {
        var q=confirm("确定退出本局游戏吗？");
        if(q===true) {
            window.location.href="task7-1.html";
        }
    });
    $("#btn1").click(function() {
        var q=confirm("确定退出本局游戏吗？");
        if(q===true) {
            window.location.href="task7-3.html";
        }
    });
    $("#btn2").click(function() {
        window.location.href="js4.html";
    });
});