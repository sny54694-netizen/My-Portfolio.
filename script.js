const texts = ["Front End Developer", "Future Programmer"];
let count = 0; let index = 0; let isDeleting = false;
function type(){
    if(count >= texts.length) count = 0;
    let currentText = texts[count];
    let el = document.getElementById("typing");
    if(!el) return;
    if(isDeleting){
        el.innerText = currentText.substring(0, index--);
        if(index < 0){ isDeleting = false; count++; }
    } else {
        el.innerText = currentText.substring(0, index++);
        if(index > currentText.length){ isDeleting = true; setTimeout(type, 1200); return; }
    }
    setTimeout(type, isDeleting ? 50 : 120);
}
type();