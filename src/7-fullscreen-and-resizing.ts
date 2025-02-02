import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

const canvasEl = document.getElementById('webgl-canvas')!
console.info('Threejs:', THREE)

// Cursor
const cursor = {
  x: 0,
  y: 0
}

// Scene
const scene = new THREE.Scene()

// Object
const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xf0cff0 })
)
scene.add(cube1)

/* Axes Helper*/
// const axesHelper = new THREE.AxesHelper(2)
// scene.add(axesHelper)

// Sizes
const sizes = {
  width: window.innerWidth, height: window.innerHeight
}



// Camera
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(-1* aspectRatio, 1*aspectRatio, 1, -1,0.1,100)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.set(0, 0, 3)
camera.lookAt(cube1.position)

// controls
const controls = new OrbitControls(camera, canvasEl)
// controls.enabled = false 
controls.enableDamping = true
// controls.target.y = 1
// controls.update()

window.addEventListener('mousemove', (event: MouseEvent) => {
  cursor.x = event.clientX / sizes.width - 0.5
  cursor.y = -(event.clientY / sizes.height - 0.5)

  // console.info('mouse move', cursor.x.toFixed(2))
})

// camera.rotateOnAxis(camera.position,0.05)
/*console.info('distance to', mesh.position.distanceTo(camera.position))*/
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvasEl,
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

window.addEventListener('resize', () => {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight

  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  renderer.setSize(sizes.width, sizes.height)
  // renderer.render(scene, camera)
})

window.addEventListener('dblclick', () => {
  
  if (!document.fullscreenElement) {
    canvasEl.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
})

const clock = new THREE.Clock()

const tick = () => {

  const elapsedTime = clock.getElapsedTime()

  // cube1.rotation.y = elapsedTime

  // update camera

  // update controls
  controls.update()

  // camera.position.set(-cursor.x * 3, -cursor.y , 3)
  // camera.position.x = Math.cos(cursor.x * Math.PI * 5) * 3
  // camera.position.z = Math.sin(cursor.x * Math.PI * 5) * 3
  // camera.position.y = cursor.y * 2
  // camera.lookAt(cube1.position)

  renderer.render(scene, camera)
  window.requestAnimationFrame(tick)

}
tick()
