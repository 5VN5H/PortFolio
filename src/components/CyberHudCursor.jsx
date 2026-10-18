import React, { useEffect, useRef } from 'react';

const NUM_NODES = 5;
const TRAIL_LENGTH = 50;
const POINTS_PER_NODE = 10;

// Reads theme colours from CSS custom properties so the HUD follows light/dark mode.
const readPalette = (el) => {
  const css = getComputedStyle(el);
  return {
    line: css.getPropertyValue('--hud-line').trim(),
    node: css.getPropertyValue('--hud-node').trim(),
    boxBg: css.getPropertyValue('--hud-box-bg').trim(),
    boxBorder: css.getPropertyValue('--hud-box-border').trim(),
    text: css.getPropertyValue('--hud-text').trim(),
  };
};

const CyberHudCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    // Decorative only: skip on touch devices and for users who prefer reduced motion.
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reducedMotion) return;

    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement.parentElement;
    const mouse = { x: -1000, y: -1000 };
    const trail = Array.from({ length: TRAIL_LENGTH }, () => ({ x: -1000, y: -1000 }));
    let palette = readPalette(canvas);
    let frame;
    let visible = true;
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (mouse.x === -1000) trail.forEach((pt) => Object.assign(pt, { x, y }));
      mouse.x = x;
      mouse.y = y;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (mouse.x > -1000) {
        trail[0].x += (mouse.x - trail[0].x) * 0.5;
        trail[0].y += (mouse.y - trail[0].y) * 0.5;
        for (let i = 1; i < TRAIL_LENGTH; i++) {
          trail[i].x += (trail[i - 1].x - trail[i].x) * 0.45;
          trail[i].y += (trail[i - 1].y - trail[i].y) * 0.45;
        }

        ctx.strokeStyle = palette.line;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(mouse.x, mouse.y);
        for (let i = 0; i < NUM_NODES; i++) {
          const pt = trail[(i + 1) * POINTS_PER_NODE - 1];
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();

        ctx.font = 'bold 10px "JetBrains Mono", monospace';
        ctx.textBaseline = 'middle';
        for (let i = 0; i < NUM_NODES; i++) {
          const pt = trail[(i + 1) * POINTS_PER_NODE - 1];
          ctx.fillStyle = palette.node;
          ctx.fillRect(pt.x - 3, pt.y - 3, 6, 6);

          const label = `[${Math.round(pt.x)},${Math.round(pt.y)}]`;
          const boxW = ctx.measureText(label).width + 8;
          const boxH = 16;
          const boxX = pt.x + 4;
          const boxY = pt.y - boxH / 2;
          ctx.fillStyle = palette.boxBg;
          ctx.fillRect(boxX, boxY, boxW, boxH);
          ctx.strokeStyle = palette.boxBorder;
          ctx.strokeRect(boxX, boxY, boxW, boxH);
          ctx.fillStyle = palette.text;
          ctx.fillText(label, boxX + 4, pt.y);
        }

        ctx.strokeStyle = palette.node;
        ctx.beginPath();
        ctx.moveTo(mouse.x - 10, mouse.y);
        ctx.lineTo(mouse.x + 10, mouse.y);
        ctx.moveTo(mouse.x, mouse.y - 10);
        ctx.lineTo(mouse.x, mouse.y + 10);
        ctx.stroke();
      }

      if (visible) frame = requestAnimationFrame(render);
    };

    // Pause the loop while the hero is off-screen.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(frame);
      if (visible) frame = requestAnimationFrame(render);
    });
    // Re-read colours when the theme attribute flips.
    const mo = new MutationObserver(() => (palette = readPalette(canvas)));

    resize();
    io.observe(parent);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);

    return () => {
      cancelAnimationFrame(frame);
      io.disconnect();
      mo.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div className="hud-layer" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
};

export default CyberHudCursor;
