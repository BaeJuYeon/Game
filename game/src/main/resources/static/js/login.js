//아이디
function textCheck_id(obj){
    
    let idmsg = document.querySelector("#idmsg");
    let str = obj.value;
    //let check = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    let check = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    
    if(obj.value ==""){
        idmsg.innerHTML = "회원ID를 입력해주세요.";
        idmsg.style.color = "red";
        return false;
    }else if(!check.test(str)){
        idmsg.innerHTML = "6~12자 영문, 숫자를 조합하세요.";
        idmsg.style.color = "red";
    }else{
        idmsg.innerHTML = "";
    }
}

//비밀번호
function textCheck_pass(obj){
    let passmsg = document.querySelector("#passmsg");
    let pass = document.getElementById("pass");
    let cpass = document.getElementById("cpass");
    let cpassmsg = document.getElementById("cpassmsg");
    let str = obj.value;
    //let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    
    if(obj.value ==""){
        passmsg.innerHTML = "비밀번호를 입력해주세요.";
        passmsg.style.color = "red";
    }else if(!check.test(str)){
        passmsg.innerHTML = "8~16자 영문, 숫자, 특수문자를 사용하세요.";
        passmsg.style.color = "red";
    }else{
        passmsg.innerHTML = "";
    }
    
    if(pass.value != "" && cpass.value != ""){
        if(pass.value != cpass.value){
            cpassmsg.innerHTML = "비밀번호가 다릅니다.";
            cpassmsg.style.color = "red";
            return false;
        }else{
            cpassmsg.innerHTML = "";
            return true;
        }
    }
    
}