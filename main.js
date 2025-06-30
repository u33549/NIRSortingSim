function read_cams() {
    cameraValue[1] = cameraValue[0];
    cameraValue[0] = cams[0].getSensorValue();
}

function read_nir() {
    NIRValue[1] = NIRValue[0]
    NIRValue[0] = nir.getSensorValue();
}

function add_ejectorToggle(id, time) {
    processQueue.push({ejectorId: id, timer: time});
    processQueue.push({ejectorId: id, timer: time + 3});
}

let STATE = "READING";

let processQueue = []

const NIRValue = [null, null];
const cameraValue = [null, null];

let item = null;

// ["nylon","polyester","cotton"]

function loop() {

    if (STATE == "READING") {
        read_cams();
        read_nir();
        STATE = "SORT"
    }

    if (STATE == "SORT") {
        if (NIRValue[1] == null && NIRValue[0] != null) {
            item = {
                nir: NIRValue[0],
                color: null
            };
        }
        if (cameraValue[1] == null && cameraValue[0] != null) {
            item.color = cameraValue[0];
            // console.log(item)

            // console.table(unCalculatedItems);
        }
        STATE = "CALCULATING";
    }
    if (STATE == "CALCULATING") {
        if (item && item.color && item.color !== "o") {
            // console.log(item)
            let timerBase;
            let mainLineEjectorId;


            if (item.nir == "nylon") {
                timerBase = 8;
                mainLineEjectorId=1;


            }
            else if (item.nir == "polyester") {
                timerBase = 8+24;
                mainLineEjectorId=2;
            }
            else if (item.nir == "cotton") {
                timerBase = 8+24*2;
                mainLineEjectorId=3;
            }
            if(!timerBase && !mainLineEjectorId){return;}

            let subEjectorId=mainLineEjectorId*3+1;
            add_ejectorToggle(mainLineEjectorId, timerBase)

            if (item.color == "m") {
                add_ejectorToggle(subEjectorId, timerBase + 5)
            }
            else if (item.color == "c") {
                // console.log(item)
                add_ejectorToggle(subEjectorId+1, timerBase + 5 + 8)
            }
            else if (item.color == "y") {
                // console.log(item)
                add_ejectorToggle(subEjectorId+2, timerBase + 5 + 8 + 8)
            }

            item = null;
            // console.log("aaa")
        }

        STATE = "COUNTING"


    }
    if (STATE == "COUNTING") {
        processQueue = processQueue.filter(item => item.timer > 0);
        for (i = 0; i < processQueue.length; i++) {
            processQueue[i].timer--;
        }
        STATE = "ACTION";
    }
    if (STATE == "ACTION") {
        let actionList = processQueue.filter(item => item.timer == 0);
        if (actionList.length > 0) {
            // console.table(actionList)
        }
        for (i = 0; i < actionList.length; i++) {
            ejectors[actionList[i].ejectorId - 1].togglePushPermission();
        }
        STATE = "WAITING";
    }

    if (STATE == "WAITING") {
        // console.log("I am WAITING");
        STATE = "READING";
        // console.log("------------")


    }
}