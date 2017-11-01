// 页面跳转
function A1open() {
    window.location.href="js2.html";
}
function ab() {
    window.location.href="task7-1.html";
}

// 获取变量
var a=document.getElementById("set-players");
var b=document.getElementById("set-number");
var minus=document.getElementById("btn1");
var plus=document.getElementById("btn2");
// 滑动条设置人数，传递值
minus.onclick = function() {
    b.value--;
    a.value=b.value;
};
plus.onclick = function() {
    b.value++;
    a.value=b.value;
};
a.onchange = function() {
    b.value=a.value;
};
// 点击设置按钮函数
var role = new Array(a.value);
var judge=null;
var fit=document.getElementById("set");
fit.onclick=function() {
    var x=document.getElementById("killer");
    var y=document.getElementById("people");
    x.value=parseInt(a.value/3);
    y.value=a.value-x.value;
    if(a.value<4 || a.value>18) {
        alert("请输入正确的数字");
        judeg=null;
    }
    else {
        // 将角色组成数组
        var i=0;
        for(i;i<x.value;i++) {
            role[i]="杀手";
        }
        for(i;i<a.value;i++) {
            role[i]="平民";
        }
        // 角色数组打乱
        var d=a.value;
        for(var e=0;e<d;e++) {
            var f=Math.floor(Math.random()*d);
            role.push(role[f]);
            role.splice(f,1);
        }
        sessionStorage.setItem("key",JSON.stringify(role));
        judge=1;
    }
};
// 下一步
var next=document.getElementById("play");
next.onclick = function() {
    if(judge !==1) {
        alert("请点击‘点击设置按钮’");
    }
    else {
        window.location.href="js3.html";
    }
};
