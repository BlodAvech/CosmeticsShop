// Subscribe popup
let form = null;

document.querySelector("#openpopup").onclick=function(){
    document.querySelector("#popup").style.display="block";
}
document.querySelector("#closepopup").onclick=function(){

}
document.querySelector("#closemessage").onclick=function(){
    document.querySelector(".message_subscribe").style.display="none";
    form.submit();
}

function onPopupFormSubmit(newForm , success)
{
    form = newForm;
    document.querySelector("#popup").style.display="none";
    if(success == false) return;
    document.querySelector(".message_subscribe").style.display="block";
}