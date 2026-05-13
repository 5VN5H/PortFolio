import React, { useEffect, useRef } from 'react';

const NUM_NODES = 5;
const TRAIL_LENGTH = 50;
const POINTS_PER_NODE = 10;

const CyberHudCursor = () => {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const trailRef = useRef(Array(TRAIL_LENGTH).fill().map(() => ({ x: -1000, y: -1000 })));

  useEffect(() => {
    const handleMouseMove = (e) => {
      const parent = canvasRef.current?.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (mouseRef.current.x === -1000) {
        trailRef.current.forEach(pt => {
          pt.x = x;
          pt.y = y;
        });
      }
      mouseRef.current = { x, y };
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;

    const resize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      }
    };

    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const target = mouseRef.current;
      const trail = trailRef.current;

      if (target.x > -1000) {
        // 1. Update snake physics
        trail[0].x += (target.x - trail[0].x) * 0.5;
        trail[0].y += (target.y - trail[0].y) * 0.5;

        for (let i = 1; i < TRAIL_LENGTH; i++) {
          trail[i].x += (trail[i - 1].x - trail[i].x) * 0.45;
          trail[i].y += (trail[i - 1].y - trail[i].y) * 0.45;
        }

        // 2. Draw straight lines between nodes
        ctx.strokeStyle = 'rgba(55, 65, 81, 0.4)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(target.x, target.y);

        for (let i = 0; i < NUM_NODES; i++) {
          const index = (i + 1) * POINTS_PER_NODE - 1;
          const pt = trail[index];
          ctx.lineTo(pt.x, pt.y);
        }
        ctx.stroke();

        // 3. Draw node joints AND coordinate labels directly on canvas
        ctx.font = 'bold 10px "JetBrains Mono", monospace';

        for (let i = 0; i < NUM_NODES; i++) {
          const index = (i + 1) * POINTS_PER_NODE - 1;
          const pt = trail[index];
          const x = Math.round(pt.x);
          const y = Math.round(pt.y);

          // Draw the small square joint
          ctx.fillStyle = 'rgba(55, 65, 81, 0.8)';
          ctx.fillRect(pt.x - 3, pt.y - 3, 6, 6);

          // Measure the label text
          const label = `[${x},${y}]`;
          const textWidth = ctx.measureText(label).width;
          const boxPadding = 4;
          const boxW = textWidth + boxPadding * 2;
          const boxH = 16;

          // Position the box directly touching the right side of the joint
          const boxX = pt.x + 4;
          const boxY = pt.y - boxH / 2;

          // Draw box background
          ctx.fillStyle = 'rgba(24, 24, 27, 0.9)';
          ctx.fillRect(boxX, boxY, boxW, boxH);

          // Draw box border
          ctx.strokeStyle = 'rgba(107, 114, 128, 0.8)';
          ctx.lineWidth = 1;
          ctx.strokeRect(boxX, boxY, boxW, boxH);

          // Draw the text
          ctx.fillStyle = '#ffffff';
          ctx.textBaseline = 'middle';
          ctx.fillText(label, boxX + boxPadding, pt.y);
        }

        // 4. Draw crosshair at cursor
        ctx.strokeStyle = 'rgba(55, 65, 81, 0.8)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(target.x - 10, target.y);
        ctx.lineTo(target.x + 10, target.y);
        ctx.moveTo(target.x, target.y - 10);
        ctx.lineTo(target.x, target.y + 10);
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      <canvas ref={canvasRef} style={{ display: 'block', width: '100%', height: '100%' }} />
    </div>
  );
};

export default CyberHudCursor;
