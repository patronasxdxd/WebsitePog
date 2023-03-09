import * as THREE from "three";
import Experience from "../Experience.js";
import * as TWEEN from 'tween.js';
// import GSAP from "gsap";
// import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

export default class Room {



    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        // this.time = this.experience.time;
        this.room = this.resources.items.room;
        console.log("here!");
        console.log(this.room);
        this.actualRoom = this.room.scene;
        this.tween = new TWEEN.Tween();

        console.log("acgi");
        console.log(this.actualRoom);
        // this.roomChildren = {};


      

        // this.lerp = {
        //     current: 0,
        //     target: 0,
        //     ease: 0.1,
        // };

        this.setModel();
        // this.setAnimation();
        // this.onMouseMove();
    }
    onMouseMove() {
        window.addEventListener("mousemove", (e) => {
            this.rotation =
                ((e.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
            this.lerp.target = this.rotation * 0.05;
        });
    }


    setModel() {

        
        this.actualRoom.children.forEach((child) => {
            child.castShadow = true;
            child.receiveShadow = true;

            if (child instanceof THREE.Group) {
                child.children.forEach((groupchild) => {
                    // console.log(groupchild.material);
                    groupchild.castShadow = true;
                    groupchild.receiveShadow = true;
                });
            }

            // console.log(child);

            if (child.name === "Aquarium") {
                // console.log(child);
                child.children[0].material = new THREE.MeshPhysicalMaterial();
                child.children[0].material.roughness = 0;
                child.children[0].material.color.set(0x549dd2);
                child.children[0].material.ior = 3;
                child.children[0].material.transmission = 1;
                child.children[0].material.opacity = 1;


                //these two fu
                // child.children[0].material.depthWrite = false;
                // child.children[0].material.depthTest = false;
            }

            if (child.name === "Computer") {
                child.children[1].material = new THREE.MeshBasicMaterial({
                    map: this.resources.items.screen,
                });
            }



            
            const texture = new THREE.TextureLoader().load('/textures/web13.jpeg');
            texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(3, 3.1);
texture.needsUpdate = true;
texture.offset.width = 50;
texture.offset.height = 100;
            if (child.name === "Cube148") {
    
                //material038
                child.material = new THREE.MeshBasicMaterial({
                    map: texture,
                });
            }

                   
            const texture2 = new THREE.TextureLoader().load('/textures/bluex.jpeg');


            if (child.name === "Cube072") {
    
                //material038
                child.material = new THREE.MeshBasicMaterial({
                    map: texture2,
                });
            }





            const socialDiv = document.getElementById("Projects");
        socialDiv.addEventListener("click",function handleClick() {


            const targetPosition = { x: -1, y: 3, z: 10 };

            const startingPosition = {
                x: this.experience.camera.perspectiveCamera.position.x,
                y: this.experience.camera.perspectiveCamera.position.y,
                z: this.experience.camera.perspectiveCamera.position.z
              };
        //     this.experience.camera.perspectiveCamera.position.z = 10;
        //  this.experience.camera.perspectiveCamera.position.y = 3;
        //  this.experience.camera.perspectiveCamera.position.x = -1;  
        const tween = new TWEEN.Tween(startingPosition)
         .to(targetPosition, 2000) // 2000 milliseconds duration
        .easing(TWEEN.Easing.Quadratic.InOut) // Use a quadratic easing function
         .onUpdate(() => {
    // Update the camera position on every frame of the animation
         this.experience.camera.perspectiveCamera.position.set(
        startingPosition.x,
        startingPosition.y,
        startingPosition.z
    );
  })
  .start(); // Start the animation

// Call TWEEN.update() on every frame of your render loop to update the Tween
function render() {
  requestAnimationFrame(render);
  TWEEN.update();
  // Render your Three.js scene here
}
render();
        
            //This moves the tv xddd
        // this.room.scene.children[1].position.y = 10
        }.bind(this));




        const projectDiv = document.getElementById("Socials");
        projectDiv.addEventListener("click",function handleClick() {

            const targetPosition = { x: 7, y: 2, z: 0 };

            const startingPosition = {
                x: this.experience.camera.perspectiveCamera.position.x,
                y: this.experience.camera.perspectiveCamera.position.y,
                z: this.experience.camera.perspectiveCamera.position.z
              };
        //     this.experience.camera.perspectiveCamera.position.z = 10;
        //  this.experience.camera.perspectiveCamera.position.y = 3;
        //  this.experience.camera.perspectiveCamera.position.x = -1;  
        const tween = new TWEEN.Tween(startingPosition)
         .to(targetPosition, 2000) // 2000 milliseconds duration
        .easing(TWEEN.Easing.Quadratic.InOut) // Use a quadratic easing function
         .onUpdate(() => {
    // Update the camera position on every frame of the animation
         this.experience.camera.perspectiveCamera.position.set(
        startingPosition.x,
        startingPosition.y,
        startingPosition.z
    );
  })
  .start(); // Start the animation

// Call TWEEN.update() on every frame of your render loop to update the Tween
function render() {
  requestAnimationFrame(render);
  TWEEN.update();
  // Render your Three.js scene here
}
render();
        
          
        }.bind(this));

        //otherwise this is going to be this.html element from getlementbyid

        // const aboutmeDiv = document.getElementById("Aboutme");
        // aboutmeDiv.addEventListener("click",function handleClick() {
        //     this.experience.camera.perspectiveCamera.position.z = 0;
        //  this.experience.camera.perspectiveCamera.position.y = 2.5;
        //  this.experience.camera.perspectiveCamera.position.x = -2.5;
        // }.bind(this));
           

            // if (child.name === "Mini_Floor") {
            //     child.position.x = -0.289521;
            //     child.position.z = 8.83572;
            // }

            // if (
            //     child.name === "Mailbox" ||
            //     child.name === "Lamp" ||
            //     child.name === "FloorFirst" ||
            //     child.name === "FloorSecond" ||
            //     child.name === "FloorThird" ||
            //     child.name === "Dirt" ||
            //     child.name === "Flower1" ||
            //     child.name === "Flower2"
            // ) {
            //     child.scale.set(0, 0, 0);
            // }

            // child.scale.set(0, 0, 0);
            // if (child.name === "Cube") {
            //     // child.scale.set(1, 1, 1);
            //     child.position.set(0, -1, 0);
            //     child.rotation.y = Math.PI / 4;
            // }

            // this.roomChildren[child.name.toLowerCase()] = child;
        });


        
        // const width = 0.5;
        // const height = 0.7;
        // const intensity = 1;
        // const rectLight = new THREE.RectAreaLight(
        //     0xffffff,
        //     intensity,
        //     width,
        //     height
        // );
        // rectLight.position.set(7.68244, 7, 0.5);
        // rectLight.rotation.x = -Math.PI / 2;
        // rectLight.rotation.z = Math.PI / 4;
        // this.actualRoom.add(rectLight);

        // this.roomChildren["rectLight"] = rectLight;

        // const rectLightHelper = new RectAreaLightHelper(rectLight);
        // rectLight.add(rectLightHelper);
        // console.log(this.room);

        this.scene.add(this.actualRoom);
        // this.actualRoom.scale.set(0.11, 0.11, 0.11);
    }

    


    // setAnimation() {
    //     console(this.room)
    //     this.mixer = new THREE.AnimationMixer(this.actualRoom);
    //     this.swim = this.mixer.clipAction(this.room.animations[0]);
    //     this.swim.play();
    // }


    resize() {}

    update() {
        // this.lerp.current = GSAP.utils.interpolate(
        //     this.lerp.current,
        //     this.lerp.target,
        //     this.lerp.ease
        // );

        this.actualRoom.rotation.y += 10;

        // this.mixer.update(this.time.delta * 0.0009);
    }
}