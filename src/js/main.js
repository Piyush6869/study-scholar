import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planets/',
  headers: {
    'X-RapidAPI-Key': '46f00d7395msh4061d42046dacd6p15555ejsn726219bdbcd0',
    'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	// console.log(response.data);
  var data=response;

  // let parsedDate = await data.json()
  // console.log(data.data[0].name)
} catch (error) {
	console.error(error);
}




import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const canvass = document.getElementById('ca');
const renderer = new THREE.WebGLRenderer({canvas:canvass,alpha:true});
const canvas = renderer.domElement;
  // look up the size the canvas is being displayed
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;

  // adjust displayBuffer size to match
  if (canvas.width !== width || canvas.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
  }
renderer.setClearColor( 0x000000, 0 )

const textureLoader = new THREE.TextureLoader();
// import starsTexture from '../img/stars.jpg';
// import sunTexture from '../img/sun.jpg';
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

camera.position.z = 5;

function createPlanet(size, texture, ring) {
  const geo = new THREE.SphereGeometry(size, 30, 30);
  const mat = new THREE.MeshStandardMaterial({
      map: textureLoader.load(texture)
  });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh)
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
      scene.add(ringMesh);
      // ringMesh.position.x = position;
      ringMesh.rotation.x = -0.5 * Math.PI;
  }
  // scene.add(obj);
  
  // mesh.position.x = position;
  // interactionManager.add(mesh);
  return mesh
}

document.getElementById("mercury").onclick = function() {  
  // console.log(data.data[0])
  document.getElementById('ca').style.right="120px";
  document.getElementById("change").innerHTML=`<div id="cv">
  <h2>${data.data[0].name}</h2>
  <h3>Planet Order :     <pre>${data.data[0].planetOrder}</pre> </h3>
  <h3>Volume: <pre>${data.data[0].basicDetails.volume}</pre></h3>
  <h3>Mass:<pre>${data.data[0].basicDetails.mass}</pre></h3>
  <h3>${data.data[0].description}</h3>
  
  </div>
  `
  
  
}

document.getElementById("venus").onclick = function() {  
  // console.log(data.data[0])
  document.getElementById('ca').style.right="120px";
  var i=1;
  document.getElementById("change").innerHTML=`<div id="cv">
  <h2>${data.data[i].name}</h2>
  <h3>Planet Order :     <pre>${data.data[i].planetOrder}</pre> </h3>
  <h3>Volume: <pre>${data.data[i].basicDetails.volume}</pre></h3>
  <h3>Mass:<pre>${data.data[i].basicDetails.mass}</pre></h3>
  <h3>${data.data[i].description}</h3>
  
  </div>
  `
  // document.getElementById('ca').setAttribute("hidden", false)
  
}

