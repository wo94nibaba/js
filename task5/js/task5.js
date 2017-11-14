
//js原生方式

// function gets() {
//     var name = document.getElementById("user").value;
//     var psw = document.getElementById("password").value;
//     var x = new XMLHttpRequest();
//
//     var text = "name=" +name+ "&pwd=" + psw;
//     // var text = {"name": name, "pwd": psw};
//     // var txt=JSON.stringify(text);
//     x.open("Post", "/carrots-admin-ajax/a/login");    //生成请求
//     x.setRequestHeader("Content-type", "application/x-www-form-urlencoded");//修改添加http头给服务器
//     // x.send("name="+document.getElementById("user").value+"&pwd="+document.getElementById("password").value);//把内容和请求发给服务器
//     x.send(text);
//     x.onreadystatechange = function () {//当请求发到服务器的时候，执行一些基于响应的任务。
//         if (x.readyState === 4 && x.status === 200) {
//             var texts = JSON.parse(x.responseText);
//             if (texts.message === "success") {
//                 document.getElementById("prompt").innerText = texts.message;
//                 // window.location.href = "www.baidu.com";
//             }
//             else {
//                 document.getElementById("prompt").innerText = texts.message;
//             }
//         }
//     }
// }


// jquery方式


$(document).ready(function() {
    $("#btn").click(function () {
        var user1=$("#user").val();
        var password1=$("#password").val();
        var text = "name="+user1+"&pwd="+password1;
        $.ajax({
            type: 'POST',
            url: "/carrots-admin-ajax/a/login",
            async: "true",
            data: text,
            success: function(result){
                var txt = JSON.parse(result);
                console.log(result);
                console.log(txt);
                if (txt.message === "success") {
                    document.getElementById("prompt").innerText = texts.message;
                    // window.location.href = "www.google.com";
                }
                else {
                    $("#prompt").text(txt.message);
                }
            }
        })
    })
});