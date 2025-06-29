// FPS ayarı
const FPS = 15;
const frameDuration = 1000 / FPS;

// Ana loop
function draw(){
    for (let i = 0; i < conveyors.length; i++) {
        conveyors[i].draw();
    }
    for (let i = 0; i < ejectors.length; i++) {
        ejectors[i].draw();
    }
    for (let i = 0; i < sensors.length; i++) {
        sensors[i].draw();
    }
    for (let i=0; i<cams.length;i++){
        cams[i].draw();
    }
    for(let c=0;c<clothes.length;c++){
        clothes[c].draw();
    }
    nir.draw();

}
function applicatons(){
    for(let c=0;c<clothes.length;c++){
        let clt=clothes[c];
        for (let i = 0; i < conveyors.length; i++) {
            conveyors[i].applyConveyorForceTo(clt);
        }
        for (let i = 0; i < ejectors.length; i++) {
            ejectors[i].applyEjectForceTo(clt);
        }
        for (let i = 0; i < sensors.length; i++) {
            sensors[i].readSensorTo(clt);
        }
        for (let i=0; i<cams.length;i++){
            cams[i].detectObjectsInView(clt);
        }
        nir.readNIRTo(clt);
    }

}

setInterval(() => {
    // Canvas'ı temizle
    system_layer_ctx.clearRect(0, 0, system_layer.width, system_layer.height);
    camera_layer_ctx.clearRect(0, 0, camera_layer.width, camera_layer.height);

    draw();
    applicatons();




}, frameDuration);



//TODO: item queue eklenecek
//TODO: Besleme Kutusu Eklenecek
//TODO: process yapılacak

