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
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(cube1)

/* Axes Helper*/
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Sizes
const sizes = {
  width: 800, height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0, 0, 3)

// camera.rotateOnAxis(camera.position,0.05)
/*console.info('distance to', mesh.position.distanceTo(camera.position))*/
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvasEl,
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

gsap.to(cube1.position, { x: 2, duration: 1, delay: 1, })
gsap.to(cube1.position, { x: 0, duration: 1, delay: 2.5, })
const tick = () => {

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)

}
tick()

// animation with THREE.Clock and clock.getElapsedTime
// const clock = new THREE.Clock()

// const tick = () => {

//   const elapsedTime = clock.getElapsedTime()
//   // cube1.rotation.y = elapsedTime * Math.PI

//   cube1.position.y = Math.cos(elapsedTime)
//   cube1.position.x = Math.sin(elapsedTime)

//   camera.position.x = Math.cos(elapsedTime)
//   camera.position.y = Math.sin(elapsedTime)

//   camera.lookAt(cube1.position)

//   renderer.render(scene, camera)
//   window.requestAnimationFrame(tick)

// }
// tick()

// animation with Date.Now and delta time
// let time = Date.now()
// const tick = () => {

//   // Time
//   const currentTime = Date.now()
//   const deltaTime = currentTime - time
//   time = currentTime

//   // update objects
//   cube1.rotation.y += 0.001 * deltaTime

//   // Render
//   renderer.render(scene, camera)
//   window.requestAnimationFrame(tick)
// }
// tick()