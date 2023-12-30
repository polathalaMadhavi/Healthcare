const screen=document.querySelector(".screen");
const images=document.querySelectorAll(".screen img");
var index=0;
function change(){
  images.forEach(img => {
    img.style.display="none";

  });
  index=(index + 1) % images.length;
  images[index].style.display="block";
}
change();
setInterval(change,2000);