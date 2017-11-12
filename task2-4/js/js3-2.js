$(document).ready(function(){
    $(".b-box").hide();
    // 从上一个页面获取参数
    var role=JSON.parse(sessionStorage.getItem("key"));
    var num=role.length;
    var killern=sessionStorage.getItem("k");
    var peoplen=sessionStorage.getItem("p");
    // 设置角色显示和隐藏
    for(var i=1;i<=num;i++ ) {
        $("#b-box"+i).show();
    }
    for(var j=0;j<=num-1;j++) {
        $("#role"+(j+1)).text(role[j].identity);
    }
    // 按钮的点击事件
    $("#btn1").click(function() {
        window.location.href="js4-1.html";
    });
    $(".back").click(function() {
        window.location.href="js3.html";
    });
    $(".closed").click(function() {
        var q=confirm("确定退出本局游戏吗？");
        if(q===true) {
            window.location.href="task7-1.html";
        }
    });
});
