const system_layer = document.getElementById("system_layer");
const system_layer_ctx = system_layer.getContext("2d");
const aspectRatio = 16 / 9;
const canvasHeight = window.innerHeight * 0.9;
const canvasWidth = canvasHeight * aspectRatio;

system_layer.width = canvasWidth;
system_layer.height = canvasHeight;


class Object {
    constructor(pos, size, rotate = 0, layer, asset = null, color = null, speed = {
        speedX: 0,
        speedY: 0,
        rotateSpeed: 0
    }) {
        this.pos = pos;
        this.size = size;
        this.rotate = rotate; // derece
        this.layer = layer;
        this.asset = asset;
        this.color = color;
        this.speed = speed;

        this.appliedVectors = []; // Uygulanan vektörlerin listesi

        if (this.asset) {
            this.image = new Image();
            this.image.src = this.asset;

            this.image.onload = () => {
                this.imageLoaded = true;
            };
            this.image.onerror = () => {
                this.image = null;
                this.imageLoaded = false;
            };
        }

        this.updateCorners();
        this.updateBounds();
    }

    updateCorners() {
        const w = this.size.width / 2;
        const h = this.size.height / 2;
        const rad = degToRad(this.rotate);

        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        const rotatePoint = (x, y) => {
            return {
                x: this.pos.x + (x * cos - y * sin),
                y: this.pos.y + (x * sin + y * cos)
            };
        };

        this.corners = [
            rotatePoint(-w, -h), // topLeft
            rotatePoint(+w, -h), // topRight
            rotatePoint(+w, +h), // bottomRight
            rotatePoint(-w, +h)  // bottomLeft
        ];
    }

    updateBounds() {
        const xs = this.corners.map(c => c.x);
        const ys = this.corners.map(c => c.y);

        const minX = Math.min(...xs);
        const maxX = Math.max(...xs);
        const minY = Math.min(...ys);
        const maxY = Math.max(...ys);

        this.bounds = {
            topLeft: {x: minX, y: minY},
            topRight: {x: maxX, y: minY},
            bottomRight: {x: maxX, y: maxY},
            bottomLeft: {x: minX, y: maxY}
        };
    }

    applySpeed() {
        this.pos.x += this.speed.speedX;
        this.pos.y += this.speed.speedY;
        this.rotate += this.speed.rotateSpeed;
    }

    setSpeed(speedX = this.speed.speedX, speedY = this.speed.speedY, rotateSpeed = this.speed.rotateSpeed) {
        this.speed = {speedX, speedY, rotateSpeed};
    }

    addAppliedVector(vector) {
        this.appliedVectors.push(vector);
    }

    calculateResultantSpeed() {
        let result = {speedX: 0, speedY: 0, rotateSpeed: 0};

        for (const v of this.appliedVectors) {
            result.speedX += v.speedX;
            result.speedY += v.speedY;
            result.rotateSpeed += v.rotateSpeed;
        }

        this.setSpeed(result.speedX, result.speedY, result.rotateSpeed);
    }

    clearAppliedVectors() {
        this.appliedVectors = [];
    }

    calc() {
        this.applySpeed();
        this.updateCorners();
        this.updateBounds();
        this.calculateResultantSpeed();
        this.clearAppliedVectors();

    }

    draw() {
        const ctx = this.layer;
        ctx.save();

        const angleInRadians = degToRad(this.rotate);
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(angleInRadians);

        if (this.image && this.image.complete && this.image.naturalWidth !== 0) {
            ctx.drawImage(this.image, -this.size.width / 2, -this.size.height / 2, this.size.width, this.size.height);
        } else if (this.color) {
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size.width / 2, -this.size.height / 2, this.size.width, this.size.height);
        } else {
            ctx.fillStyle = "hotpink";
            ctx.fillRect(-this.size.width / 2, -this.size.height / 2, this.size.width, this.size.height);
        }

        ctx.restore();
        this.calc()

    }
}


let obj2 = new Object(
    {x: 80, y: 80},
    {width: 20, height: 20},
    0,
    system_layer_ctx,
    null,
    null
);
// obj1.setSpeed(1,1,0.1)

// obj1.draw();
