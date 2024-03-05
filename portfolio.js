let btn1=document.querySelector("#btn");
btn1.addEventListener("click",()=>{
    let a=document.querySelector("#name").value;
    let searchURL= "https://www.google.com/search?q="+a;
    searchTab=window.open(searchURL,"_blank");
})