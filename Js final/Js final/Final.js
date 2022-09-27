//escena
const scene = new THREE.Scene();

var loader = new THREE.TextureLoader();
loader.load('./Img/fondo4.png', function(texture){
    scene.background = texture;
});

//camara
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000 );
    
camera.position.z = 15;
camera.position.x = 10;
camera.position.y = 6;

const blight = new THREE.AmbientLight(0xffffff);
scene.add(blight)

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement );

//elementos
const gltfLoader = new THREE.GLTFLoader();

gltfLoader.load("./ninja/scene.gltf",
(gltf) =>{
    var loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(1.5,1.5,1.5);
    scene.add(loaderObjeto);

    loaderObjeto.position.x = 2.1
    loaderObjeto.position.y = 4.5
    loaderObjeto.position.z = 9

    loaderObjeto.rotation.y = 5.5

    const dcontrol = new THREE.DragControls([loaderObjeto], camera, renderer.domElement);
    dcontrol.deactivate();
    dcontrol.activate();
})

const gltfLoader2 = new THREE.GLTFLoader();

gltfLoader2.load("./dragon_ver2/scene.gltf",
(gltf) =>{
    var loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(1,1,1);
    scene.add(loaderObjeto2);

    loaderObjeto2.position.x = 15.5
    loaderObjeto2.position.y = 10.9
    loaderObjeto2.position.z = -20

    loaderObjeto2.rotation.y = 3.5
    loaderObjeto2.rotation.x = 6.4

    const dcontrol2 = new THREE.DragControls([loaderObjeto2], camera, renderer.domElement);
    dcontrol2.deactivate();
    dcontrol2.activate();
})

const gltfLoader3 = new THREE.GLTFLoader();

gltfLoader3.load("./ninja2/scene.gltf",
(gltf) =>{
    var loaderObjeto3 = gltf.scene;
    loaderObjeto3.scale.set(9,9,9);
    scene.add(loaderObjeto3);

    loaderObjeto3.position.x = 51
    loaderObjeto3.position.y = 2  
    loaderObjeto3.position.z = -17

    loaderObjeto3.rotation.y = 5
    
})

const geometry = new THREE.SphereGeometry( 4, 20, 10 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF3300} );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

sphere.position.x = 32;
sphere.position.y = 16;

const dcontrol4 = new THREE.DragControls([sphere], camera, renderer.domElement);

//animacion

function animate() {
    requestAnimationFrame( animate );

    sphere.rotation.y += 0.05;

    renderer.render( scene, camera );
}
animate();  