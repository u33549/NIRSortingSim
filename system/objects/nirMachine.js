class NirMachine extends Object {
    constructor(pos, rotate = 0) {

        super(pos, { width: 85, height: 20 }, rotate, system_layer_ctx, null, "black","NIR");
        this.namePos={x:0,y:0}
        this.maxDistance=85;
        const self = this;
        // this.drawPermission=false;
        this.drawCallback = function () {
            const ctx = self.layer;
            ctx.save();
            ctx.translate(0, 0);

            // === NIR Yazısı ===
            // ctx.font = "bold 16px Arial";
            // ctx.fillStyle = "blue";
            // ctx.textAlign = "center";
            // ctx.textBaseline = "middle";
            // ctx.fillText("NIR", 0, 0);

            ctx.restore();


        };
        this.readableValue=null;
    }

    readNIRTo(obj) {
        // Açı
        const rad = degToRad(this.rotate % 360);
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);

        // Sensor ışınının başlangıç noktası (kameranın ucu/merkezi gibi bir yer, senin mantığına göre)
        // Eğer kamera dikdörtgen ise, ucundan başlasın istiyorsan:
        const sensorStart = {
            x: this.pos.x + (this.size.width / 2) * cos,
            y: this.pos.y - (this.size.width / 2) * sin
        };

        // Sensor ışınının sonu
        const sensorEnd = {
            x: sensorStart.x + this.maxDistance * cos,
            y: sensorStart.y + this.maxDistance * sin
        };

        // // --- GÖRSELLEŞTİRME ---
        // const ctx = this.layer;
        // ctx.save();
        // ctx.strokeStyle = "#0000ff";
        // ctx.lineWidth = 2;
        // ctx.beginPath();
        // ctx.moveTo(sensorStart.x, sensorStart.y);
        // ctx.lineTo(sensorEnd.x, sensorEnd.y);
        // ctx.stroke();
        // ctx.restore();

        // --- KESİŞİM TESTİ ---
        const intersects = obj.corners.some((corner, index) => {
            const nextCorner = obj.corners[(index + 1) % obj.corners.length];
            return lineIntersects(sensorStart, sensorEnd, corner, nextCorner);
        });

        this.readableValue=intersects?obj.raw_material:null;
    }


}

const nir= new NirMachine({ x: 150, y: 480 },
    90)
