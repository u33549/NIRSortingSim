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
    for (let i = 0; i < ejectors.length; i++) {
        ejectors[i].applyEjectForceTo(obj1);
        ejectors[i].draw();
    }

    for (let i = 0; i < sensors.length; i++) {
        sensors[i].readSensorTo(obj1);
        sensors[i].draw();
    }

    obj1.draw();
    clt1.draw();
    console.log(sensors[0].detected)

}, frameDuration);
