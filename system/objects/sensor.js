class Sensor extends Object {
    constructor(pos, rotate = 0,name) {
        super(pos, {width:2, height: 10}, rotate, system_layer_ctx, null, "#000",name);

        this.namePos={x:110,y:-15}
        this.fillStyle = "red";

        this.maxDistance = 100;
        this.detected = false; // Okuma sonucu
        const self=this;
        this.drawCallback=function (){
            const ctx = self.layer;
            ctx.fillRect(-this.size.width / 2 + this.maxDistance, -this.size.height / 2, this.size.width, this.size.height);

        }
    }

    readSensorTo(obj) {
        const rad = degToRad(this.rotate % 360);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        const ctx = this.layer;
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(rad);
        ctx.fillStyle = "#ff0000";
        ctx.fillRect(0, -1, this.maxDistance, 2);
        ctx.restore();

        const sensorStart = this.pos;
        const sensorEnd = {
            x: this.pos.x + this.maxDistance * cos,
            y: this.pos.y + this.maxDistance * sin
        };

        // Tüm kenarları kontrol et
        const intersects = obj.corners.some((corner, index) => {
            const nextCorner = obj.corners[(index + 1) % obj.corners.length];
            return lineIntersects(sensorStart, sensorEnd, corner, nextCorner);
        });

        this.detected = intersects;
    }

    getSensorValue() {
        return this.detected;
    }
}

// Yardımcı çizgi kesişimi fonksiyonu


const sensors=[]

// let sens1 = new Sensor({x: 200, y: 540},-90);


// for (let i = 0; i < 3; i++) {
//     sensors.push(
//         new Sensor({x: 300+((230+30)*i)-60, y: 530},-90)
//     );
// }
// for (let j = 0; j < 3; j++) {
//     for (let i = 0; i < 3; i++) {
//         sensors.push(
//             new Sensor({x: 300+((230+30)*j) -60, y: 340-100*i},0)
//         );
//     }
// }
//
// for(let i = 0; i < sensors.length; i++) {
//     sensors[i].name=`s_${i+1}`
// }

// let sens1 = new Sensor({x: 200, y: 200},-90);
