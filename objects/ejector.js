class Ejector extends Object {
    constructor(pos, rotate = 0,name) {
        super(pos, { width: 50, height: 10 }, rotate, system_layer_ctx, null, "#c5c5c5",name);

        this.namePos={x:0,y:-15}
        this.fillStyle = "green";
        this.scalarSpeed = 50;
        this.pushPermission = false; // Yeni özellik
        this.updateCarryingVector();
    }

    updateCarryingVector() {
        const rad = degToRad(this.rotate % 360);

        const cos = Math.abs(Math.cos(rad)) < 1e-10 ? 0 : Math.cos(rad);
        const sin = Math.abs(Math.sin(rad)) < 1e-10 ? 0 : Math.sin(rad);

        this.carryingSpeed = {
            x: this.scalarSpeed * cos,
            y: this.scalarSpeed * sin
        };

        this.carryingVector = {
            speedX: this.carryingSpeed.x,
            speedY: this.carryingSpeed.y,
            rotateSpeed: 0
        };
    }

    applyEjectForceTo(obj) {
        const rad = degToRad(this.rotate % 360);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        const halfW = this.size.width / 2;
        const ejectorRightCenter = {
            x: this.pos.x + halfW * cos,
            y: this.pos.y + halfW * sin
        };

        const maxDistance = 70;
        const maxOffset = 15;

        const dx = obj.pos.x - ejectorRightCenter.x;
        const dy = obj.pos.y - ejectorRightCenter.y;

        const forwardComponent = dx * cos + dy * sin;
        const lateralComponent = -dx * sin + dy * cos;

        const ctx = this.layer;
        ctx.save();
        ctx.translate(ejectorRightCenter.x, ejectorRightCenter.y);
        ctx.rotate(rad);
        ctx.strokeStyle = "rgba(0, 255, 0, 0.6)";
        ctx.lineWidth = 1;
        ctx.strokeRect(0, -maxOffset, maxDistance, maxOffset * 2);
        ctx.restore();

        if (this.pushPermission &&
            forwardComponent >= 0 && forwardComponent <= maxDistance &&
            lateralComponent >= -maxOffset && lateralComponent <= maxOffset) {
            obj.addAppliedVector({
                speedX: this.carryingVector.speedX,
                speedY: this.carryingVector.speedY,
                rotateSpeed: 0
            });
        }
    }
    setPushPermission(value) {
        this.pushPermission = value === true;
    }
}


const ejectors=[]

for (let i = 0; i < 3; i++) {
    ejectors.push(new Ejector(
        { x: 330+((230+30)*i)-60, y: 550 },
        -90,
        `e_${i*4+1}`
    ));
}

ejectors[2].setPushPermission(true);

for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
        ejectors.push(new Ejector(
            { x: 280+((230+30)*j) -60, y: 320-100*i },0,`e_${j*4+i+2}`
        ));
    }
}


// const conveyors=[]
// for (let i = 0; i < 9; i++) {
//     conveyors.push(
//         new ConveyorBelt(
//             { x: 80+100*i, y: 480 },
//             { width: 100, height: 80 },
//             0
//         )
//     )
// }

