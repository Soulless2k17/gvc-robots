document.querySelector(".runBtn").addEventListener("click", init);

function init() {
   let lines = [];
let roomSize = [];
let robots = [];
let dangerZone = [{
    coordX: "",
    coordY: ""
}];
let inDanger;

function init() {
    function textCleanup() {
        var text = document.querySelector('.input').value;
        text = text.replace(/(?:(?:\r\n|\r|\n)\s*){2}/gm, "");
        document.querySelector('.input').value = text;
        for (var i = 0; i < document.querySelector('.input').value.split(/\n/).length; i++) {          
            let line = document.querySelector('.input').value.split(/\n/)[i];
            if (line) {                
                lines.push(line);
            } else {
                lines.push("");
            }
        }
        console.log(lines);
        createScene();
    }

    function createScene() {
        for (var i = 0; i < lines.length; i++) {
            if (i === 0) {
                roomSize.push(lines[i].split(' ')[0]);
                roomSize.push(lines[i].split(' ')[1]);
            } else {
                if (i % 2 == 0) {
                    robots[robots.length - 1]["orders"] = lines[i];
                } else {
                    robots.push({
                        "coordX": parseInt(lines[i].split(' ')[0]),
                        "coordY": parseInt(lines[i].split(' ')[1]),
                        "orientation": lines[i].split(' ')[2]
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
                var orders = robots[num].orders;
                for (var j = 0; j < orders.length; j++) {
                    action(orders.charAt(j));
                    if (j === orders.length - 1) {
                        if (robots[num].job !== "displayed") {
                            robots[num]["job"] = "done";
                        }
                    }
                }
            }

            function action(turn) {
                if (turn === "L") {
                    if (robots[i].orientation === "N") {
                        robots[i].orientation = "W";
                    } else if (robots[i].orientation === "S") {
                        robots[i].orientation = "E";
                    } else if (robots[i].orientation === "W") {
                        robots[i].orientation = "S";
                    } else if (robots[i].orientation === "E") {
                        robots[i].orientation = "N";
                    }
                } else if (turn === "R") {
                    if (robots[i].orientation === "N") {
                        robots[i].orientation = "E";
                    } else if (robots[i].orientation === "S") {
                        robots[i].orientation = "W";
                    } else if (robots[i].orientation === "W") {
                        robots[i].orientation = "N";
                    } else if (robots[i].orientation === "E") {
                        robots[i].orientation = "S";
                    }
                } else if (turn === "F") {
                    for (var k = 0; k < dangerZone.length; k++) {

                        if (robots[i].coordX === dangerZone[k].coordX && robots[i].coordY === dangerZone[k].coordY) {
                            inDanger = "true";
                        } else {
                            inDanger = "false";
                        }
                        if (
                            (inDanger === "true" && robots[i].orientation === "E" && robots[i].coordX + 1 > roomSize[0]) ||
                            (inDanger === "true" && robots[i].orientation === "W" && robots[i].coordX - 1 < 0) ||
                            (inDanger === "true" && robots[i].orientation === "N" && robots[i].coordY + 1 > roomSize[1]) ||
                            (inDanger === "true" && robots[i].orientation === "S" && robots[i].coordY - 1 < 0)) {
                        } else {
                            if (k === dangerZone.length - 1) {
                                if (robots[i].Lost !== "LOST") {
                                    dangerZoneCheck(i);
                                }
                            }
                        }
                    }
                }
                populateOutput()
            }

            function dangerZoneCheck(x) {                
                if ((robots[x].coordX + 1 > roomSize[0] && robots[x].orientation === "E") || (robots[x].coordX - 1 < 0 && robots[x].orientation === "W")) {
                    robots[x]["Lost"] = "LOST";
                    dangerZone.push({
                        "coordX": robots[x].coordX,
                        "coordY": robots[x].coordY
                    });
                } else {
                    if (robots[x].orientation === "E") {
                        robots[x].coordX = robots[x].coordX + 1;
                    } else if (robots[x].orientation === "W") {
                        robots[x].coordX = robots[x].coordX - 1;
                    }
                }

                if ((robots[x].coordY + 1 > roomSize[1] && robots[x].orientation === "N") || (robots[x].coordY - 1 < 0 && robots[x].orientation === "S")) {
                    robots[x]["Lost"] = "LOST";
                    dangerZone.push({
                        "coordX": robots[x].coordX,
                        "coordY": robots[x].coordY
                    });
                } else {
                    if (robots[x].orientation === "N") {
                        robots[x].coordY = robots[x].coordY + 1;

                    } else if (robots[x].orientation === "S") {
                        robots[x].coordY = robots[x].coordY - 1;
                    }
                }
            }

            function populateOutput() {
                let message;
                var trigger = setInterval(output, 10);
                let counter = 0;
                let lost = "";
                document.getElementById("output").innerHTML = "";

                function output() {
                    for (var i = 0; i < robots.length; i++) {
                        if (robots[i].job === "done") {
                            robots[i].job = "displayed";
                            counter++
                            if (robots[i].Lost === "LOST") {
                                lost = " " + robots[i].Lost;
                            } else {
                                lost = ""
                            }
                            message = '<p>' + robots[i].coordX + " " + robots[i].coordY + " " + robots[i].orientation + lost + '</p>';
                            document.getElementById("output").innerHTML += message;
                        }
                        if (counter === robots.length) {
                            clearInterval(trigger);
                        }
                    }
                }
            }

        }
    }
    
    textCleanup();
    
}
