
/***
 * 회원가입 폼 체크(공백체크, 정규식체크)
 ***/
// 폼 서밋
function formsubmit(form){
	let idcheck = document.getElementById("idcheck");
	let nickcheck = document.getElementById("nickcheck");
	let hpcheck = document.getElementById("hpcheck");
	let emailcheck = document.getElementById("emailcheck");
	let hp1 = document.getElementById("hp1");
	let hp2 = document.getElementById("hp2");
	let hp3 = document.getElementById("hp3");
	let email1 = document.getElementById("email1");
	let email2 =  document.getElementById("email2");
	document.getElementById("hp").value = hp1.value + hp2.value + hp3.value;
	document.getElementById("email").value = email1.value +"@"+ email2.value;
	
	if(!textCheck_id(form.id)){
		alert("ID를 확인해주세요.");
		return false;
	}else if(!textCheck_pass(form.pass)){
		alert("비밀번호를 확인해주세요");
		return false;
	}else if(!cpassCheck()){
		alert("비밀번호 확인을 확인해주세요.");
		return false;
	}else if(!textCheck_name(form.name)){
		alert("이름을 확인해주세요.");
		return false;
	}else if(!textCheck_nick(form.nick)){
		alert("닉네임을 확인해주세요.");
		return false;
	}else if(!textCheck_hp()){
		alert("핸드폰번호를 확인해주세요.");
		return false;
	}else if(!textCheck_email()){
		alert("이메일을 확인해주세요.");
		return false;
	}else if(idcheck.value == 'N'){
		alert("아이디 중복을 확인해주세요");
		return false;
	}else if(nickcheck.value == 'N'){
		alert("닉네임 중복을 확인해주세요");
		return false;
	}else if(hpcheck.value == 'N'){
		alert("핸드폰번호 중복을 확인해주세요");
		return false;
	}else if(emailcheck.value == 'N'){
		alert("이메일 중복을 확인해주세요");
		return false;
	}else{
		return true;
	}
}
//아이디
function textCheck_id(obj){
    
    let idmsg = document.querySelector("#idmsg");
    
    //let check = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    let check = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
    
    if(obj.value == ""){
        idmsg.innerHTML = "회원ID를 입력해주세요.";
        idmsg.style.color = "red";
        return false;
    }else if(!check.test(obj.value)){
        idmsg.innerHTML = "6~12자 영문, 숫자를 조합하세요.";
        idmsg.style.color = "red";
        return false;
    }else{
        idmsg.innerHTML = "";
        return true; // 확인이 완료 되었을 때
    }
}

//비밀번호
function textCheck_pass(obj){
    let passmsg = document.querySelector("#passmsg");
    let pass = document.getElementById("pass");
    let cpass = document.getElementById("cpass");
    let cpassmsg = document.getElementById("cpassmsg");
    
    //let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    
    if(obj.value ==""){
        passmsg.innerHTML = "비밀번호를 입력해주세요.";
        passmsg.style.color = "red";
        return false;
    }else if(!check.test(obj.value)){
        passmsg.innerHTML = "8~16자 영문, 숫자, 특수문자를 사용하세요.";
        passmsg.style.color = "red";
        return false;
    }else{
        passmsg.innerHTML = "";
        return true;
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

/****************************
회원가입 - 비밀번호, 비밀번호 확인 체크
****************************/
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
        cpassmsg.innerHTML = "비밀번호 확인을 입력해주세요.";
        cpassmsg.style.color = "red";
        return false;
    }else if(cpass.value !== "" || pass.value == cpass.value){
        cpassmsg.innerHTML = "";
        return true;
    }

}

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
	    return false;
    }else{
        namemsg.innerHTML = "";
        return true; // 확인이 완료 되었을 때
    }
}

