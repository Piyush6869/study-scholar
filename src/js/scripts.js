import * as THREE from 'three';

import { InteractionManager } from 'three.interactive';
// import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import starsTexture from '../img/stars.jpg';
import sunTexture from '../img/sun.jpg';
import mercuryTexture from '../img/mercury.jpg';
import venusTexture from '../img/venus.jpg';
import earthTexture from '../img/earth.jpg';
import marsTexture from '../img/mars.jpg';
import jupiterTexture from '../img/jupiter.jpg';
import saturnTexture from '../img/saturn.jpg';
import saturnRingTexture from '../img/saturn ring.png';
import uranusTexture from '../img/uranus.jpg';
import uranusRingTexture from '../img/uranus ring.png';
import neptuneTexture from '../img/neptune.jpg';
import plutoTexture from '../img/pluto.jpg';

const canvass = document.getElementById('c');
const renderer = new THREE.WebGLRenderer({canvas:canvass});
renderer.setSize(window.innerWidth, window.innerHeight);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

// const orbit = new OrbitControls(camera, renderer.domElement);

// camera.position.set(-90, 140, 140);
// camera.lookAt(0, 0, 300);
// orbit.update();
// camera.position.set(-90, 140, 140);
camera.position.x=50;
camera.position.y=30;
camera.position.z=200;

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
]);
const interactionManager = new InteractionManager(
    renderer,
    camera,
    renderer.domElement
  );
const helper=new THREE.GridHelper();
scene.add(helper);

const textureLoader = new THREE.TextureLoader();


function createPlanete(size, texture, position, ring) {
    const geo = new THREE.SphereGeometry(size, 30, 30);
    const mat = new THREE.MeshStandardMaterial({
        map: textureLoader.load(texture)
    });
    const mesh = new THREE.Mesh(geo, mat);
    const obj = new THREE.Object3D();
    obj.add(mesh);
    if(ring) {
        const ringGeo = new THREE.RingGeometry(
            ring.innerRadius,
            ring.outerRadius,
            32);
        const ringMat = new THREE.MeshBasicMaterial({
            map: textureLoader.load(ring.texture),
            side: THREE.DoubleSide
        });
        const ringMesh = new THREE.Mesh(ringGeo, ringMat);
        obj.add(ringMesh);
        ringMesh.position.x = position;
        ringMesh.rotation.x = -0.5 * Math.PI;
    }
    scene.add(obj);
    
    mesh.position.x = position;
    interactionManager.add(mesh);
    return {mesh, obj}
}
const sun=createPlanete(16,sunTexture,0)
const mercury = createPlanete(3.2, mercuryTexture, 28);
const venus = createPlanete(5.8, venusTexture, 44);
const earth = createPlanete(6, earthTexture, 62);
const mars = createPlanete(4, marsTexture, 78);
const jupiter = createPlanete(12, jupiterTexture, 100);
const saturn = createPlanete(10, saturnTexture, 138, {
    innerRadius: 10,
    outerRadius: 20,
    texture: saturnRingTexture
});
const uranus = createPlanete(7, uranusTexture, 176, {
    innerRadius: 7,
    outerRadius: 12,
    texture: uranusRingTexture
});
const neptune = createPlanete(7, neptuneTexture, 200);
const pluto = createPlanete(2.8, plutoTexture, 216);

const pointLight = new THREE.PointLight(0xFFFFFF, 2, 300);
scene.add(pointLight);


