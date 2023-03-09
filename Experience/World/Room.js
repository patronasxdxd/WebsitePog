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
        this.debug = this.experience.debug
        this.actualRoom = this.room.scene;
        this.tween = new TWEEN.Tween();
        this.sizes = this.experience.sizes;
        this.camera= this.experience.camera;
        console.log("acgi");
        console.log(this.actualRoom);
        this.cursor = new THREE.Vector2()
        console.log(this.experience,"dawdw")
        // this.roomChildren = {};
        this.textureSocial = new THREE.TextureLoader().load('/textures/web13.jpeg');
        this.projectMenu = new THREE.TextureLoader().load('/textures/project1.png');
        this.project11 = new THREE.TextureLoader().load('/textures/project2.png');
        this.project22 = new THREE.TextureLoader().load('/textures/project3.png');
        this.project33 = new THREE.TextureLoader().load('/textures/project4.png');
        this.project44 = new THREE.TextureLoader().load('/textures/project5.png');


        console.log(this.camera,"am")

         this.setLogic()
          this.setProjectControls()
          this.setMenuControls()



        
        


      

        // this.lerp = {
        //     current: 0,
        //     target: 0,
        //     ease: 0.1,
        // };

        this.setModel();
        // this.setAnimation();
        // this.onMouseMove();
    }

    sleep(ms) 
    {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    bigScreenTransition(material,newTexture, duration, toDefault)
    {
        material.uniforms.uTexture2IsDefault.value = toDefault ? 1 : 0

        material.uniforms.uTexture2.value = newTexture
        gsap.to(material.uniforms.uProgress, {value:1,
            duration: duration,
            ease: "power1.inOut",
            onComplete: () => {
                material.uniforms.uTexture1IsDefault.value = toDefault ? 1 : 0 
                material.uniforms.uTexture1.value = newTexture
                material.uniforms.uProgress.value = 0
                
            }
        })
    }

    setLogic()
    {
        this.logic = {}
        this.logic.buttonsLocked = false
        this.logic.mode = 'menu'

        this.logic.lockButtons = async (lockDuration) =>
        {
            this.logic.buttonsLocked = true
            await this.sleep(lockDuration)
            this.logic.buttonsLocked = false
        }
    }



    setProjectControls()
    {
        
        this.projectControls = {}
        this.projectControls.project1 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.sounds.playBloop()
                this.logic.mode = 'projects1'
                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project1Texture,
                    0.2
                )
            }
        }
        this.projectControls.project2 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.sounds.playBloop()
                this.logic.mode = 'projects2'
                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project2Texture,
                    0.2
                )
            }
        }
        this.projectControls.project3 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.sounds.playBloop()
                this.logic.mode = 'projects3'
                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project3Texture,
                    0.2
                )
            }
        }
        this.projectControls.project4 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.sounds.playBloop()
                this.logic.mode = 'projects4'
                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project4Texture,
                    0.2
                )
            }
        }
        this.projectControls.project5 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.sounds.playBloop()
                this.logic.mode = 'projects5'
                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project5Texture,
                    0.2
                )
            }
        }
        this.projectControls.project6 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.sounds.playBloop()
                this.logic.mode = 'projects6'
                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project6Texture,
                    0.2
                )
            }
        }
        this.projectControls.project7 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.sounds.playBloop()
                this.logic.mode = 'projects7'
                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project7Texture,
                    0.2
                )
            }
        }
        this.projectControls.project8 = async () =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'projects0')
            {
                this.sounds.playBloop()
                this.logic.mode = 'projects8'
                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.project8Texture,
                    0.2
                )
            }
        }

        // Go back
        this.projectControls.projectBack = async () =>
        {
            if(this.logic.buttonsLocked === false && (this.logic.mode === 'projects0'))
            {
                this.sounds.playBloop()
                this.logic.lockButtons(1500)
                this.logic.mode = 'menu'
                this.camControls.toDefault()
                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.vendingMachineDefaultTexture,
                    0.4,
                    true
                )
            }

            if(this.logic.buttonsLocked === false && (this.logic.mode === 'projects1' || this.logic.mode === 'projects2' || this.logic.mode === 'projects3'|| this.logic.mode === 'projects4'|| this.logic.mode === 'projects5'|| this.logic.mode === 'projects6'|| this.logic.mode === 'projects7'|| this.logic.mode === 'projects8'))
            {

                console.log("12345678")
           
                this.logic.mode = 'projects0'
                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.vendingMachineMenuTexture,
                    0.2
                )
            }
            console.log('projectBack')
        }

        // Enter
        this.projectControls.projectEnter = async () =>
        {
            console.log('projectEnter')
        }
    }




    setMenuControls()
    {
        this.menuControls = {}
        this.menuControls.projects = async (obj, color) =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menu')
            {
                this.sounds.playClick()
                this.logic.mode = 'projects0'
                this.menuControls.buttonIndicator(obj, color)
                this.camControls.toProjects()

                this.bigScreenTransition(
                    this.materials.vendingMachineScreenMaterial,
                    this.resources.items.vendingMachineMenuTexture,
                    0.2
                )
            }
 
        }
        this.menuControls.jZhou = async (obj, color) =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menu')
            {
                this.sounds.playClick()
                this.sounds.playWhoosh()
                this.menuControls.buttonIndicator(obj, color)
                this.camera.transitions.jZhou(1.5)
            }
        }
        this.menuControls.articles = async (obj, color) =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menu')
            {
                this.sounds.playClick()
                this.menuControls.buttonIndicator(obj, color)
                await this.sleep(250)
                window.open('https://medium.com/@jesse-zhou', '_blank')
            }
        }
        this.menuControls.aboutMe = async (obj, color) =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menu')
            {
                this.sounds.playClick()
                this.logic.mode = 'aboutMe'
                this.menuControls.buttonIndicator(obj, color)
                this.camControls.toAboutMe()

                if(this.config.vertical === true)
                {
                    this.bigScreenTransition(
                        this.materials.bigScreenMaterial,
                        this.resources.items.bigScreenAboutMeMobileTexture,
                        0.2,
                    )
                }
                else
                {
                    this.bigScreenTransition(
                        this.materials.bigScreenMaterial,
                        this.resources.items.bigScreenAboutMeTexture,
                        0.2,
                    )
                }



            }
        }
        this.menuControls.credits = async (obj, color) =>
        {
            if(this.logic.buttonsLocked === false && this.logic.mode === 'menu')
            {
                this.sounds.playClick()
                this.logic.mode = 'creditsStart'
                this.menuControls.buttonIndicator(obj, color)
                this.camControls.toCredits()
            }
        }

        this.menuControls.buttonIndicator = async (obj, color) =>
        {
            if (color === 'black') {
                obj.material = this.ramenShop.materials.whiteSignMaterial
                await this.sleep(200)
                obj.material = this.ramenShop.materials.blackSignMaterial
            }
            if (color === 'white') {
                obj.material = this.ramenShop.materials.blackSignMaterial
                await this.sleep(200)
                obj.material = this.ramenShop.materials.whiteSignMaterial
            }
        }
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


            this.projectsHitBox,
            this.socialsHitBox,
            this.project1,
            this.project2,
            this.project3,
            this.project4,
            this.project5,
            
        ]
        
     
        console.log(camera,'dawa');
       
        this.raycaster.setFromCamera(cursor, camera.perspectiveCamera)
        console.log(this.raycaster);

        console.log(this.objectsToTest,'ca')
        this.intersectsObjects = this.raycaster.intersectObjects(this.objectsToTest)


        
      
        if(this.intersectsObjects.length)
        {
            console.log("DawDWADADW");
            this.selectedModel = this.intersectsObjects[ 0 ].object

            switch (this.selectedModel){
                case this.project1: 
                console.log("working1")
                this.actualRoom.children.forEach((child) => {
    
                    if (child.name === "Computer") {
                        child.children[1].material = new THREE.MeshBasicMaterial({
                            map: this.project11
                        });
                    }})
                break
                case this.project2: 
                console.log("working2")
                this.actualRoom.children.forEach((child) => {
    
                    if (child.name === "Computer") {
                        child.children[1].material = new THREE.MeshBasicMaterial({
                            map: this.project22
                        });
                    }})


                break
                case this.project3: 
                this.actualRoom.children.forEach((child) => {
    
                    if (child.name === "Computer") {
                        child.children[1].material = new THREE.MeshBasicMaterial({
                            map: this.project33
                        });
                    }})
                console.log("working3")
                break
                case this.project4: 
                this.actualRoom.children.forEach((child) => {
    
                    if (child.name === "Computer") {
                        child.children[1].material = new THREE.MeshBasicMaterial({
                            map: this.project44
                        });
                    }})
                console.log("working4")
                break

                case this.project5: console.log("working5")
                // his.projectsHitBox,this.socialsHitBox)
                break

                case this.projectsHitBox:
                    console.log("porject911")
                    
            


            const targetPosition = { x: -1, y: 3, z: 10 };
            const startingPosition = {
                x: camera.perspectiveCamera.position.x,
                y: camera.perspectiveCamera.position.y,
                z: camera.perspectiveCamera.position.z
              };
        //     this.experience.camera.perspectiveCamera.position.z = 10;
        //  this.experience.camera.perspectiveCamera.position.y = 3;
        //  this.experience.camera.perspectiveCamera.position.x = -1;  
        const tween = new TWEEN.Tween(startingPosition)
         .to(targetPosition, 2000) // 2000 milliseconds duration
        .easing(TWEEN.Easing.Quadratic.InOut) // Use a quadratic easing function
         .onUpdate(() => {
    // Update the camera position on every frame of the animation
         camera.perspectiveCamera.position.set(
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
break

                case this.socialsHitBox:
                    console.log("socual911")
                    break
            }
    
            

            


//             const targetPosition = { x: -1, y: 3, z: 10 };
//             const startingPosition = {
//                 x: camera.perspectiveCamera.position.x,
//                 y: camera.perspectiveCamera.position.y,
//                 z: camera.perspectiveCamera.position.z
//               };
//         //     this.experience.camera.perspectiveCamera.position.z = 10;
//         //  this.experience.camera.perspectiveCamera.position.y = 3;
//         //  this.experience.camera.perspectiveCamera.position.x = -1;  
//         const tween = new TWEEN.Tween(startingPosition)
//          .to(targetPosition, 2000) // 2000 milliseconds duration
//         .easing(TWEEN.Easing.Quadratic.InOut) // Use a quadratic easing function
//          .onUpdate(() => {
//     // Update the camera position on every frame of the animation
//          camera.perspectiveCamera.position.set(
//          startingPosition.x,
//         startingPosition.y,
//         startingPosition.z
//     );
//   })
//   .start(); // Start the animation

// // Call TWEEN.update() on every frame of your render loop to update the Tween
// function render() {
//   requestAnimationFrame(render);
//   TWEEN.update();
//   // Render your Three.js scene here
// }
// render();



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


        
               
            

        //hitbox for pole 
        this.projectsHitBox = new THREE.Mesh(
          
            new THREE.BoxGeometry(1.285,0.286,0,65),
            this.hitBoxMaterial
        )

        this.projectsHitBox.position.set(1.9,1.9,-3.6)

        this.socialsHitBox = new THREE.Mesh(
          
            new THREE.BoxGeometry(0.7,0.31,0,65),
            this.hitBoxMaterial
        )

        this.socialsHitBox.position.set(2.3,1.35,-3.6)


        this.signHitBoxes.add(this.projectsHitBox,this.socialsHitBox)
        // this.signHitBoxes.visible = false
        this.scene.add(this.signHitBoxes);


        this.projectHitBoxes = new THREE.Group()
        this.projectHitBoxGeometry = new THREE.PlaneGeometry( 0.35, 0.235 )

        this.project1 = new THREE.Mesh(
            this.projectHitBoxGeometry,
            this.hitBoxMaterial
        )
        this.project1.position.set(1.7,2.32,3.41)

        this.project2 = new THREE.Mesh(
            this.projectHitBoxGeometry,
            this.hitBoxMaterial
        )
        this.project2.position.set(1.7,2.00,3.41)


        this.project3 = new THREE.Mesh(
            this.projectHitBoxGeometry,
            this.hitBoxMaterial
        )
        this.project3.position.set(1.7,1.70,3.41)

        this.project4 = new THREE.Mesh(
            this.projectHitBoxGeometry,
            this.hitBoxMaterial
        )
        this.project4.position.set(1.7,1.40,3.41)

        this.project5 = new THREE.Mesh(
            this.projectHitBoxGeometry,
            this.hitBoxMaterial
        )
        this.project5.position.set(1.7,1.10,3.41)

      
    
        this.projectHitBoxes.add(this.project1, this.project2, this.project3, this.project4, this.project5)
        
        this.scene.add(this.projectHitBoxes);



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

            const projectDiv = document.getElementById("Socials");
            projectDiv.addEventListener("click",function handleClick() {
    
    
    
    
    
                this.actualRoom.children.forEach((child) => {
    
    
                    // texture.wrapS = THREE.RepeatWrapping;
        // texture.wrapT = THREE.RepeatWrapping;
        // texture.repeat.set(3, 3.1);
        // texture.needsUpdate = true;
        // texture.offset.width = 50;
        // texture.offset.height = 100;

    
                    if (child.name === "Computer") {
                        child.children[1].material = new THREE.MeshBasicMaterial({
                            map: this.project33
                        });
                    }})
    
    //             const targetPosition = { x: 7, y: 2, z: 0 };
    
    
    
    
    //             const startingPosition = {
    //                 x: this.camera.perspectiveCamera.position.x,
    //                 y: this.camera.perspectiveCamera.position.y,
    //                 z: this.camera.perspectiveCamera.position.z
    //               };
    //         //     this.experience.camera.perspectiveCamera.position.z = 10;
    //         //  this.experience.camera.perspectiveCamera.position.y = 3;
    //         //  this.experience.camera.perspectiveCamera.position.x = -1;  
    //         const tween = new TWEEN.Tween(startingPosition)
    //          .to(targetPosition, 2000) // 2000 milliseconds duration
    //         .easing(TWEEN.Easing.Quadratic.InOut) // Use a quadratic easing function
    //          .onUpdate(() => {
    //     // Update the camera position on every frame of the animation
    //          this.camera.perspectiveCamera.position.set(
    //         startingPosition.x,
    //         startingPosition.y,
    //         startingPosition.z
    //     );
    //   })
    //   .start(); // Start the animation
    
    // // Call TWEEN.update() on every frame of your render loop to update the Tween
    // function render() {
    //   requestAnimationFrame(render);
    //   TWEEN.update();
    //   // Render your Three.js scene here
    // }
    // render();
            
              
            }.bind(this));



            
            const texture = new THREE.TextureLoader().load('/textures/web13.jpeg');
            this.textureSocial.wrapS = THREE.RepeatWrapping;
            this.textureSocial.wrapT = THREE.RepeatWrapping;
            this.textureSocial.repeat.set(3, 3.1);
            this.textureSocial.needsUpdate = true;
            this.textureSocial.offset.width = 50;
            this.textureSocial.offset.height = 100;
            if (child.name === "Cube148") {
    
                //material038
                child.material = new THREE.MeshBasicMaterial({
                    map: this.textureSocial,
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
                x: this.camera.perspectiveCamera.position.x,
                y: this.camera.perspectiveCamera.position.y,
                z: this.camera.perspectiveCamera.position.z
              };
        //     this.experience.camera.perspectiveCamera.position.z = 10;
        //  this.experience.camera.perspectiveCamera.position.y = 3;
        //  this.experience.camera.perspectiveCamera.position.x = -1;  
        const tween = new TWEEN.Tween(startingPosition)
         .to(targetPosition, 2000) // 2000 milliseconds duration
        .easing(TWEEN.Easing.Quadratic.InOut) // Use a quadratic easing function
         .onUpdate(() => {
    // Update the camera position on every frame of the animation
         this.camera.perspectiveCamera.position.set(
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