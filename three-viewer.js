import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const container = document.getElementById('main-product-3d');
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xf8f8f8);

const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight || 1, 0.1, 100);
camera.position.set(0, 1.5, 4);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(container.clientWidth || 600, container.clientHeight || 600);
container.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 2.0;

const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);
const fillLight = new THREE.DirectionalLight(0xffffff, 1);
fillLight.position.set(-5, 0, -5);
scene.add(fillLight);

const loader = new GLTFLoader();
loader.load('mockup.glb', function (gltf) {
    const model = gltf.scene;
    // Center the model
    const box = new THREE.Box3().setFromObject(model);
    const center = box.getCenter(new THREE.Vector3());
    model.position.sub(center);
    scene.add(model);
}, undefined, function (error) {
    console.error('Error loading model:', error);
});

// Handle resize and visibility issues (especially when switching gallery tabs)
const resizeObserver = new ResizeObserver(() => {
    if (container.clientWidth === 0) return; // Hidden
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
});
resizeObserver.observe(container);

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
