import React from 'react';
import { experience } from '../data/resume';
import { Chip, Reveal, Rich, SectionHeader } from './ui';

const Experience = () => (
  <section id="experience" className="section" aria-labelledby="experience-title">
    <SectionHeader index="01" title={<span id="experience-title">Experience</span>} aside="2025 — 2026" />

    <ol className="timeline">
      {experience.map((job, i) => (
        <Reveal as="li" key={job.id} className="timeline-item" delay={i * 0.05}>
          <div className="timeline-meta">
            <span className="timeline-period">{job.period}</span>
            <span className="muted small">{job.location}</span>
            {job.current && (
              <span className="badge-live">
                <span className="pulse" aria-hidden="true" /> Current
              </span>
            )}
          </div>
          <div className="timeline-body">
            <h3 className="job-role">{job.role}</h3>
            <p className="job-org">{job.org}</p>
            <ul className="bullets">
              {job.bullets.map((b) => (
                <li key={b}>
                  <Rich text={b} />
                </li>
              ))}
            </ul>
            <div className="chips">
              {job.stack.map((s) => (
                <Chip key={s}>{s}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </ol>
  </section>
);

export default Experience;
