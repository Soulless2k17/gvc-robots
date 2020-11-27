let lines = [];
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
        function createScene()    
    }
   
   function createScene() {
        for (var i = 0; i < lines.length; i++) {
            if (i === 0) {
                roomSize.push(lines[i][0]);
                roomSize.push(lines[i][1]);
            } else {
                if (i % 2 == 0) {
                    robots[robots.length - 1]["orders"] = lines[i];
                } else {
                    robots.push({
                        "coordX": parseInt(lines[i][0]),
                        "coordY": parseInt(lines[i][1]),
                        "orientation": lines[i][2]
                    });
                }
            }
        }
        
        createJourney();
        
        function createJourney() {
            for (var i = 0; i < robots.length; i++) {
                robotMoves(i);
            }

            function robotMoves(num) {
                console.log("checking orders");
                var orders = robots[num].orders;
                for (var j = 0; j < orders.length; j++) {
                    console.log(robots[num] + " = " + orders.length + " orders " + orders.charAt(j));
                }
            }
        }      
    }  
}  
