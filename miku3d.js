
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { VRMLoaderPlugin } from "@pixiv/three-vrm";

const canvas = document.getElementById("miku-canvas");
const container = document.querySelector(".miku-container");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    30,
    1,
    0.1,
    100
);

// Focus on Miku's upper body
camera.position.set(0, 1.25, 3.0);
camera.lookAt(0, 1.25, 0);

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
});

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x000000, 0);

function resizeMiku() {
    const width = container.clientWidth || 650;
    const height = container.clientHeight || 650;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height, false);
}

resizeMiku();
window.addEventListener("resize", resizeMiku);

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(1, 2, 3);
scene.add(light);

scene.add(new THREE.AmbientLight(0xffffff, 1.5));

const loader = new GLTFLoader();
loader.register(parser => new VRMLoaderPlugin(parser));

let miku;

loader.load(
    "./Models/miku.vrm",
    gltf => {
        miku = gltf.userData.vrm;

        // Face the visitor
        miku.scene.rotation.y = Math.PI;
        scene.add(miku.scene);

        // Relax both arms
        const leftArm = miku.humanoid.getNormalizedBoneNode("leftUpperArm");
        const rightArm = miku.humanoid.getNormalizedBoneNode("rightUpperArm");

        if (leftArm) {
            leftArm.rotation.z = 1.0;
        }

        if (rightArm) {
            rightArm.rotation.z = -1.0;
        }

        console.log("Miku is staring at you!");
    },
    undefined,
    error => console.error("Error loading Miku:", error)
);

const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const time = clock.elapsedTime;

    if (miku) {
        miku.update(delta);
        miku.scene.position.y = Math.sin(time * 3) * 0.08;
        miku.scene.position.x = Math.sin(time) * 0.9;
    }

    renderer.render(scene, camera);
}

animate();
