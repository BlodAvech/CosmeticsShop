// Registration popup
document.querySelector(".open_registration_btn").onclick=function(){
    document.querySelector(".registration").style.display="block";
    document.querySelector(".close_registration_btn").style.display="block";
}

document.querySelector(".close_registration_btn").onclick=function(){
    document.querySelector(".registration").style.display="none";
}
