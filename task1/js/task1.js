// 定义全局变量num获取盒子
var num=document.getElementsByClassName("abc");
// 开始函数
var begin;
var state=true;
function start() {
    if(state) {
        begin=setInterval(change,1000);
    }
    state=false;
}
// 结束函数
function end() {
    clearInterval(begin);
    for (var i=0;i<num.length;i++) {
        num[i].style.background = "#FFA500";
    }
    state=true;
}
// 随机改变颜色函数
function change() {
    // 初始化盒子颜色
    for (var j=0;j<num.length;j++) {
        num[j].style.background = "#FFA500";
    }
    // 随机获取三个盒子并改变颜色
    var b=new Array(9);
    for(var x=0;x<9;x++) {
        b[x]=x;
    }
    // 随机数去重
    for(var i=0;i<3;i++) {
        do {
            var count;
            count=Math.floor(Math.random()*9);
        }
        while(b[count]==null);
        b[count]=null;
        num[count].style.background=color();
    }
// 随机生成颜色
    function color() {
        var r=Math.floor(Math.random()*256);
        var g=Math.floor(Math.random()*256);
        var b=Math.floor(Math.random()*256);
        return "rgb("+r+','+g+','+b+")";
    }
}



