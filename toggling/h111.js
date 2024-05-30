let changemode=document.querySelector(".btn1");
let body=document.querySelector("body");
let mode="light";
changemode.addEventListener("click",()=>{
    if(mode==="light"){
        mode="dark";
        body.classList.add("dark");
        body.classList.remove("light");

    }
    else{
        mode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
})