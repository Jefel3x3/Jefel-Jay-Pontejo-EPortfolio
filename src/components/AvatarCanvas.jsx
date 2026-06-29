import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Colors matching the original tech stack icons
const ORB_COLORS = ['#61DAFB', '#FFCA28', '#38BDF8', '#68A063', '#F48120', '#54C5F8'];

export default function AvatarCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const container = mount.parentElement;

    const W = container.clientWidth;
    const H = container.clientHeight;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.inset = '0';

    /* ── Scene & Camera ── */
    // FOV 45, z=5 → visible half-height ≈ 2.07 units ≈ container half-width
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.z = 5;

    /* ── Outer dashed ring ── */
    const outerRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.0, 0.006, 16, 120),
      new THREE.MeshBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.28 })
    );
    outerRing.rotation.x = Math.PI / 2;
    scene.add(outerRing);

    /* ── Inner orbit glow track ── */
    const orbitTrack = new THREE.Mesh(
      new THREE.TorusGeometry(1.95, 0.003, 16, 100),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.14 })
    );
    orbitTrack.rotation.x = Math.PI / 2;
    scene.add(orbitTrack);

    /* ── Tech orbs (core + glow halo) ── */
    const orbs = ORB_COLORS.map((hex) => {
      const color = new THREE.Color(hex);
      const group = new THREE.Group();

      // Core sphere
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(0.085, 16, 16),
        new THREE.MeshBasicMaterial({ color })
      ));

      // Soft glow halo
      group.add(new THREE.Mesh(
        new THREE.SphereGeometry(0.22, 16, 16),
        new THREE.MeshBasicMaterial({
          color,
          transparent: true,
          opacity: 0.14,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      ));

      scene.add(group);
      return group;
    });

    /* ── Trailing glow dots ── */
    const makeDot = (hex, r) => {
      const m = new THREE.Mesh(
        new THREE.SphereGeometry(r, 12, 12),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color(hex),
          transparent: true,
          opacity: 0.9,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      scene.add(m);
      return m;
    };
    const dot1 = makeDot('#8b5cf6', 0.072); // violet
    const dot2 = makeDot('#22d3ee', 0.052); // cyan

    /* ── Ambient star particles ── */
    const STAR_COUNT = 80;
    const starPos = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = 0.8 + Math.random() * 1.3;
      starPos[i * 3]     = Math.cos(a) * r;
      starPos[i * 3 + 1] = Math.sin(a) * r;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
      color: 0x8b5cf6,
      size: 0.022,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    }));
    scene.add(stars);

    /* ── Mouse-driven scene tilt ── */
    let mx = 0, my = 0, tx = 0, ty = 0;
    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      my = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    const onLeave = () => { mx = 0; my = 0; };
    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    /* ── Animation loop ── */
    const clock = new THREE.Clock();
    const ORBIT_R = 1.95;
    let animId;

    const tick = () => {
      animId = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();

      // Smooth tilt toward mouse (lerp)
      tx += (my * 0.28 - tx) * 0.04;
      ty += (mx * 0.28 - ty) * 0.04;
      scene.rotation.x = tx;
      scene.rotation.y = ty;

      // Rings counter-rotate for depth
      outerRing.rotation.z = t * 0.35;
      orbitTrack.rotation.z = -t * 0.3;

      // Orbs orbit with slight pulse
      orbs.forEach((orb, i) => {
        const angle = (i / orbs.length) * Math.PI * 2 + t * 0.55 + 0.52;
        orb.position.set(Math.cos(angle) * ORBIT_R, Math.sin(angle) * ORBIT_R, 0);
        const pulse = 1 + Math.sin(t * 1.8 + i * 1.1) * 0.1;
        orb.scale.setScalar(pulse);
      });

      // Trailing dots at different speeds
      dot1.position.set(Math.cos(t * 0.85) * ORBIT_R, Math.sin(t * 0.85) * ORBIT_R, 0);
      dot2.position.set(
        Math.cos(-t * 0.65 + Math.PI) * ORBIT_R,
        Math.sin(-t * 0.65 + Math.PI) * ORBIT_R,
        0
      );

      // Slow star drift
      stars.rotation.z = t * 0.025;

      renderer.render(scene, camera);
    };
    tick();

    /* ── Resize handler ── */
    const onResize = () => {
      const W2 = container.clientWidth;
      const H2 = container.clientHeight;
      camera.aspect = W2 / H2;
      camera.updateProjectionMatrix();
      renderer.setSize(W2, H2);
    };
    window.addEventListener('resize', onResize);

    /* ── Cleanup ── */
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);

      // Dispose all Three.js resources
      [outerRing, orbitTrack, dot1, dot2].forEach(o => {
        o.geometry.dispose();
        o.material.dispose();
      });
      orbs.forEach(g => g.children.forEach(c => { c.geometry.dispose(); c.material.dispose(); }));
      starGeo.dispose();
      stars.material.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
