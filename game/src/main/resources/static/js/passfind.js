//아이디
function textCheck_id(obj){
    
    let idmsg = document.querySelector("#idmsg");
    let str = obj.value;
    //let check = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    let check = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    
    if(obj.value == ""){
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

//이메일
function textCheck_email(){
    let email1,email2,email3,emailcodeCheck;
    let emailmsg = document.querySelector("#emailmsg");
    
    email1 = document.getElementById("email1");
    email2 = document.getElementById("email2");
    email3 = document.getElementById("email3");
    emailcodeCheck = document.getElementById("emailcodecheck");
    emailcodeCheck.value='N';
    
    let str1 = email1.value;
    let str2 = email2.value;
    var check1 = /^[^ㄱ-ㅎ가-힣]+$/;
    let check2 = /^(?=.*[a-zA-Z])(?=.*[.])[a-zA-Z\.]+$/;
    

    if(email1.value == "" || email2.value == ""){
        emailmsg.innerHTML = "이메일을 입력해주세요.";
        emailmsg.style.color = "red";
        return false;
    }else if(!check1.test(str1)){
        emailmsg.innerHTML = "한글은 사용 불가능합니다.";   //영문,숫자 모두 사용하여 조합
        emailmsg.style.color = "red";
    }else if(!check2.test(str2)){
            emailmsg.innerHTML = "이메일 형식을 확인해주세요.";
            emailmsg.style.color = "red";
    
        
    }else if(email1.value !== "" && email2.value !== ""){
        emailmsg.innerHTML = "";
    }

    
}






function passfindCheck(){
        let id,email1, email2, email3, code, emailcodeCheck;
        
        let check2 = /^(?=.*[a-zA-Z])(?=.*[.])[a-zA-Z\.]+$/;
        var check3 = /^[^ㄱ-ㅎ가-힣]+$/;
        let check = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
       
        id = document.getElementById("id");
        email1 = document.getElementById("email1");
        email2 = document.getElementById("email2");
        email3 = document.getElementById("email3");
        code = document.getElementById("code");
        emailcodeCheck = document.getElementById("emailcodecheck");
        document.getElementById("email").value = email1.value + "@" + email2.value;
        
        if(id.value == ""){
            alert("아이디를 입력해주세요.");
            return false;
        }else if(!check.test(id.value)){
            alert("아이디는 6~12자 영문, 숫자를 조합하세요.");
            return false;
        }else if(email1.value == ""){
            alert("이메일을 입력해주세요.");
            return false;
        }else if(email2.value == ""){
            alert("이메일 주소를 입력해주세요.");
            return false;
        }else if(email3.value == "choice"){
            alert("이메일 주소를 입력해주세요.")
            email3.focus();
            return false;
        }else if(!check3.test(email1.value)){
            alert("이메일에 한글은 사용 불가능합니다.");
            return false;
        }else if(!check2.test(email2.value)){
            alert("이메일 형식을 확인해주세요.");
            return false;
        }else if(code.value == ""){
             alert("인증번호를 입력해주세요.");
            return false;
        }else if(emailcodeCheck.value == "N"){
            alert("이메일 인증을 진행해주세요");
            return false;
        }else{
            return true;
            
        }
        
        
        
}

    function emailCheck(){
        let email1, email2,email3;
        email1 = document.getElementById("email1")
        email2 = document.getElementById("email2");
        email3 = document.getElementById("email3");
        let emailmsg = document.querySelector("#emailmsg");
        if(email1.value !== "" && email2.value !== ""){
            emailmsg.innerHTML = "";
        }
        
            
       email2.value = email3.value;
        
        
        if(email3.value == "self"){
            //alert("이메일 주소를 입력해주세요.");
            email2.value = "";
            email2.disabled = false;
        }else if(email2.value == email3.value){
            emailmsg.innerHTML = "이메일 인증을 진행해주세요";
            email2.disabled = true;
        }

    }
    
    
    //인증번호
function numberCheck_email(obj){
    let number;
    let emailmsg = document.querySelector("#emailmsg");
    
    number = document.getElementById("number");
    
    number.type = 'text';
    let str1 = number.value;
    var check1 = /^[\d]+$/;
    
    if(number.value == ""){
        emailmsg.innerHTML = "인증번호를 입력해주세요.";
        emailmsg.style.color = "red";
        return false;
    }else if(!check1.test(str1)){
        emailmsg.innerHTML = "인증번호는 숫자만 입력 가능합니다.";
        emailmsg.style.color = "red";
    }else if(number.value !== ""){
        emailmsg.innerHTML = "";
    }
    
    
    
}
    