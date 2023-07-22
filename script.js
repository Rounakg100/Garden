const header=document.querySelector(".header");
const menubtn=document.querySelector(".menu-btn");
const menulist=document.querySelector(".menu-list");
let counter=1;
menubtn.onclick=()=>{
    console.log(counter);
if(counter==1){
    menulist.classList.add("active");
    counter++;
}
else{
    menulist.classList.remove("active");
    counter--;
}
    

}
window.onscroll=()=>{
    this.scrollY>20?header.classList.add("sticky") : header.classList.remove("sticky");
    this.scrollY>20?menulist.classList.add("stickey") : menulist.classList.remove("stickey");

}


const parallex=document.getElementById("tem-parallex");
window.addEventListener("scroll", function(){
    let offset=window.pageYOffset;
    console.log(offset);
    parallex.style.backgroundPositionY=offset * 0.678 +"px";
})
const parallex2=document.getElementById("parallex");
window.addEventListener("scroll", function(){
    let offset2=window.pageYOffset;
    console.log(offset2);
    parallex2.style.backgroundPositionY=offset2 * 0.678 +"px";
})
