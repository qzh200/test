let a = 0;
$(document).ready(function() {
    $("#jia").text("点我计数加一").click(function() {
        a=a+1;
        $("#show").text("点击次数：" + a);
    });
    $("#jian").text("点我计数减一").click(function() {
        a=a-1;
        if(a<0){
            alert("不能再减了");
            a=0;
        }
        $("#show").text("点击次数：" + a);
    })
    $("#zero").mouseover(function() {
        a=0;
        $("#show").text("点击次数：" + a);
    });
});