const upper = document.getElementById("upper-case");
const lower = document.getElementById("lower-case");
const proper = document.getElementById("proper-case");
const sentence = document.getElementById("sentence-case");
const savefile = document.getElementById("save-text-file");
const elements = document.querySelector("textarea");

upper.addEventListener("click", function (){
   elements.value = elements.value.toUpperCase()
});

lower.addEventListener("click", function (){
    elements.value = elements.value.toLowerCase()
});


proper.addEventListener("click", function (){
    let properText = elements.value.split(' ');
    for (let i in properText)
    { properText[i] = properText[i].slice(0,1).toUpperCase() + properText[i].slice(1); }
    elements.value = properText.join(' '); });

sentence.addEventListener("click", function (){
    let sentenceText = elements.value.toLowerCase().split('. ');
    console.log(sentenceText);
    for (let i in sentenceText){
        sentenceText[i] = sentenceText[i].slice(0,1).toUpperCase() + sentenceText[i].slice(1);
    }
    elements.value = sentenceText.join('. ')
});

// Сохранение файла (saving file)
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.getElementById("textareatext").value;
    let filename = "text.txt"
    download(filename ,text);
}, false);
