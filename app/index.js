/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';
import * as THREE from "three"

// ================================
// START YOUR APP HERE
// ================================

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(74, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.domElement)

const update = () => {

}

const render = () => {
    renderer.render(scene, camera)
}

const gameLoop = () => {
    requestAnimationFrame(gameLoop)
    update()
    render()
}

gameLoop()
