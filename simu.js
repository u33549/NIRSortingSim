// FPS ayarı
const FPS = 15;
const frameDuration = 1000 / FPS;

// Ana loop
setInterval(() => {
    // Canvas'ı temizle
    system_layer_ctx.clearRect(0, 0, system_layer.width, system_layer.height);
    // obj1.applyConveyorForceTo(obj2)
    obj1.draw();
    obj2.draw();


}, frameDuration);
