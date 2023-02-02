let check= document.querySelector(".check");
let password=document.querySelector(".password");
let text=document.querySelector(".text");
let regex= /^[^]+\@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
check.addEventListener("click",()=>{
    if(password.value==""){
        text.innerText ="Please enter an Email Address";
        text.style.color="#000"
    }
    else if(password.value.match(regex)){
        text.innerText ="Congrats! You have entered a valid email address";
        text.style.color="rgba(4,125,9,1)";

    }
    else
    {
        text.innerText ="Sorry! You have entered an invalid email address";
        text.style.color="rgba(225,0,0,1)";
    }
});
