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
        passmsg.innerHTML = "신규 비밀번호를 입력해주세요.";
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

function cpassCheck(){
    let pass,cpass,cpassmsg;
    pass = document.getElementById("pass");
    cpass = document.getElementById("cpass");
    cpassmsg = document.getElementById("cpassmsg");
    
    if(pass.value != "" && cpass.value != ""){
        if(pass.value != cpass.value){
            cpassmsg.innerHTML = "비밀번호가 다릅니다.";
            cpassmsg.style.color = "red";
            return false;
        }else{
            cpassmsg.innerHTML = "";
            return true;
        }
    }else if(cpass.value ==""){
        cpassmsg.innerHTML = "신규 비밀번호 재확인을 입력해주세요.";
        cpassmsg.style.color = "red";
        return false;
    }else if(cpass.value !== "" || pass.value == cpass.value){
        cpassmsg.innerHTML = "";
        return true;
    }

}





function newpassCheck(){
        let name, email1, email2, email3;
        
        let check = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/;
        let check2 = /^(?=.*[a-zA-Z])(?=.*[.])[a-zA-Z\.]+$/;
        var check3 = /^[^ㄱ-ㅎ가-힣]+$/;
        
        
        name = document.getElementById("name");
        email1 = document.getElementById("email1");
        email2 = document.getElementById("email2");
        email3 = document.getElementById("email3");
        document.getElementById("email").value = email1.value + "@" + email2.value;
        if(name.value == ""){
            alert("이름을 입력해주세요.");
            return false;
        }else if(!check.test(name.value)){
            alert("이름은 한글 또는 영문을 사용하세요.");
            return false;
        }else if(email1.value == ""){
            alert("이메일을 입력해주세요.");
            return false;
        }else if(email2.value == ""){
            alert("이메일 주소를 입력해주세요.");
            return false;   
        }else if(email3.value == "choice"){
            alert("이메일 주소를 선택해주세요.")
            email3.focus();
            return false;
        }else if(!check3.test(email1.value)){
            alert("이메일에 한글은 사용 불가능합니다.");
            return false;
        }else if(!check2.test(email2.value)){
            alert("이메일 형식을 확인해주세요.");
            return false;
        }else{
            return true;
        } 
        
}  