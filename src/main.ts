import * as THREE from 'three'

const canvasEl = document.getElementById('webgl-canvas')!
console.info(canvasEl)
console.info('Threejs:', THREE)

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)


mesh.position.set(0.7,-0.6,1)

/*console.info('mesh position', mesh.position.length())*/
mesh.position.normalize()
scene.add(mesh)

/* Axes Helper*/
const axesHelper = new THREE.AxesHelper(4)
scene.add(axesHelper)

// Sizes
const sizes = {
  width: 800, height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(1, 2, -1)

camera.rotateOnAxis(camera.position,0.45)
/*console.info('distance to', mesh.position.distanceTo(camera.position))*/
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvasEl,
})

renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)