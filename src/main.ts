import * as THREE from 'three'

const canvasEl = document.getElementById('webgl-canvas')!
// console.info(canvasEl)
console.info('Threejs:', THREE)

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// position objects
mesh.position.set(0.7, -0.6, 1)

// Scale objects
mesh.scale.set(2, 0.5, 0.5)

// Rotating Objects
mesh.rotation.reorder('YXZ')
mesh.rotation.y = Math.PI * 0.5
mesh.rotation.x = Math.PI * 1.2
mesh.rotation.z = 0.2

/*console.info('mesh position', mesh.position.length())*/
mesh.position.normalize()
scene.add(mesh)

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
camera.lookAt(mesh.position)

// camera.rotateOnAxis(camera.position,0.05)
/*console.info('distance to', mesh.position.distanceTo(camera.position))*/
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvasEl,
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)