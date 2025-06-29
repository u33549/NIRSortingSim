// FPS ayarı
const FPS = 15;
const frameDuration = 1000 / FPS;

// Ana loop
setInterval(() => {
    // Canvas'ı temizle
    system_layer_ctx.clearRect(0, 0, system_layer.width, system_layer.height);
    camera_layer_ctx.clearRect(0, 0, camera_layer.width, camera_layer.height);

    for(let c=0;c<clothes.length;c++){
        let clt=clothes[c];

        for (let i = 0; i < conveyors.length; i++) {
            conveyors[i].applyConveyorForceTo(clt);
            conveyors[i].draw();
        }
        for (let i = 0; i < ejectors.length; i++) {
            ejectors[i].applyEjectForceTo(clt);
            ejectors[i].draw();
        }
        for (let i = 0; i < sensors.length; i++) {
            sensors[i].readSensorTo(clt);
            sensors[i].draw();
        }
        for (let i=0; i<cams.length;i++){
            cams[i].draw();
            cams[i].detectObjectsInView(clt);

        }
    }
    for(let c=0;c<clothes.length;c++){
        let clt=clothes[c];
        clt.draw();
    }




}, frameDuration);



