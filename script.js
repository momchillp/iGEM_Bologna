// ===== FADE ANIMATION =====
const faders = document.querySelectorAll('.fade');
function revealOnScroll() {
  faders.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add('show');
    }
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
for (let i = 0; i < 200; i++) {
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
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > bg.width) p.dx *= -1;
    if (p.y < 0 || p.y > bg.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "#ff2e88";
    ctx.fill();
  });

  requestAnimationFrame(animateBG);
}
animateBG();


// ===== THREE.JS PHAGE =====
window.addEventListener('load', () => {
  const container = document.getElementById("phage-canvas");
  if (!container) return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a0c, 0.03);

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
  scene.add(new THREE.AmbientLight(0xffffff, 0.4));

  const pinkLight = new THREE.PointLight(0xff2e88, 1.2, 20);
  pinkLight.position.set(5, 5, 5);
  scene.add(pinkLight);

  const orangeLight = new THREE.PointLight(0xff6a00, 0.6, 20);
  orangeLight.position.set(-5, 5, 5);
  scene.add(orangeLight);

  // MODEL
  let phageModel = null;
  const loader = new THREE.GLTFLoader();

  loader.load('phage.glb', (gltf) => {
    phageModel = gltf.scene;
    phageModel.scale.set(1.5, 1.5, 1.5);

    phageModel.traverse(child => {
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
  });

  // ===== ROTATION SYSTEM =====
  let isDragging = false;
  let prev = { x: 0, y: 0 };
  let velocity = { x: 0, y: 0, z: 0 };

  // MOUSE
  renderer.domElement.addEventListener("mousedown", (e) => {
    isDragging = true;
    prev = { x: e.clientX, y: e.clientY };
  });

  renderer.domElement.addEventListener("mouseup", () => isDragging = false);
  renderer.domElement.addEventListener("mouseleave", () => isDragging = false);

  renderer.domElement.addEventListener("mousemove", (e) => {
    if (!isDragging || !phageModel) return;

    const dx = e.clientX - prev.x;
    const dy = e.clientY - prev.y;

    const speed = 0.005;

    phageModel.rotation.y += dx * speed;
    phageModel.rotation.x += dy * speed;
    phageModel.rotation.z += dx * speed * 0.4;

    velocity.x = dy * speed;
    velocity.y = dx * speed;
    velocity.z = dx * speed * 0.4;

    prev = { x: e.clientX, y: e.clientY };
  });

  // TOUCH
  let prevTouch = null;

  renderer.domElement.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      prevTouch = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    }
  });

  renderer.domElement.addEventListener("touchmove", (e) => {
    if (!phageModel || !prevTouch) return;

    const touch = e.touches[0];
    const dx = touch.clientX - prevTouch.x;
    const dy = touch.clientY - prevTouch.y;

    const speed = 0.003;

    phageModel.rotation.y += dx * speed;
    phageModel.rotation.x += dy * speed;
    phageModel.rotation.z += dx * speed * 0.4;

    velocity.x = dy * speed;
    velocity.y = dx * speed;
    velocity.z = dx * speed * 0.4;

    prevTouch = { x: touch.clientX, y: touch.clientY };
    e.preventDefault();
  });

  renderer.domElement.addEventListener("touchend", () => prevTouch = null);
  renderer.domElement.addEventListener("touchcancel", () => prevTouch = null);

  // ===== ANIMATION =====
  function animate() {
    requestAnimationFrame(animate);

    if (phageModel) {

      if (!isDragging) {
        // Apply inertia
        phageModel.rotation.x += velocity.x;
        phageModel.rotation.y += velocity.y;
        phageModel.rotation.z += velocity.z;

        // Damping (important!)
        velocity.x *= 0.92;
        velocity.y *= 0.92;
        velocity.z *= 0.92;

        // Stop completely
        if (Math.abs(velocity.x) < 0.00001) velocity.x = 0;
        if (Math.abs(velocity.y) < 0.00001) velocity.y = 0;
        if (Math.abs(velocity.z) < 0.00001) velocity.z = 0;

        // Idle rotation ONLY when stopped
        if (velocity.x === 0 && velocity.y === 0 && velocity.z === 0) {
          phageModel.rotation.y += 0.0015;
        }
      }
    }

    renderer.render(scene, camera);
  }

  // RESIZE
  window.addEventListener("resize", () => {
    renderer.setSize(container.clientWidth, container.clientHeight);
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
  });
});