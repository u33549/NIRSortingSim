class Camera extends Object {
    constructor(pos, rotate = 0, viewContext = null) {

        super(pos, { width: 15, height: 15 }, rotate, camera_layer_ctx, null, "black");
        this.range = { width: 85, height: 40 }; // {width: number, height: number} formatında dikdörtgensel menzil
        this.captureLayer = system_layer_ctx;
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

            if (self.viewData && self.viewContext) {
                const vctx = self.viewContext;
                vctx.canvas.width = self.viewData.width;
                vctx.canvas.height = self.viewData.height;
                vctx.putImageData(self.viewData, 0, 0);
            }
        };
    }

    detectObjectsInView(obj) {
        const rad = degToRad(this.rotate % 360);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const halfW = this.range.width / 2;
        const halfH = this.range.height / 2;
        const dx = obj.pos.x - this.pos.x;
        const dy = obj.pos.y - this.pos.y;

        const forward = dx * cos + dy * sin;
        const lateral = -dx * sin + dy * cos;

        if (forward >= -halfW && forward <= halfW &&
            lateral >= -halfH && lateral <= halfH) {
            console.log("Detected object:", obj);
        }
    }

}



const cams=[]

for (let j = 0; j < 3; j++) {
    cams.push(
        new Camera(
            { x: 350+((230+30)*j)-60, y: 480-80 -0 },
            0,
            camera_view1_ctx
        )
    )
}
