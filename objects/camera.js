class Camera extends Object {
    constructor(pos, range, rotate = 0, viewContext = null) {
        super(pos, { width: 15, height: 15 }, rotate, camera_layer_ctx, null, "black");
        this.range = range; // {width: number, height: number} formatında dikdörtgensel menzil
        this.captureLayer = system_layer_ctx;
        this.viewContext = viewContext;

        this.viewData = null;

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

    capture(outputCanvas) {
        const sw = this.range.width;
        const sh = this.range.height;
        const sx = this.pos.x - sw / 2;
        const sy = this.pos.y - sh / 2;

        const outputCtx = outputCanvas.getContext('2d');
        outputCanvas.width = sw;
        outputCanvas.height = sh;

        outputCtx.save();
        outputCtx.clearRect(0, 0, sw, sh);

        outputCtx.translate(sw / 2, sh / 2);
        outputCtx.rotate(degToRad(this.rotate));
        outputCtx.translate(-sw / 2, -sh / 2);

        outputCtx.drawImage(
            this.captureLayer.canvas,
            sx, sy, sw, sh,
            0, 0, sw, sh
        );

        outputCtx.restore();
        this.viewData = outputCtx.getImageData(0, 0, sw, sh);
    }

    detectObjectsInView(objects) {
        const rad = degToRad(this.rotate % 360);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const halfW = this.range.width / 2;
        const halfH = this.range.height / 2;

        for (const obj of objects) {
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

    getViewData() {
        return this.viewData;
    }
}

const cam1 = new Camera({ x: 100, y: 480 }, { width: 100, height: 80 }, 90, camera_view1_ctx);
