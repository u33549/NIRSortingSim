const system_layer = document.getElementById("system_layer");
const system_layer_ctx = system_layer.getContext("2d");

const camera_layer = document.getElementById("camera_layer");
const camera_layer_ctx = camera_layer.getContext("2d");

const camera_view1 = document.getElementById("cam1");
const camera_view1_ctx = camera_view1.getContext("2d");

const aspectRatio = 16 / 9;
const canvasHeight = window.innerHeight * 0.9;
const canvasWidth = canvasHeight * aspectRatio;

system_layer.width = canvasWidth;
system_layer.height = canvasHeight;

camera_layer.width = canvasWidth;
camera_layer.height = canvasHeight;

camera_view1.width = 300;
camera_view1.height = 240;

const transformX=0;
const transformY=40;


