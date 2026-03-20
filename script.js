// ===== FADE ANIMATION =====
const faders = document.querySelectorAll('.fade');
function revealOnScroll() {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) el.classList.add('show');
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// ===== PARTICLE BACKGROUND =====
const bg = document.getElementById("bg");
const ctx = bg.getContext("2d");

function resizeBG() {
  bg.width = window.innerWidth;
  bg.height = window.innerHeight;
}
resizeBG();
window.addEventListener("resize", resizeBG);

let particles = [];
for (let i = 0; i < 200; i++) { // dense neon particles
  particles.push({
    x: Math.random() * bg.width,
    y: Math.random() * bg.height,
    r: Math.random() * 2,
    dx: (Math.random() - 0.5) * 0.7,
    dy: (Math.random() - 0.5) * 0.7
  });
}

function animateBG() {
  ctx.clearRect(0, 0, bg.width, bg.height);
  particles.forEach(p => {
    p.x += p.dx; p.y += p.dy;
    if (p.x < 0 || p.x > bg.width) p.dx *= -1;
    if (p.y < 0 || p.y > bg.height) p.dy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#ff2e88"; // neon pink
    ctx.fill();
  });
  requestAnimationFrame(animateBG);
}
animateBG();


// ===== THREE.JS PHAGE THEME =====
window.addEventListener('load', () => {
  const container = document.getElementById("phage-canvas");
  if (!container) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a0c, 0.03); // subtle charcoal fog

  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);

  // LIGHTS
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const pinkLight = new THREE.PointLight(0xff2e88, 1.2, 20);
  pinkLight.position.set(5, 5, 5);
  scene.add(pinkLight);

  const orangeLight = new THREE.PointLight(0xff6a00, 0.6, 20);
  orangeLight.position.set(-5, 5, 5);
  scene.add(orangeLight);

  // LOAD PHAGE MODEL
  let phageModel = null;
  const loader = new THREE.GLTFLoader();
  loader.load(
    'phage.glb',
    (gltf) => {
      phageModel = gltf.scene;
      phageModel.scale.set(1.5, 1.5, 1.5);
      phageModel.position.set(0, 0, 0);

      // EMISSIVE NEON MATERIAL
      phageModel.traverse((child) => {
        if (child.isMesh) {
          child.material.emissive = new THREE.Color(0xff2e88);
          child.material.emissiveIntensity = 0.5;
          child.material.roughness = 0.3;
          child.material.metalness = 0.5;
        }
      });

      scene.add(phageModel);
      camera.position.z = 10;

      animate();
    },
    undefined,
    (err) => console.error('Error loading phage.glb:', err)
  );

  // DRAG ROTATION
  let isDragging = false;
  let prev = { x: 0, y: 0 };

  renderer.domElement.addEventListener("mousedown", () => isDragging = true);
  renderer.domElement.addEventListener("mouseup", () => isDragging = false);
  renderer.domElement.addEventListener("mousemove", (e) => {
    if (!isDragging || !phageModel) return;
    let dx = e.offsetX - prev.x;
    let dy = e.offsetY - prev.y;
    phageModel.rotation.y += dx * 0.01;
    phageModel.rotation.x += dy * 0.01;
    prev = { x: e.offsetX, y: e.offsetY };
  });

  // TOUCH ROTATION
  renderer.domElement.addEventListener("touchmove", (e) => {
    if (!phageModel) return;
    const t = e.touches[0];
    phageModel.rotation.y += t.clientX * 0.0005;
    phageModel.rotation.x += t.clientY * 0.0005;
  });

  // ANIMATE LOOP
  function animate() {
    requestAnimationFrame(animate);
    if (phageModel) {
      phageModel.rotation.y += 0.002; // slow auto-rotation
      phageModel.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1; // subtle rocking tilt
    }
    renderer.render(scene, camera);
  }

  // RESIZE HANDLING
  window.addEventListener("resize", () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  });
});