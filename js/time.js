function reloop() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var op;
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();

    var day = time.getDay();
    if(minute<10)
        minute="0"+minute;
    if(second<10)
        second="0"+second;

    var apm="AM";
    if(hour>12) {
        hour=hour-12;
        apm="PM";
    }

    var weekday=0;
    switch (time.getDay()) {
        case 0:
            weekday="星期日";
            break;
        case 1:
            weekday="星期一";
            break;
        case 2:
            weekday="星期二";
            break;
        case 3:
            weekday="星期三";
            break;
        case 4:
            weekday="星期四";
            break;
        case 5:
            weekday="星期五";
            break;
        case 6:
            weekday="星期六";
            break;
    }
    op="今天是："+year+"年"+month+"月"+day+"日"+weekday+":"+hour+":"+minute+":"+second+""+apm;
    document.getElementById("t").innerHTML=op;
    setTimeout("reloop()",1000);
    console.log(op);
}