
// Typing Effect JavaScript
const texts = ["Front End Developer", "Student", "Future Web Developer"];
let count = 0; let index = 0; let currentText = ""; let isDeleting = false;
function type(){
    if(count >= texts.length) count = 0;
    currentText = texts[count];
    if(isDeleting){
        document.getElementById("typing").innerText = currentText.substring(0, index--);
        if(index < 0){ isDeleting = false; count++; }
    } else {
        document.getElementById("typing").innerText = currentText.substring(0, index++);
        if(index > currentText.length){ isDeleting = true; setTimeout(type, 1200); return; }
    }
    setTimeout(type, isDeleting ? 50 : 120);
}
type();




