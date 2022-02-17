
//이름
function textCheck_name(obj){
    let namemsg = document.querySelector("#namemsg");
  let str = obj.value;
  let check = /^[ㄱ-ㅎ가-힣a-zA-Z]+$/;

    if(obj.value ==""){
        namemsg.innerHTML = "이름을 입력해주세요.";
        namemsg.style.color = "red";
        return false;
  }else if(!check.test(str)){
      namemsg.innerHTML = "한글 또는 영문을 사용하세요.";
      namemsg.style.color = "red";
    }else{
        namemsg.innerHTML = "";
    }
}
//이메일
function textCheck_email(){
    let email1,email2,email3;
    let emailmsg = document.querySelector("#emailmsg");
    
    email1 = document.getElementById("email1");
    email2 = document.getElementById("email2");
    email3 = document.getElementById("email3");
    
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

function idfindCheck(){
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
            idfindForm.submit();
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
            emailmsg.innerHTML = "";
            email2.disabled = true;
        }
  

    }
    
    