const objectAmbientLight = new THREE.AmbientLight(0xffffff, 1); 
sun.mesh.add(objectAmbientLight);


    let rotationEnabled = true; 
    sun.mesh.addEventListener('click', function () {
        focusOnObject(sun.mesh.position);
      });

    mercury.mesh.addEventListener('click', function () {
        focusOnObject(mercury.mesh.position);
      
      rotationEnabled = !rotationEnabled;
        if (rotationEnabled) {
            mercury.mesh.position.x=28;
            mercury.rotateY(0);
          }
        });
      venus.mesh.addEventListener('click', function () {
        focusOnObject(venus.mesh.position);
        
        rotationEnabled = !rotationEnabled;
        if (rotationEnabled) {
            venus.mesh.position.x=44;
            venus.rotateY(0);
          }
        });
      
      earth.mesh.addEventListener('click', function () {
        focusOnObject(earth.mesh.position);
        rotationEnabled = !rotationEnabled;
        if (rotationEnabled) {
            earth.mesh.position.x=62;
            earth.rotateY(0);
          }
        });
      
      mars.mesh.addEventListener('click', function () {
        focusOnObject(mars.mesh.position);
        rotationEnabled = !rotationEnabled;
        if (rotationEnabled) {
            mars.mesh.position.x=78;
            mars.rotateY(0);
          }
        });
      
      jupiter.mesh.addEventListener('click', function () {
        jupiter.mesh.position.set(100, 0, 0);
        rotationEnabled = !rotationEnabled;
        if (rotationEnabled) {
            
            jupiter.rotateY(0);
          }
        focusOnObject(jupiter.mesh.position);
      });
      
      saturn.mesh.addEventListener('click', function () {
        focusOnObject(saturn.mesh.position);
        rotationEnabled = !rotationEnabled;
        if (rotationEnabled) {
            saturn.mesh.position.x=138;
            saturn.rotateY(0);
          }
        });
      
      uranus.mesh.addEventListener('click', function () {
        focusOnObject(uranus.mesh.position);
        rotationEnabled = !rotationEnabled;
        if (rotationEnabled) {
            uranus.mesh.position.x=176;
            uranus.rotateY(0);
          }
        });
      
      neptune.mesh.addEventListener('click', function () {
        focusOnObject(neptune.mesh.position);
        rotationEnabled = !rotationEnabled;
        if (rotationEnabled) {
            neptune.mesh.position.x=200;
            neptune.rotateY(0);
          }
        });
      
      pluto.mesh.addEventListener('click', function () {
        focusOnObject(pluto.mesh.position);
        rotationEnabled = !rotationEnabled;
        if (rotationEnabled) {
            pluto.mesh.position.x=216;
            pluto.rotateY(0);
          }
        });
      



function focusOnObject(objectPosition) {
    const duration = 2; 
  

    const animation = gsap.timeline();

    animation.to(
      camera.position,
      {
        x: objectPosition.x + 30,
        y: objectPosition.y + 30,
        z: objectPosition.z + 30,
        duration: duration,
        ease: 'power3.inOut',
      },
      0
    );

    animation.to(
        orbit.target,
        {
            x: objectPosition.x,
            y: objectPosition.y,
            z: objectPosition.z,
            duration: duration,
            ease: 'power3.inOut',
            onUpdate: function () {
                orbit.update();
              },
            },
            0
          );
        
          animation.call(() => {
            camera.lookAt(objectPosition);
          });
        
          animation.play();
          
        }
  

  // ...
  
 
  
      


function animate() {
    sun.mesh.rotateY(0.004);
    mercury.mesh.rotateY(0.004);
    venus.mesh.rotateY(0.002);
    earth.mesh.rotateY(0.02);
    mars.mesh.rotateY(0.018);
    jupiter.mesh.rotateY(0.04);
    saturn.mesh.rotateY(0.038);
    uranus.mesh.rotateY(0.03);
    neptune.mesh.rotateY(0.032);
    pluto.mesh.rotateY(0.008);

    if (rotationEnabled) {
    mercury.obj.rotateY(0.04);
    }
    if(rotationEnabled){
    venus.obj.rotateY(0.015);
    }if(rotationEnabled){
    
    earth.obj.rotateY(0.01);
}if(rotationEnabled){
    mars.obj.rotateY(0.008);
}
    if (rotationEnabled) {
    jupiter.obj.rotateY(0.002);
    }if(rotationEnabled){
    saturn.obj.rotateY(0.0009);
}if(rotationEnabled){
    uranus.obj.rotateY(0.0004);}if(rotationEnabled){
    neptune.obj.rotateY(0.0001);}if(rotationEnabled){
    pluto.obj.rotateY(0.00007);}

    

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);



window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
});

const canvas = document.querySelector('canvas');

canvas.addEventListener('wheel', function(e) {
  e.preventDefault();
}, { passive: false });
