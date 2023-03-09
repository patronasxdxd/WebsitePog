import * as THREE from "three";
import Experience from "./Experience";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


export default class Camera{
    constructor(){
        this.experience = new Experience;
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;



        this.createPerspectiveCamera();
        this.createOrthographicCamera();
        this.setOrbitControls();
    }

   

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35,
            this.sizes.aspect,
            0.1,
            1000
        );

        // this.perspectiveCamera = new THREE.PerspectiveCamera(
        //     75, // Field of view
        //     window.innerWidth / window.innerHeight, // Aspect ratio
        //     0.1, // Near plane
        //     1000 // Far plane
        //   );
          
        



        this.scene.add(this.perspectiveCamera);
                    // this.perspectiveCamera.position.x = 29;
                    this.perspectiveCamera.position.y = 14;
                    this.perspectiveCamera.position.z = 20;
                    
      


        console.log("camera", this.perspectiveCamera)
    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enableZoom = true;
        
    }


    createOrthographicCamera() {
        // this.frustrum = 5;
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.sizes.aspect * this.sizes.frustrum) / 2,
            (this.sizes.aspect * this.sizes.frustrum) / 2,
            this.sizes.frustrum / 2,
            -this.sizes.frustrum / 2,
            -100,
            100
        );

        // 6.5
        // this.orthographicCamera.position.y = 5.65;
        // this.orthographicCamera.position.z = 10;
        // this.orthographicCamera.rotation.x = -Math.PI / 6;

        this.scene.add(this.orthographicCamera);

 


        // this.helper = new THREE.CameraHelper(this.orthographicCamera);
        // this.scene.add(this.helper);

        const size = 10;
        const divisions = 10;

        // const gridHelper = new THREE.GridHelper(size, divisions);
        // this.scene.add(gridHelper);

        // const axesHelper = new THREE.AxesHelper(10);
        // this.scene.add(axesHelper);
    }


    resize() {
        // Updating Perspective Camera on Resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();

        // Updating Orthographic Camera on Resize
        this.orthographicCamera.left =
            (-this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.right =
            (this.sizes.aspect * this.sizes.frustrum) / 2;
        this.orthographicCamera.top = this.sizes.frustrum / 2;
        this.orthographicCamera.bottom = -this.sizes.frustrum / 2;
        this.orthographicCamera.updateProjectionMatrix();
    }
    
    update() {
        // console.log(this.controls);
        
        // console.log(this.orthographicCamera.position);
      
    

        this.controls.update();
        this.resize();

        // this.resize();

        // this.helper.matrixWorldNeedsUpdate = true;
        // this.helper.update();
        // this.helper.position.copy(this.orthographicCamera.position);
        // this.helper.rotation.copy(this.orthographicCamera.rotation);
    }
}