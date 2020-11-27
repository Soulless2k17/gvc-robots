let roomSize = [];
let robots = [];

document.querySelector(".runBtn").addEventListener("click", init);

function init() {
   function textCleanup() {
        var text = document.querySelector('.input').value;
        text = text.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, "");
        document.querySelector('.input').value = text;
        for (var i = 0; i < document.querySelector('.input').value.split(/\n/).length; i++) {
            let line = document.querySelector('.input').value.split(/\n/)[i];
            if (line) {
                lines.push(line.replace(/\s/g, ''));
            } else {
                lines.push("");
            }
        }
        console.log(lines);     
    }
  
}  
