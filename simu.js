// FPS ayarı
const FPS = 15;
const frameDuration = 1000 / FPS;

// Ana loop
setInterval(() => {
    // Canvas'ı temizle
    system_layer_ctx.clearRect(0, 0, system_layer.width, system_layer.height);
    for (let i = 0; i < conveyors.length; i++) {
        conveyors[i].applyConveyorForceTo(obj1);
        conveyors[i].draw();
    }
    ejec1.applyEjectForceTo(obj1)
    ejec1.draw();
    obj1.draw();


}, frameDuration);
