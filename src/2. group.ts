import * as THREE from 'three'

const canvasEl = document.getElementById('webgl-canvas')!
// console.info(canvasEl)
console.info('Threejs:', THREE)

// Scene
const scene = new THREE.Scene()

// Object
const group = new THREE.Group()
scene.add(group)

/* Axes Helper*/
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -1.5
cube2.position.z = 0.4
const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff00ff })
)
cube3.position.x = 1.5
cube3.position.z = 0.4

group.add(cube1)
group.add(cube2)
group.add(cube3)

group.position.y = 0.6
group.scale.y = 1.2
group.rotateY(0.5)

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