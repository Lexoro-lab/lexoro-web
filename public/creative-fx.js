/* ============================================================
   LEXORO v3 — CREATIVE FX
   1) #fx-globe  — interactive 3D conversation-network globe (Three.js)
   2) #fx-burst  — interactive radial burst band (Canvas 2D)
   Both guard on element presence; safe if either is absent.
   ============================================================ */
(function () {
  'use strict';
  const COBALT = { r: 31, g: 71, b: 230 };
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------------------------------------------------------
     1) 3D NETWORK GLOBE
     --------------------------------------------------------- */
  function initGlobe() {
    const canvas = document.getElementById('fx-globe');
    if (!canvas || typeof THREE === 'undefined') return;
    const host = canvas.parentElement;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100);
    camera.position.z = 3.15;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    scene.add(group);

    // ---- Fibonacci sphere of nodes ----
    const N = 540;
    const R = 1.32;
    const pts = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const rad = Math.sqrt(1 - y * y);
      const theta = golden * i;
      pts.push(new THREE.Vector3(Math.cos(theta) * rad * R, y * R, Math.sin(theta) * rad * R));
    }

    // ---- soft round node sprite ----
    const tex = (() => {
      const s = 64, c = document.createElement('canvas');
      c.width = c.height = s;
      const g = c.getContext('2d');
      const rg = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
      rg.addColorStop(0, 'rgba(31,71,230,1)');
      rg.addColorStop(0.4, 'rgba(31,71,230,0.85)');
      rg.addColorStop(1, 'rgba(31,71,230,0)');
      g.fillStyle = rg;
      g.fillRect(0, 0, s, s);
      const t = new THREE.CanvasTexture(c);
      return t;
    })();

    const posArr = new Float32Array(N * 3);
    pts.forEach((p, i) => { posArr[i * 3] = p.x; posArr[i * 3 + 1] = p.y; posArr[i * 3 + 2] = p.z; });
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.055, map: tex, transparent: true, depthWrite: false,
      blending: THREE.NormalBlending, sizeAttenuation: true
    });
    group.add(new THREE.Points(pGeo, pMat));

    // ---- connections to nearest neighbours ----
    const segs = [];
    const maxDist = 0.46;
    for (let i = 0; i < N; i++) {
      let cnt = 0;
      for (let j = i + 1; j < N && cnt < 3; j++) {
        if (pts[i].distanceTo(pts[j]) < maxDist) {
          segs.push(pts[i].x, pts[i].y, pts[i].z, pts[j].x, pts[j].y, pts[j].z);
          cnt++;
        }
      }
    }
    const lGeo = new THREE.BufferGeometry();
    lGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(segs), 3));
    const lMat = new THREE.LineBasicMaterial({ color: 0x1F47E6, transparent: true, opacity: 0.16 });
    group.add(new THREE.LineSegments(lGeo, lMat));

    // ---- travelling pulses along the surface ----
    const PULSES = 5;
    const pulseGeo = new THREE.BufferGeometry();
    const pulsePos = new Float32Array(PULSES * 3);
    pulseGeo.setAttribute('position', new THREE.BufferAttribute(pulsePos, 3));
    const pulseMat = new THREE.PointsMaterial({
      size: 0.13, map: tex, transparent: true, depthWrite: false, color: 0x3DDC84,
      blending: THREE.AdditiveBlending, sizeAttenuation: true
    });
    const pulses = new THREE.Points(pulseGeo, pulseMat);
    group.add(pulses);
    const pulseSeed = Array.from({ length: PULSES }, () => ({
      a: Math.random() * Math.PI * 2, b: Math.random() * Math.PI, sp: 0.3 + Math.random() * 0.5
    }));

    // ---- interaction ----
    let tRotX = -0.25, tRotY = 0, rotX = -0.25, rotY = 0;
    let autoY = 0, dragging = false, px = 0, py = 0;
    host.style.touchAction = 'pan-y';
    host.addEventListener('pointerdown', (e) => { dragging = true; px = e.clientX; py = e.clientY; host.setPointerCapture(e.pointerId); });
    host.addEventListener('pointerup', () => { dragging = false; });
    host.addEventListener('pointerleave', () => { dragging = false; });
    host.addEventListener('pointermove', (e) => {
      const r = host.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      if (dragging) {
        tRotY += (e.clientX - px) * 0.006;
        tRotX += (e.clientY - py) * 0.006;
        tRotX = Math.max(-1.1, Math.min(1.1, tRotX));
        px = e.clientX; py = e.clientY;
      } else {
        tRotX = -0.25 + ny * 0.5;
        parX = nx * 0.4;
      }
    });
    let parX = 0;

    function resize() {
      const w = host.clientWidth, h = host.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    new ResizeObserver(resize).observe(host);
    resize();

    const clock = new THREE.Clock();
    function frame() {
      const t = clock.getElapsedTime();
      if (!reduceMotion && !dragging) autoY += 0.0026;
      rotY += (tRotY + autoY - rotY) * 0.06;
      rotX += (tRotX - rotX) * 0.06;
      group.rotation.y = rotY;
      group.rotation.x = rotX;
      group.position.x += (parX - group.position.x) * 0.05;

      for (let i = 0; i < PULSES; i++) {
        const s = pulseSeed[i];
        const a = s.a + t * s.sp;
        const b = s.b + Math.sin(t * s.sp * 0.7) * 0.6;
        pulsePos[i * 3] = Math.sin(b) * Math.cos(a) * R;
        pulsePos[i * 3 + 1] = Math.cos(b) * R;
        pulsePos[i * 3 + 2] = Math.sin(b) * Math.sin(a) * R;
      }
      pulseGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      requestAnimationFrame(frame);
    }
    frame();
  }

  /* ---------------------------------------------------------
     2) INTERACTIVE RADIAL BURST
     --------------------------------------------------------- */
  function initBurst() {
    const canvas = document.getElementById('fx-burst');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio, 2);
    const host = canvas.parentElement;

    const COUNT = 240;
    const rays = [];
    for (let i = 0; i < COUNT; i++) {
      // angle measured from +x, spread across the upper fan (10°..170°)
      const a = (Math.PI * 0.06) + Math.random() * (Math.PI * 0.88);
      rays.push({
        a,
        base: 0.34 + Math.random() * 0.62,      // length fraction of radius
        ph: Math.random() * Math.PI * 2,         // shimmer phase
        sp: 0.5 + Math.random() * 1.1,           // shimmer speed
        w: Math.random() < 0.18 ? 1.6 : 0.8,     // line weight
        dot: Math.random() < 0.32,               // tip dot
        seg: Math.random() < 0.22                // dashed/segmented
      });
    }

    let mx = 0.5, my = 1, active = 0; // pointer (normalized), activation 0..1
    host.addEventListener('pointermove', (e) => {
      const r = host.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width;
      my = (e.clientY - r.top) / r.height;
      active = 1;
    });
    host.addEventListener('pointerleave', () => { active = 0; });

    function resize() {
      W = host.clientWidth; H = host.clientHeight;
      dpr = Math.min(window.devicePixelRatio, 2);
      canvas.width = W * dpr; canvas.height = H * dpr;
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    new ResizeObserver(resize).observe(host);
    resize();

    let curActive = 0, t0 = performance.now();
    function frame(now) {
      const t = (now - t0) / 1000;
      curActive += (active - curActive) * 0.08;
      ctx.clearRect(0, 0, W, H);

      const ox = W / 2, oy = H + 6;          // origin: bottom-center
      const radius = Math.min(H * 1.5, W * 0.62);
      // pointer angle (from origin), for directional emphasis
      const pdx = mx * W - ox, pdy = my * H - oy;
      const pAng = Math.atan2(-pdy, pdx); // 0..PI upward

      for (let i = 0; i < COUNT; i++) {
        const r = rays[i];
        const shimmer = reduceMotion ? 0 : Math.sin(t * r.sp + r.ph) * 0.06;
        // emphasis: rays whose angle is near the pointer angle extend & brighten
        const da = Math.abs(r.a - pAng);
        const near = Math.max(0, 1 - da / 0.5);
        const len = (r.base + shimmer + near * 0.16 * curActive) * radius;
        const ang = r.a + near * 0.04 * curActive * Math.sign((pAng - r.a) || 1);

        const ex = ox + Math.cos(ang) * len;
        const ey = oy - Math.sin(ang) * len;

        const baseAlpha = 0.10 + (r.base - 0.34) * 0.42;
        const alpha = Math.min(0.9, baseAlpha + near * 0.55 * curActive);
        const grad = ctx.createLinearGradient(ox, oy, ex, ey);
        grad.addColorStop(0, `rgba(${COBALT.r},${COBALT.g},${COBALT.b},${alpha})`);
        grad.addColorStop(1, `rgba(${COBALT.r},${COBALT.g},${COBALT.b},0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = r.w + near * 0.9 * curActive;
        if (r.seg) ctx.setLineDash([2, 5]); else ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(ox, oy);
        ctx.lineTo(ex, ey);
        ctx.stroke();

        if (r.dot) {
          ctx.setLineDash([]);
          ctx.fillStyle = `rgba(${COBALT.r},${COBALT.g},${COBALT.b},${Math.min(0.95, alpha + 0.2)})`;
          ctx.beginPath();
          ctx.arc(ex, ey, 1.6 + near * 1.4 * curActive, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.setLineDash([]);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  function boot() { initGlobe(); initBurst(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
