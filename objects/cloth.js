const w_sprites = [
    { name: "w1", x: 93, y: 0, w: 23, h: 29 },
    { name: "w2", x: 117, y: 0, w: 16, h: 28 },
    { name: "w3", x: 134, y: 0, w: 28, h: 24 },
    { name: "w4", x: 190, y: 0, w: 28, h: 21 },
    { name: "w5", x: 28, y: 32, w: 30, h: 30 },
    { name: "w6", x: 134, y: 25, w: 28, h: 24 },
    { name: "w7", x: 190, y: 22, w: 16, h: 21 },
    { name: "w8", x: 28, y: 64, w: 23, h: 29 },
    { name: "w9", x: 93, y: 60, w: 21, h: 28 },
    { name: "w10", x: 56, y: 124, w: 29, h: 24 },
    { name: "w11", x: 0, y: 152, w: 30, h: 23 },
    { name: "w12", x: 60, y: 152, w: 28, h: 23 },
    { name: "w13", x: 145, y: 152, w: 16, h: 23 },
    { name: "w14", x: 31, y: 176, w: 29, h: 22 },
];

const m_sprites = [
    { name: "m1", x: 30, y: 0, w: 28, h: 31 },
    { name: "m2", x: 59, y: 0, w: 33, h: 30 },
    { name: "m3", x: 93, y: 30, w: 15, h: 29 },
    { name: "m4", x: 163, y: 24, w: 21, h: 23 },
    { name: "m5", x: 117, y: 58, w: 16, h: 28 },
    { name: "m6", x: 134, y: 50, w: 27, h: 24 },
    { name: "m7", x: 163, y: 48, w: 15, h: 23 },
    { name: "m8", x: 29, y: 95, w: 22, h: 28 },
    { name: "m9", x: 74, y: 95, w: 21, h: 28 },
    { name: "m10", x: 96, y: 95, w: 20, h: 28 },
    { name: "m11", x: 134, y: 75, w: 27, h: 24 },
    { name: "m12", x: 163, y: 72, w: 18, h: 22 },
    { name: "m13", x: 190, y: 66, w: 21, h: 20 },
    { name: "m14", x: 134, y: 100, w: 27, h: 23 },
    { name: "m15", x: 0, y: 124, w: 18, h: 27 },
    { name: "m16", x: 190, y: 108, w: 15, h: 20 },
    { name: "m17", x: 89, y: 152, w: 27, h: 23 },
    { name: "m18", x: 117, y: 152, w: 27, h: 23 },
    { name: "m19", x: 163, y: 140, w: 20, h: 21 },
    { name: "m20", x: 190, y: 129, w: 21, h: 17 },
    { name: "m21", x: 91, y: 176, w: 29, h: 22 },
    { name: "m22", x: 0, y: 199, w: 20, h: 10 },
];

const c_sprites = [
    { name: "c1", x: 0, y: 32, w: 27, h: 31 },
    { name: "c2", x: 59, y: 31, w: 28, h: 30 },
    { name: "c3", x: 52, y: 64, w: 23, h: 29 },
    { name: "c4", x: 76, y: 64, w: 16, h: 29 },
    { name: "c5", x: 190, y: 44, w: 16, h: 21 },
    { name: "c6", x: 52, y: 95, w: 21, h: 28 },
    { name: "c7", x: 117, y: 87, w: 15, h: 23 },
    { name: "c8", x: 163, y: 95, w: 18, h: 22 },
    { name: "c9", x: 37, y: 124, w: 18, h: 26 },
    { name: "c10", x: 134, y: 124, w: 26, h: 23 },
    { name: "c11", x: 163, y: 118, w: 21, h: 21 },
    { name: "c12", x: 31, y: 152, w: 28, h: 23 },
    { name: "c13", x: 163, y: 162, w: 21, h: 11 },
    { name: "c14", x: 61, y: 176, w: 29, h: 22 },
];

const y_sprites = [
    { name: "y1", x: 0, y: 0, w: 29, h: 31 },
    { name: "y2", x: 163, y: 0, w: 26, h: 23 },
    { name: "y3", x: 117, y: 29, w: 16, h: 28 },
    { name: "y4", x: 19, y: 124, w: 17, h: 27 },
    { name: "y5", x: 86, y: 124, w: 29, h: 24 },
    { name: "y6", x: 116, y: 124, w: 16, h: 23 },
    { name: "y7", x: 190, y: 165, w: 20, h: 17 },
    { name: "y8", x: 150, y: 176, w: 28, h: 22 },
];

const o_sprites = [
    { name: "o1", x: 0, y: 64, w: 27, h: 30 },
    { name: "o2", x: 0, y: 95, w: 28, h: 28 },
    { name: "o3", x: 190, y: 87, w: 18, h: 20 },
    { name: "o4", x: 0, y: 176, w: 30, h: 22 },
    { name: "o5", x: 121, y: 176, w: 28, h: 22 },
    { name: "o6", x: 190, y: 183, w: 21, h: 10 },
];
// const sprite_misc = [
//     { name: "sprite65", x: 190, y: 147, w: 21, h: 17 }
// ];

const all_sprites = [...w_sprites,...m_sprites,...c_sprites,...y_sprites,...o_sprites]



let spriteImage = new Image();
spriteImage.src = "assets/spritesheet.png";


function drawSpriteById(ctx, id, x, y, scale = 1) {
    const sprite = all_sprites[id];
    if (!sprite) {
        console.warn(`Sprite with id "${id}" not found.`);
        return;
    }

    ctx.drawImage(
        spriteImage,
        sprite.x, sprite.y,         // Kaynak görseldeki başlangıç noktası
        sprite.w, sprite.h,         // Kaynak görseldeki genişlik ve yükseklik
        x, y,                       // Canvas üzerindeki çizim başlangıç noktası
        sprite.w * scale,          // Canvas'a çizilecek genişlik
        sprite.h * scale           // Canvas'a çizilecek yükseklik
    );
}



class Cloth extends Object {
    constructor(pos, rotate = 0) {
        super(pos, {width: 20, height: 25}, rotate, system_layer_ctx, null, "hotpink");
        this.drawPermission=false;
        this.spriteId = getRandomInt(0, all_sprites.length - 1);

        const self = this;
        this.drawCallback = function () {
            console.log(this.spriteId)
            const ctx = self.layer;
            drawSpriteById(ctx,this.spriteId, 0, 0,1)
        }

    }
}


const clt1 = new Cloth({x: 150, y: 50}, 40)