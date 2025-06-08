class ConveyorBelt extends Object {
    constructor(pos, size, rotate = 0) {
        super(pos, size, rotate, system_layer_ctx, 'assets/beltAsset.png');

        // Taşıma hızı skaleri
        const scalar = 1;

        // Vektörel parçalama (rotasyon açısına göre)
        const rad = degToRad(this.rotate);

        this.carryingSpeed = {
            x: scalar * Math.cos(rad),
            y: scalar * Math.sin(rad)
        };

        // İstersen taşıma vektörünü ayrıca taşı:
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
            obj.addAppliedVector([this.carryingVector.speedX,this.carryingVector.speedY,0]);
        }
    }
}


obj1 = new ConveyorBelt(
    {x: 80, y: 80},
    {width: 100, height: 80},
    90
);

