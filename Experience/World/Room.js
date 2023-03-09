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
        this.raycaster = new THREE.Raycaster()
        console.log("here!");
        console.log(this.room);
        this.actualRoom = this.room.scene;
        this.tween = new TWEEN.Tween();
        this.sizes = this.experience.sizes;
        this.camera= this.experience.camera;
        console.log("acgi");
        console.log(this.actualRoom);
        this.cursor = new THREE.Vector2()

        // this.roomChildren = {};

        console.log(this.camera,"am")


        
        


      

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

    click(cursor,camera)
    {

        this.objectsToTest = [


            this.projectsHitBox

        ]
        
     
        console.log(camera,'dawa');
       
        this.raycaster.setFromCamera(cursor, camera.perspectiveCamera)
        console.log(this.raycaster);

        console.log(this.objectsToTest,'ca')
        this.intersectsObjects = this.raycaster.intersectObjects(this.objectsToTest)

        // console.log(intersectsObjects);
        if(this.intersectsObjects.length)
        {
            this.selectedModel = this.intersectsObjects[ 0 ].object
            console.log("DawDWADADW");
            console.log(this.selectedModel);

    }
}


    setModel() {


     

        this.touchedPoints = []


        window.addEventListener('pointerdown', (event) =>
        {
            this.touchedPoints.push(event.pointerId)

            this.cursorXMin = Math.abs((event.clientX / this.sizes.width * 2 - 1)*0.9)
            this.cursorXMax = Math.abs((event.clientX / this.sizes.width * 2 - 1)*1.1)

            this.cursorYMin = Math.abs((event.clientY / this.sizes.height * 2 - 1)*0.9)
            this.cursorYMax = Math.abs((event.clientY / this.sizes.height * 2 - 1)*1.1)

        })


         window.addEventListener('pointerup', (event) =>
            {
                this.cursor.x = event.clientX / this.sizes.width * 2 - 1
                this.cursor.y = - (event.clientY / this.sizes.height) * 2 + 1

                this.absX = Math.abs(this.cursor.x)
                this.absY = Math.abs(this.cursor.y)

                if(this.touchedPoints.length === 1 && 
                this.absX > this.cursorXMin && this.absX < this.cursorXMax &&
                this.absY > this.cursorYMin && this.absY < this.cursorYMax) 

                {
                this.click(this.cursor,this.camera)

                this.touchedPoints = []
                }
                else
                {this.touchedPoints = []}
            })

        this.signHitBoxes = new THREE.Group()
        this.hitBoxMaterial = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true} )


        this.projectsHitBox = new THREE.Mesh(
          
            new THREE.BoxGeometry(1.285,0.286,0,65),
            this.hitBoxMaterial
        )

        this.projectsHitBox.position.set(1.9,1.9,-3.6)


        this.signHitBoxes.add(this.projectsHitBox)
        // this.signHitBoxes.visible = false

        this.scene.add(this.signHitBoxes);

        // new THREE.BoxGeometry( 2.0, 1.9, -3.6 ),


//         const width = 0.437 + 0.648;
// const height = 0.143 + 0.14311708509;
// const depth = 0.0035 +0.003;

// // log the dimensions of the bounding box
// console.log('Width:', width);
// console.log('Height:', height);
// console.log('Depth:', depth);

//         // x
        // : 
        // 2.0103750228881836
        // y
        // : 
        // 1.8874212503433228
        // z
        // : 
        // -3.601562261581421

       
          
          
          


        this.aboutMeBoxes = new THREE.Group()


        this.aboutMeHitBoxGeometry = new THREE.PlaneGeometry( 0.3, 0.2 )

        this.aboutMeBack = new THREE.Mesh(
            new THREE.PlaneGeometry( 0.3, 0.2 ),
            this.hitBoxMaterial
        )
        this.aboutMeBack.position.set(0.12, 4.58, 0.58)

        this.aboutMeScreens = new THREE.Mesh(
            this.aboutMeHitBoxGeometry,
            this.hitBoxMaterial
        )
        this.aboutMeScreens.position.set(0.45, 4.58, 0.58)

        this.skills = new THREE.Mesh(
            this.aboutMeHitBoxGeometry,
            this.hitBoxMaterial
        )
        this.skills.position.set(0.78, 4.58, 0.58)

        this.experience = new THREE.Mesh(
            new THREE.PlaneGeometry( 0.45, 0.2 ),
            this.hitBoxMaterial
        )
        this.experience.position.set(1.15, 4.58, 0.58)
        

        this.aboutMeBoxes.add(this.aboutMeBack, this.aboutMeScreens, this.skills, this.experience)
        this.aboutMeBoxes.visible = false

        this.scene.add(this.aboutMeBoxes)

        
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