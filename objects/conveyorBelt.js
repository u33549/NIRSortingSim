class ConveyorBelt extends Object {
    constructor(pos,rotate = 0) {
        super(pos, { width: 100, height: 80 }, rotate, system_layer_ctx, 'assets/beltAsset.png');

        this.scalarSpeed = 10;
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

    applyConveyorForceTo(obj) {
        const { x, y } = obj.pos;
        const bounds = this.bounds;

        const withinX = x >= bounds.topLeft.x && x <= bounds.topRight.x;
        const withinY = y >= bounds.topLeft.y && y <= bounds.bottomLeft.y;

        if (withinX && withinY) {
            obj.addAppliedVector({
                speedX: this.carryingVector.speedX,
                speedY: this.carryingVector.speedY,
                rotateSpeed: 0
            });
        }
    }
}

// Örnek kullanım




const conveyors=[]
for (let i = 0; i < 9; i++) {
    conveyors.push(
        new ConveyorBelt(
            { x: 80+100*i, y: 480 },
            0
        )
    )
}

for (let j = 0; j < 3; j++) {
    for (let i = 1; i < 6; i++) {
        conveyors.push(
            new ConveyorBelt(
                { x: 350+((230+30)*j)-60, y: 480-80*i -0 },
                -90
            )
        )
    }
}



