$(document).ready(function() {
    // 角色数组
    var role=JSON.parse(sessionStorage.getItem("key"));
    // 总人数
    var num=role.length;
    // 杀手人数
    var killern=JSON.parse(sessionStorage.getItem("k"));
    // 水民人数
    var peoplen=JSON.parse(sessionStorage.getItem("p"));
    // 天数
    var day=parseInt(sessionStorage.getItem("day"));
    // 调试信息
    console.log(role);
    console.log(num);
    console.log(killern);
    console.log(peoplen);
    console.log(day);

    // 填入数据
    $("#kn").text(killern);
    $("#pn").text(peoplen);

    function getrequest() {
        var url=location.search;
        if(url.indexOf("?")!==-1) {
            var str=url.substr(1);
            if(str==="kill") {
                $("#role1").text("杀手");
                $("#jg2").hide();
            }
            else if(str==="vote") {
                $("#role1").text("平民");
                $("#jg1").hide();
            }

        }
        else {
            $("#jg2").hide();
        }
    }
    getrequest();

    // 显示每一天详细数据
    for(var i=1;i<day;i++) {
        var name1=null,name2=null,number1=null,number2=null;
        for(var j=0;j<num;j++) {
            if(role[j].date===i&&role[j].status==="dead"&&role[j].murder==="killer") {
                number1=j+1;
                name1=role[j].identity;
            }
            else if(role[j].date===i&&role[j].status==="dead"&&role[j].murder==="people") {
                number2=j+1;
                name2=role[j].identity;
            }
            else {

            }
        }
        if(name1===null) {
            $(".main").append(
                '<div class="itm">' +
                '<div class="box">' +
                '<span>第'+i+'天</span>'+
                '<span>0小时07分</span>'+
                '<p>' +
                '这一晚很平静'+'<br/>'+
                '白天：'+number2+'号被全民投票投死，'+number2+'号是'+name2+
                '</p>'+
                '</div>'+
                '</div>'
            )
        }
        else {
            $(".main").append(
                '<div class="itm">' +
                '<div class="box">' +
                '<span>第'+i+'天</span>'+
                '<span>0小时07分</span>'+
                '<p>' +
                '晚上：'+number1+'号被杀手杀死，'+number1+'号是'+name1+'<br/>'+
                '白天：'+number2+'号被全民投票投死，'+number2+'号是'+name2+
                '</p>'+
                '</div>'+
                '</div>'
            )
        }
    }
});