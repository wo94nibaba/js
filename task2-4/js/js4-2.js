// <-------------杀手杀人、投票、法官日记公用页面------------>
$(document).ready(function(){
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
    var day=parseInt(sessionStorage.getItem("day"));

    var player=document.getElementsByClassName("b-box");

    var knife=document.getElementsByClassName("sub");

    var boxer=document.getElementsByClassName("box1");

    console.log(role);
    console.log(num);
    console.log(killern);
    console.log(peoplen);
    console.log(player);

    // 显示角色
    function Write(){
        container = $(".main");
        for(var i=0;i<num;i++){
            container.append(
                "<div class='b-box'>" +
                "<div class='box' id='player" + i + "'>" +
                "<div class='box1'>" + role[i].identity+ "</div>" +
                "<div class='box2'>" + (i + 1) + "号</div>" +
                "</div>" +
                "<div class='sub'>" +
                "<div class='sub1'>" +"</div>" +
                "</div>" +
                "</div>"
            );
        }
    }
    Write();

    // 选择渲染模式
    var type;
    function getrequest() {
        var url=location.search;
        if(url.indexOf("?")!==-1) {
            var str=url.substr(1);
            if(str==="kill") {
                typekill();
                type="kill";
            }
             else if(str==="vote") {
                typevote();
                type="vote";
            }
            else if(str==="diary") {
                typediary();
                type="diary";
            }
            else {

            }
        }
    }
    getrequest();

    // 杀人页面样式
    function typekill() {
        for(var i=0;i<num;i++) {
            if(role[i].status==="dead") {
                boxer[i].style.background="#83b09a";
            }
        }
    }
    // 投票页面样式
    function typevote() {
        $("#title").text("投票");
        $("#introduce1").text("发言讨论结束，大家请投票");
        $("#introduce2").text("点击得票数最多的人的头像");
        for(var i=0;i<num;i++) {
            if(role[i].status==="dead") {
                boxer[i].style.background="#83b09a";
            }
        }
    }

    // 法官日记页面
    function typediary() {
        $("#title").text("法官日记");
        $(".closed").css("background","none");
        $(".header-b").hide();
        for(var i=0;i<num;i++) {
            if(role[i].status==="dead") {
                boxer[i].style.background="#83b09a";
            }
        }
    }
    var lastsel=null;
    // 页面逻辑
    for(var i=0;i<num;i++) {
        player[i].index=i;
        player[i].onclick=function() {
            // 杀手页面
            if (type === "kill") {
                if (role[this.index].status === "dead") {
                    alert("这是尸体，选个活的吧");
                }
                else if (role[this.index].identity === "杀手") {
                    alert("自己人");
                }
                else {
                    for (var x = 0; x < num; x++) {
                        knife[x].style.visibility = "hidden";
                    }
                    knife[this.index].style.visibility = "visible";
                    lastsel= this.index;
                }
            }
            // 投票页面
            else if(type==="vote") {
                if(role[this.index].status==="dead") {
                    alert("这是尸体，选个活的吧");
                }
                else {
                    for(x=0;x<num;x++){
                        knife[x].style.visibility= "hidden";
                    }
                    knife[this.index].style.visibility = "visible";
                    lastsel= this.index;
                }
            }
        }
    }

    // 统计杀手和平民死亡人数
    var deadkiller=0;
    var deadpeople=0;
    function calculate() {
        var ab=0;
        var ac=0;
        for(var l=0;l<num;l++) {
            if(role[l].identity==="杀手"&&role[l].status==="dead") {
                ab+=1;
                deadkiller=ab;
            }
            else if(role[l].identity==="平民"&&role[l].status==="dead") {
                ac+=1;
                deadpeople=ac;
            }
            else {

            }
        }
    }
    $("#btn2").click(function() {
        calculate();
        console.log(deadkiller);
    });
    // 按钮事件
    $("#btn1").click(function () {

       if(type==="kill") {
           if(lastsel===null) {
               window.location.href="js4-1.html?kill";
           }
           else {
               role[lastsel].date = day;
               role[lastsel].status = "dead";
               role[lastsel].murder = "killer";
               sessionStorage.setItem("key",JSON.stringify(role));
               calculate();
               if(deadpeople===peoplen) {
                   window.location.href = "task7-3.html?kill";
               }
               else if(deadkiller===killern) {
                   window.location.href="task7-3.html?vote"
               }
               else {
                   window.location.href="js4-1.html?kill";
               }
           }
       }
       else if(type==="vote") {
           if(lastsel===null) {
               alert("你倒是选一个啊");
           }
           else {

               role[lastsel].status="dead";
               role[lastsel].date=day;
               role[lastsel].murder="people";
               sessionStorage.setItem("key",JSON.stringify(role));
               day+=1;
               calculate();
               if(deadkiller===killern) {
                   window.location.href="task7-3.html?vote"
               }
               else if(deadpeople===peoplen) {
                   window.location.href = "task7-3.html?kill";
               }
               else {
                   window.location.href = "js4-1.html?vote";
               }
           }
       }
       else if(type==="diary") {
           window.location.href = "js4-1.html?diary";
       }
       else {

       }
        sessionStorage.setItem("day",day);
        sessionStorage.setItem("lastsel",lastsel);
    });

    // 头部按钮的点击事件
    $(".back").click(function() {
        window.location.href="js3.html";
    });
    $(".closed").click(function() {
        var q=confirm("确定退出本局游戏吗？");
        if(q===true) {
            window.location.href="task7-1.html";
        }
    })
});
