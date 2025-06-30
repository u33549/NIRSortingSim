class Camera extends Object {
    constructor(pos, rotate = 0, name) {

        super(pos, { width: 35, height: 15 }, rotate, camera_layer_ctx, null, "black",name);
        this.namePos={x:0,y:0};

        this.range = { width: 85, height: 40 }; // {width: number, height: number} formatında dikdörtgensel menzil
        this.captureLayer = system_layer_ctx;
        this.readableValue=null;

        const self = this;
        this.drawCallback = function () {
            const ctx = self.captureLayer;
            ctx.save();
            ctx.translate(self.pos.x, self.pos.y);
            ctx.rotate(degToRad(self.rotate));
            ctx.beginPath();
            ctx.rect(-self.range.width / 2, -self.range.height / 2, self.range.width, self.range.height);
            ctx.strokeStyle = 'blue';
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.restore();


        };
    }

    detectObjectsInView(objs) {
        const rad = degToRad(this.rotate % 360);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const halfW = this.range.width / 2;
        const halfH = this.range.height / 2;

        for (let i = 0; i < objs.length; i++) {
            let obj=objs[i]
            let dx = obj.pos.x - this.pos.x;
            let dy = obj.pos.y - this.pos.y;

            let forward = dx * cos + dy * sin;
            let lateral = -dx * sin + dy * cos;

            if (forward >= -halfW && forward <= halfW &&
                lateral >= -halfH && lateral <= halfH) {
                this.readableValue=obj.color;
                return;
            }
        }
        this.readableValue=null;

    }

    getSensorValue() {
        return this.readableValue;
    }
}



const cams=[]

cams.push(
    new Camera(
        { x: 80+100+5, y: 480 },
        90,
        `cam${1}`
    )
)

for (let j = 0; j < 3; j++) {
    cams.push(
        new Camera(
            { x: 350+((230+30)*j)-60, y: 480-80 -0 },
            0,
            `cam${j+2}`
        )
    )
}

