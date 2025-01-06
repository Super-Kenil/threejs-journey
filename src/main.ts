import * as THREE from 'three'
import gsap from 'gsap'
import motion from 'motion'

const canvasEl = document.getElementById('webgl-canvas')!
// console.info(canvasEl)
console.info('Threejs:', THREE)

// Scene
const scene = new THREE.Scene()

// Object
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xf00ff0 })
)
scene.add(cube1)

/* Axes Helper*/
// const axesHelper = new THREE.AxesHelper(2)
// scene.add(axesHelper)

// Sizes
const sizes = {
  width: 800, height: 600
}

// Camera
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1* aspectRatio, 1*aspectRatio, 1, -1,0.1,100)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 3)
camera.lookAt(cube1.position)

// camera.rotateOnAxis(camera.position,0.05)
/*console.info('distance to', mesh.position.distanceTo(camera.position))*/
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvasEl,
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

const clock = new THREE.Clock()

const tick = () => {

  const elapsedTime = clock.getElapsedTime()

  cube1.rotation.y = elapsedTime

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)

}
tick()
