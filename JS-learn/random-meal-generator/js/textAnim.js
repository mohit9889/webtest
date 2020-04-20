const text = document.getElementById('text');
const animText = "Feeling Hungry?";
let idx = 1;

setInterval(writeText, 150);

function writeText() {
    text.innerText = animText.slice(0, idx);
    idx++;

    if(idx > animText.length){
        idx = 1;
    }
}