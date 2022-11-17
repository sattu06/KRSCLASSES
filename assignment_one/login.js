function printError(elemId,hintTag) {
    document.getElementById(elemId).innerHTML=hintTag
    
}
var submit=document.getElementById("loginButton")
submit.onclick=function(){
validateform()}
function validateform(){
  var form=  document.getElementById("myform");

    var username=myform.username.value;
    var password=myform.password.value;


var usernameerr=true;
var passworderr= true;
if(username==""){
    printError("usernameerr","please enter valid name");
}else
if(username.length<5){
    printError("usernameerr","please enter valid name");
} else{
    printError("usernameerr","");
    usernameerr=false;
}

if(password==""){
    printError("passworderr","please enter valid name");
}else
if(password.length<5){
    printError("passworderr","please enter valid name");
} else{
    printError("passworderr","");
    passworderr=false;
}
if((usernameerr||passworderr)==true){
    return false;
}
else{
    var  dataPreview="You've entered the following details: \n" + username +"\n"+"password"+ password;
    alert(dataPreview);

}
}