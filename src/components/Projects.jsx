import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { archive, projects } from '../data/resume';
import { Chip, Rich, SectionHeader } from './ui';

const Projects = () => {
  const [open, setOpen] = useState(() => new Set([projects[0].id]));
  const allOpen = open.size === projects.length;

  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const toggleAll = () => setOpen(allOpen ? new Set() : new Set(projects.map((p) => p.id)));

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <SectionHeader index="02" title={<span id="projects-title">Project(s)</span>} />

      <div className="metadata-grid">
        <div>
          <span className="meta-label">TYPE</span>
          Distributed systems, ML research, applied AI.
        </div>
        <div>
          <span className="meta-label">YEAR</span>
          2024–Present.
        </div>
        <div>
          <span className="meta-label">DISCIPLINE</span>
          Backend engineering, deep learning, data pipelines.
        </div>
        <div className="meta-action">
          <button type="button" className="text-btn" onClick={toggleAll}>
            {allOpen ? 'COLLAPSE ALL' : 'EXPAND ALL'}
          </button>
        </div>
      </div>

      <ul className="project-list">
        {projects.map((p, i) => {
          const isOpen = open.has(p.id);
          const panelId = `proj-panel-${p.id}`;
          return (
            <li key={p.id} className={`project ${isOpen ? 'is-open' : ''}`}>
              <button
                type="button"
                className="project-row"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(p.id)}
              >
                <span className="proj-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="proj-color" style={{ backgroundColor: p.color }} aria-hidden="true" />
                <span className="proj-title">{p.title}</span>
                <span className="proj-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="brutal-tag">
                      {t}
                    </span>
                  ))}
                </span>
                <span className="proj-toggle" aria-hidden="true">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={panelId}
                    className="project-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="project-panel-inner" style={{ '--proj-accent': p.color }}>
                      <div>
                        <p className="proj-summary">{p.summary}</p>
                        <ul className="bullets">
                          {p.bullets.map((b) => (
                            <li key={b}>
                              <Rich text={b} />
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="proj-side">
                        {p.year && (
                          <>
                            <span className="meta-label">YEAR</span>
                            <p className="proj-side-value">{p.year}</p>
                          </>
                        )}
                        <span className="meta-label">STACK</span>
                        <div className="chips">
                          {p.stack.map((s) => (
                            <Chip key={s}>{s}</Chip>
                          ))}
                        </div>
                        {p.links.length > 0 && (
                          <div className="proj-links">
                            {p.links.map((l) => (
                              <a key={l.url} className="btn btn-small" href={l.url} target="_blank" rel="noreferrer">
                                {l.label} <ArrowUpRight size={14} aria-hidden="true" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      <div className="archive">
        <span className="meta-label">ARCHIVE // EARLIER WORK</span>
        <ul>
          {archive.map((a) => (
            <li key={a.title}>
              <span>{a.title}</span>
              <span className="archive-tags">{a.tags.join(' ')}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
