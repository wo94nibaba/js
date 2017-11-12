// <-----------------法官台本--------------->
$(document).ready(function() {
    // 头部按钮点击事件
    $(".back").click(function() {
        window.location.href="js3-2.html";
    });
    $(".closed").click(function() {
        var q=confirm("确定退出本局游戏吗？");
        if(q===true) {
            window.location.href="task7-1.html";
        }
    });

    // 获取角色参数
    // 角色乱序数组
    var role=JSON.parse(sessionStorage.getItem("key"));
    // 总人数
    var num=role.length;
    // 杀手人数
    var killern=JSON.parse(sessionStorage.getItem("k"));
    // 水民人数
    var peoplen=JSON.parse(sessionStorage.getItem("p"));
    // 天数
    var day=JSON.parse(sessionStorage.getItem("day"));

    var lastsel=sessionStorage.getItem("lastsel");

    var stage=document.getElementsByClassName("day-b");

    var kstyle=document.getElementsByClassName("kill");

    var cstyle=document.getElementsByClassName("ciro");
    // console.log(kstyle);
    // console.log(cstyle);
    console.log(day);

    // 选择页面渲染效果

    function write() {
        wrap=$(".main");
        for(var i=1;i<=day;i++) {
            var name1=null,name2=null,number1=null,number2=null;
            for(var j=0;j<num;j++) {
                if(role[j].date===i) {
                    if(role[j].murder==="killer") {
                        name1=role[j].identity;
                        number1=j+1;
                    }
                    else if(role[j].murder==="people") {
                        name2=role[j].identity;
                        number2=j+1;
                    }
                    else {

                    }
                }
            }
            // console.log(name1);
            // console.log(number1);
            // console.log(name2);
            // console.log(number2);
            console.log(role);
            console.log(name1);
            console.log(number1);

            if(name1===null||name1===undefined) {
                wrap.prepend(
                    '<div class="day" id="day1">' + '第' + i + '天' + '</div>' +
                    '<div class="day-b">' +
                    '<div class="row">' +
                    '<div class="left"></div>' +
                    '<div class="right">' +
                    '<div class="kill" id="killer">' +
                    '<div class="ciro"></div>' +
                    '杀手杀人' + '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row" id="killery">' +
                    '<div class="right">' +
                    '<div class="kill1" id="killerx">' + '这一晚什么也咩发生' + '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row">' +
                    '<div class="left1"></div>' +
                    '<div class="right">' +
                    '<div class="kill" id="death">' +
                    '<div class="ciro"></div>' +
                    '亡灵发表遗言' + '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row">' +
                    '<div class="right">' +
                    '<div class="kill" id="talk">' +
                    '<div class="ciro"></div>' +
                    '玩家一次发言' + '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row">' +
                    '<div class="right">' +
                    '<div class="kill" id="vote">' +
                    '<div class="ciro"></div>' +
                    '投票' + '</div>' +
                    '</div>' +
                    '</div>' +
                    '<div class="row" id="peopley">' +
                    '<div class="right">' +
                    '<div class="kill1" id="peoplex">' +number2+'号被投死，真实身份是' +name2+ '</div>' +
                    '</div>' +
                    '</div>' +
                    '</div>'
                )
            }
            else {
                wrap.prepend(
                    '<div class="day">'+'第'+i+'天'+'</div>'+
                    '<div class="day-b">'+
                    '<div class="row">'+
                    '<div class="left"></div>'+
                    '<div class="right">' +
                    '<div class="kill" id="killer">'+
                    '<div class="ciro"></div>'+
                    '杀手杀人'+'</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="row" id="killery">' +
                    '<div class="right">' +
                    '<div class="kill1" id="killerx">'+number1+'号被杀手杀死，真实身份是'+name1+'</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="row">' +
                    '<div class="left1"></div>'+
                    '<div class="right">' +
                    '<div class="kill" id="death">'+
                    '<div class="ciro"></div>'+
                    '亡灵发表遗言'+'</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="row">' +
                    '<div class="right">' +
                    '<div class="kill" id="talk">'+
                    '<div class="ciro"></div>'+
                    '玩家一次发言'+'</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="row">'+
                    '<div class="right">' +
                    '<div class="kill" id="vote">'+
                    '<div class="ciro"></div>'+
                    '投票'+'</div>'+
                    '</div>'+
                    '</div>'+
                    '<div class="row" id="peopley">' +
                    '<div class="right">' +
                    '<div class="kill1" id="peoplex">'+number2+'号被投死，真实身份是'+name2+'</div>'+
                    '</div>'+
                    '</div>'+
                    '</div>'
                )
            }
        }
    }
    write();



    // 隐藏之前天数的详细数据
    for(var m=day-1;m>0;m--) {
        $(stage[m]).hide();
    }

    // 改变之前天数详细数据的颜色
    for(var n=4*day-1;n>3;n--) {
        $(kstyle[n]).css("background","#9a9a9a");
        $(cstyle[n]).css("border-right","20px solid #9a9a9a");
    }

    // 折叠效果
    $(".day").click(function() {
        $(this).next().toggle(200);
    });


// 控制详细数据的显示和隐藏
    $("#killery").hide();
    $("#peopley").hide();
    function getrequest() {
        var url=location.search;
        if(url.indexOf("?")!==-1) {
            var str=url.substr(1);
            if(str==="kill") {
                $("#killery").show();
                $("#killer").css("background","#9a9a9a");
                $(cstyle[0]).css("border-right","20px solid #9a9a9a");
                name1=null;
                number1=null;
            }
            else if(str==="vote") {
                $("#people").show();

            }
            else if(str==="diary") {
            }
        }
    }
    getrequest();


    // 流程点击事件
    $("#killer").click(function() {
        window.location.href="js4-2.html?kill";

    });
    $("#death").click(function() {
        alert("请死者亮明身份并且发表遗言");
        $("#death").css("background","#9a9a9a");
        $(cstyle[1]).css("border-right","20px solid #9a9a9a");
    });
    $("#talk").click(function () {
        alert("玩家依次发表讨论");
        $("#talk").css("background","#9a9a9a");
        $(cstyle[2]).css("border-right","20px solid #9a9a9a");
    });
    $("#vote").click(function () {
        window.location.href="js4-2.html?vote";
    });


    // 底部按钮点击事件
    $("#btn1").click(function() {
        var q=confirm("确定退出本局游戏吗？");
        if(q===true) {
            window.location.href="task7-3.html";
        }
    });
    $("#btn2").click(function() {
        window.location.href="js4-2.html?diary";
    });
});