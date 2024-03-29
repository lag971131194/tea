function isID(){
    id=reg.email.value;
    if(id.length===0){
        document.getElementById("err_ID").innerHTML="用户名不能为空！";
        document.getElementById("err_ID").style.color="red";
        return false;
    }
    if(id.length>20){
        document.getElementById("err_ID").innerHTML="用户名不能超过20个字符！";
        document.getElementById("err_ID").style.color="red";
        reg.email.focus();
        return false;
    }else{
        document.getElementById("err_ID").innerHTML="";
        reg.email.style.background="white";
        return true;
    }
}

function isEmail() {
    email=reg.email.value;
    if(email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/)===-1){
        document.getElementById("err_email").innerHTML="邮箱格式不正确！";
        document.getElementById("err_email").style.color="red";
        reg.email.focus();
        return false;
    }
    else {
        document.getElementById("err_email").innerHTML="";
        reg.email.style.background="white";
        return true;
    }
}

function isPWD(){
    pwd=reg.pw1.value;
    if(pwd.length===0){
        document.getElementById("err_PWD").innerHTML="密码不能为空！";
        document.getElementById("err_PWD").style.color="red";
        return false;
    }
    if(pwd.length<6){
        document.getElementById("err_PWD").innerHTML="密码太短！";
        document.getElementById("err_PWD").style.color="red";
        return false;
    }
    else {
        document.getElementById("err_PWD").innerHTML="";
        reg.pw1.style.background="white";
        return true;
    }
}

function isREPWD(){
    repwd=reg.pw2.value;
    if(repwd.length===0){
        document.getElementById("err_REPWD").innerHTML="请再次确认密码！";
        document.getElementById("err_REPWD").style.color="red";
        return false;
    }
    if(reg.pw1.value!==repwd){
        document.getElementById("err_REPWD").innerHTML="两次密码输入不一致！";
        document.getElementById("err_REPWD").style.color="red";
        reg.pw1.value="";
        reg.pw2.value="";
        reg.pw1.focus();
        return false;
    }
    else {
        document.getElementById("err_REPWD").innerHTML="";
        reg.pw2.style.background="white";
        return true;
    }
}

function isNAME(){
    name=reg.name.value;
    if(name.length===0){
        document.getElementById("err_NAME").innerHTML="姓名不能为空！";
        document.getElementById("err_NAME").style.color="red";
        return false;
    }
    if(name.length>20){
        document.getElementById("err_NAME").innerHTML="姓名太长";
        document.getElementById("err_NAME").style.color="red";
        reg.name.focus();
        return false;
    }
    else {
        document.getElementById("err_NAME").innerHTML="";
        reg.name.style.background="white";
        return true;
    }
}


var submitBtn = document.getElementById('submit');
submitBtn.disabled = true;
document.getElementById('yes').addEventListener('change',function (){
    if(this.checked){
        submitBtn.disabled = false;
    }
    else
    {
        submitBtn.disabled = true;
    }
})


function validate_reg(){
    if(isID()&&isEmail()&&isPWD()&&isREPWD()&&isNAME()){
        alert("您填写的注册信息如下：\n邮箱："+reg.email.value+" \n密码："+reg.pw1.value+" \n姓名："+reg.name.value+"");
        console.log('isid');
        console.log(isID());
        console.log('isEmail');
        console.log(isEmail());
        console.log('isPWD');
        console.log(isPWD());
        console.log('isREPWD');
        console.log(isREPWD());
        console.log('isNAME');
        console.log(isNAME());
        return true;
    }
    else {
        console.log('isid');
        console.log(isID());
        console.log(isEmail);
        console.log(isEmail());
        console.log(isPWD);
        console.log(isPWD());
        console.log(isREPWD);
        console.log(isREPWD());
        console.log(isNAME);
        console.log(isNAME());
        return false;
    }
}