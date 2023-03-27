import * as THREE from "three";
import Experience from "../Experience";
import EventEmitter from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";


export default class Sizes extends EventEmitter{
   constructor(assets){
       super();
       this.experience = new Experience();
       this.renderer = this.experience.renderer;
       this.assets = assets;
    //    this.rendererxd = this.experience.renderer.instance
    //    console.log(this.experience.renderer,'dwadaw');
       this.items = {}
       this.queue = this.assets.length;
       this.loaded = 0;

       this.setLoaders();
       this.startLoading();
   }


   setLoaders() {

    const loadingBar = document.getElementById('loading-bar');
    const Loadingmanagerr = new THREE.LoadingManager();
    
    function updateLoadingBar(progress) {
      const barElement = loadingBar.querySelector('.bar');
      const growingBarElement = loadingBar.querySelector('.growing-bar');
    
      barElement.classList.remove('bar-0', 'bar-10', 'bar-20', 'bar-30', 'bar-40', 'bar-50', 'bar-60', 'bar-70', 'bar-80', 'bar-90', 'bar-100');
      growingBarElement.style.width = `${progress}%`;
      barElement.classList.add(`bar-${Math.floor(progress / 10) * 10}`);
    }
    
    Loadingmanagerr.onProgress = function(url, loaded, total) {
      const progress = (loaded / total) * 100;
      updateLoadingBar(progress);
    }
    
    const progressBarContainer = document.querySelector('.progress-bar-container');
    
    Loadingmanagerr.onLoad = function() {
      document.getElementById('preLoad').style.display = 'none';
    }
    


    this.loaders = {};
    this.loaders.gltfLoader = new GLTFLoader(Loadingmanagerr);
    this.loaders.dracoLoader = new DRACOLoader();
    this.loaders.dracoLoader.setDecoderPath("/draco/");
    this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);


}
startLoading() {
    for (const asset of this.assets) {
        if (asset.type === "glbModel") {
            this.loaders.gltfLoader.load(asset.path, (file) => {
                this.singleAssetLoaded(asset, file);
            });
        } else if (asset.type === "videoTexture") {
            this.video = {};
            this.videoTexture = {};

            this.video[asset.name] = document.createElement("video");
            this.video[asset.name].src = asset.path;
            this.video[asset.name].muted = true;
            this.video[asset.name].playsInline = true;
            this.video[asset.name].autoplay = true;
            this.video[asset.name].loop = true;
            this.video[asset.name].play();

            this.videoTexture[asset.name] = new THREE.VideoTexture(
                this.video[asset.name]
            );
            // this.videoTexture[asset.name].flipY = false;
            this.videoTexture[asset.name].minFilter = THREE.NearestFilter;
            this.videoTexture[asset.name].magFilter = THREE.NearestFilter;
            this.videoTexture[asset.name].generateMipmaps = false;
            this.videoTexture[asset.name].encoding = THREE.sRGBEncoding;

            this.singleAssetLoaded(asset, this.videoTexture[asset.name]);
        } 
    }
}
singleAssetLoaded(asset, file) {
    this.items[asset.name] = file;
    this.loaded++;

    if (this.loaded === this.queue) {
        this.emit("ready");
    }
}
    
}