var model=document.getElementById("mymodel");
var btn= document.getElementById("mybtn");
var close = document.getElementsByClassName("close")[0];

btn.onclick=function(){
    model.style.display="block";
}
close.onclick=function(){
    model.style.display="none";

}
window.onclick=function(event){
    if(event.target==model){
        model.style.display="none"
    }
}