function nickchecksave(obj){
    let check_save1 = document.getElementById("check_save1");
    check_save1.value = obj.value;
}
//닉네임
function textCheck_nick(obj){
    let nickmsg = document.querySelector("#nickmsg");
    let str = obj.value;
    let check = /^[^@$!%*#?&]{1,10}$/;
    
    if(obj.value ==""){
        nickmsg.innerHTML = "닉네임을 입력해주세요.";
        nickmsg.style.color = "red";
        return false;
    }else if(!check.test(str)){
      	nickmsg.innerHTML = "1~10자의 한글 또는 영문 또는 숫자를 사용하세요.";
      	nickmsg.style.color = "red";
      	return false;
    }else{
        nickmsg.innerHTML = "";
        return true; // 확인이 완료 되었을 때
    }
}

function textCheck_hp(){
    let hp1,hp2,hp3;
    let hpmsg = document.querySelector("#hpmsg");
    
    hp1 = document.getElementById("hp1");
    hp2 = document.getElementById("hp2");
    hp3 = document.getElementById("hp3");
    let str1 = hp1.value;
    let str2 = hp2.value;
    let str3 = hp3.value;
    let check1 = /^(?=.*\d)[\d]{3,3}$/;
    let check2 = /^(?=.*\d)[\d]{3,4}$/;
    let check3 = /^(?=.*\d)[\d]{4,4}$/;
    
    if(hp1.value == "" || hp2.value == "" || hp3.value == ""){   //또는
        hpmsg.innerHTML = "전화번호를 입력해주세요.";
        hpmsg.style.color = "red";
        return false;
    }else if(!check1.test(str1)){
        hpmsg.innerHTML = "전화번호 앞자리는 3자리의 숫자를 사용하세요.";
        hpmsg.style.color = "red";
        return false;
    }else if(!check2.test(str2)){
        hpmsg.innerHTML = "전화번호 중간자리는 3~4자리의 숫자를 사용하세요.";
        hpmsg.style.color = "red";
        return false;
    }else if(!check3.test(str3)){
        hpmsg.innerHTML = "전화번호 끝자리는 4자리의 숫자를 사용하세요.";
        hpmsg.style.color = "red";
        return false;
    }else{
        hpmsg.innerHTML = "";
        return true; // 확인이 완료 되었을 때
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
    let check2 = /^(.*[a-zA-Z])(?=.*[.])[a-zA-Z\.]+$/;
    
    if(email1.value == "" || email2.value == ""){
        emailmsg.innerHTML = "이메일을 입력해주세요.";
        emailmsg.style.color = "red";
        return false;
    }else if(!check1.test(str1)){
        emailmsg.innerHTML = "한글은 사용 불가능합니다.";   //영문,숫자 모두 사용하여 조합
        emailmsg.style.color = "red";
        return false;
    }else if(!check2.test(str2)){
        emailmsg.innerHTML = "이메일 형식을 확인해주세요.";
        emailmsg.style.color = "red";
    	return false;
        
    }else if(email1.value !== "" && email2.value !== ""){
        emailmsg.innerHTML = "";
        return true; // 확인이 완료 되었을 때
    }
    
}

//인증번호
//function numberCheck_email(obj){
//    let number;
//    let emailmsg = document.querySelector("#emailmsg");
//    
//    number = document.getElementById("number");
//    
//    let str1 = number.value;
//    var check1 = /^[\d]+$/;
//    
//    if(number.value == ""){
//        emailmsg.innerHTML = "인증번호를 입력해주세요.";
//        emailmsg.style.color = "red";
//        return false;
//    }else if(!check1.test(str1)){
//        emailmsg.innerHTML = "인증번호는 숫자만 입력 가능합니다.";
//        emailmsg.style.color = "red";
//    }else if(number.value !== ""){
//        emailmsg.innerHTML = "";
//        
//    }
//    
//}


    function emailSend(){
        let email1, email2,email3, emailmsg;
        email1 = document.getElementById("email1")
        email2 = document.getElementById("email2");
        email3 = document.getElementById("email3");
        emailmsg = document.getElementById("emailmsg");
        emailcheck = document.getElementById("emailcheck");
        emailcodecheck = document.getElementById("emailcodecheck");
        
        emailcodecheck = 'N';
     
        email2.value = email3.value;
//        let check1 = /^[^ㄱ-ㅎ가-힣]+$/;
        
        if(email3.value == "self"){
            //alert("이메일 주소를 입력해주세요.");
            email2.value = "";
            email2.disabled = false;
        }else if(email2.value == email3.value){
            emailmsg.innerHTML = "";
            email2.disabled = true;
        }
        
//        if(email1.value == "" || email2.value == ""){
//            emailmsg.innerHTML = "이메일을 입력해주세요.";
//            emailmsg.style.color = "red";
//            emailcheck.value = 'N';
//        }else if(!check1.test(email1.value)){
//             emailmsg.innerHTML = "한글은 사용 불가능합니다.";
//            emailmsg.style.color = "red";
//            emailcheck.value = 'N';
//        }else if(email1.value !== "" && email2.value !== ""){
//            emailmsg.innerHTML = "";
//            emailcodecheck = 'N'
//        }else{
//            emailmsg.innerHTML = "";
//            emailcheck.value = 'Y';
//            
//        }

    }
    
    
    
    
    
