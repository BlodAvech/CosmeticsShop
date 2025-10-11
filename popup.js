// Subscribe popup
document.querySelector("#openpopup").onclick=function(){
    document.querySelector("#popup").style.display="block";
}
document.querySelector("#closepopup").onclick=function(){
    document.querySelector("#popup").style.display="none";
    document.querySelector(".message_subscribe").style.display="block";
}
document.querySelector("#closemessage").onclick=function(){
    document.querySelector(".message_subscribe").style.display="none";
}
