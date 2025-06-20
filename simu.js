// FPS ayarı
const FPS = 15;
const frameDuration = 1000 / FPS;

// Ana loop
setInterval(() => {
    // Canvas'ı temizle
    system_layer_ctx.clearRect(0, 0, system_layer.width, system_layer.height);
    camera_layer_ctx.clearRect(0, 0, camera_layer.width, camera_layer.height);

    for (let i = 0; i < conveyors.length; i++) {
        conveyors[i].applyConveyorForceTo(clt1);
        conveyors[i].applyConveyorForceTo(clt2);

        conveyors[i].draw();
    }
    for (let i = 0; i < ejectors.length; i++) {
        ejectors[i].applyEjectForceTo(clt1);
        ejectors[i].applyEjectForceTo(clt2);

        ejectors[i].draw();
    }

    for (let i = 0; i < sensors.length; i++) {
        sensors[i].readSensorTo(clt1);
        sensors[i].readSensorTo(clt2);
        sensors[i].draw();
    }
    cam1.draw()
    clt1.draw();
    clt2.draw();

}, frameDuration);