document.getElementById("earth").onclick = function() {  
  // console.log(data.data[0])
  document.getElementById('ca').style.right="120px";
  var i=2;
  document.getElementById("change").innerHTML=`<div id="cv">
  <h2>${data.data[i].name}</h2>
  <h3>Planet Order :     <pre>${data.data[i].planetOrder}</pre> </h3>
  <h3>Volume: <pre>${data.data[i].basicDetails.volume}</pre></h3>
  <h3>Mass:<pre>${data.data[i].basicDetails.mass}</pre></h3>
  <h3>${data.data[i].description}</h3>
  
  </div>
  `
  // document.getElementById('ca').setAttribute("hidden", false)
  
}
document.getElementById("mars").onclick = function() {  
  // console.log(data.data[0])
  document.getElementById('ca').style.right="120px";
  var i=3;
  document.getElementById("change").innerHTML=`<div id="cv">
  <h2>${data.data[i].name}</h2>
  <h3>Planet Order :     <pre>${data.data[i].planetOrder}</pre> </h3>
  <h3>Volume: <pre>${data.data[i].basicDetails.volume}</pre></h3>
  <h3>Mass:<pre>${data.data[i].basicDetails.mass}</pre></h3>
  <h3>${data.data[i].description}</h3>
  
  </div>
  `
  // document.getElementById('ca').setAttribute("hidden", false)
  
}
document.getElementById("jupiter").onclick = function() {  
  // console.log(data.data[0])
  document.getElementById('ca').style.right="120px";
  var i=4;
  document.getElementById("change").innerHTML=`<div id="cv">
  <h2>${data.data[i].name}</h2>
  <h3>Planet Order :     <pre>${data.data[i].planetOrder}</pre> </h3>
  <h3>Volume: <pre>${data.data[i].basicDetails.volume}</pre></h3>
  <h3>Mass:<pre>${data.data[i].basicDetails.mass}</pre></h3>
  <h3>${data.data[i].description}</h3>
  
  </div>
  `
  // document.getElementById('ca').setAttribute("hidden", false)
  
}
document.getElementById("saturn").onclick = function() {  
  // console.log(data.data[0])
  document.getElementById('ca').style.right="120px";
  var i=5;
  document.getElementById("change").innerHTML=`<div id="cv">
  <h2>${data.data[i].name}</h2>
  <h3>Planet Order :     <pre>${data.data[i].planetOrder}</pre> </h3>
  <h3>Volume: <pre>${data.data[i].basicDetails.volume}</pre></h3>
  <h3>Mass:<pre>${data.data[i].basicDetails.mass}</pre></h3>
  <h3>${data.data[i].description}</h3>
  
  </div>
  `
  // document.getElementById('ca').setAttribute("hidden", false)
  
}
document.getElementById("uranus").onclick = function() {  
  // console.log(data.data[0])
  document.getElementById('ca').style.right="120px";
  var i=6;
  document.getElementById("change").innerHTML=`<div id="cv">
  <h2>${data.data[i].name}</h2>
  <h3>Planet Order :     <pre>${data.data[i].planetOrder}</pre> </h3>
  <h3>Volume: <pre>${data.data[i].basicDetails.volume}</pre></h3>
  <h3>Mass:<pre>${data.data[i].basicDetails.mass}</pre></h3>
  <h3>${data.data[i].description}</h3>
  
  </div>
  `
  // document.getElementById('ca').setAttribute("hidden", false)
  
}
document.getElementById("neptune").onclick = function() {  
  // console.log(data.data[0])
  document.getElementById('ca').style.right="120px";
  var i=7;
  document.getElementById("change").innerHTML=`<div id="cv">
  <h2>${data.data[i].name}</h2>
  <h3>Planet Order :     <pre>${data.data[i].planetOrder}</pre> </h3>
  <h3>Volume: <pre>${data.data[i].basicDetails.volume}</pre></h3>
  <h3>Mass:<pre>${data.data[i].basicDetails.mass}</pre></h3>
  <h3>${data.data[i].description}</h3>
  
  </div>
  `
  document.getElementById('ca').setAttribute("hidden", false)
  
}
const mercury = createPlanet(2, mercuryTexture);
// const venus = createPlanet(5.8, venusTexture);
// const earth = createPlanet(6, earthTexture);
// const mars = createPlanet(4, marsTexture);
// const jupiter = createPlanet(12, jupiterTexture);
// const saturn = createPlanet(10, saturnTexture, {
//     innerRadius: 10,
//     outerRadius: 20,
//     texture: saturnRingTexture
// });
// const uranus = createPlanet(7, uranusTexture,  {
//     innerRadius: 7,
//     outerRadius: 12,
//     texture: uranusRingTexture
// });
// const neptune = createPlanet(7, neptuneTexture);
// const pluto = createPlanet(2.8, plutoTexture);
const light = new THREE.PointLight( 0xffffff, 1,50 );
light.position.set( 10, 0, 5 );
scene.add( light );


const objectAmbientLight = new THREE.AmbientLight(0xffffff, 0.2); 
scene.add(objectAmbientLight);
animate();
function animate() {
    requestAnimationFrame( animate );
  
    // cube.rotation.x += 0.01;
    mercury.rotation.y += 0.01;
  
    renderer.render( scene, camera );
  }
  // mercury.mesh.rotateY(0.004);
  // venus.mesh.rotateY(0.002);
  // earth.mesh.rotateY(0.02);
  // mars.mesh.rotateY(0.018);
  // jupiter.mesh.rotateY(0.04);
  // saturn.mesh.rotateY(0.038);
  // uranus.mesh.rotateY(0.03);
  // neptune.mesh.rotateY(0.032);
  // pluto.mesh.rotateY(0.008);

  // renderer.render(scene, camera);
// }

// renderer.setAnimationLoop(animate);