import React from 'react';
import { skills } from '../data/resume';
import { Chip, Reveal, SectionHeader } from './ui';

const Skills = () => (
  <section id="skills" className="section" aria-labelledby="skills-title">
    <SectionHeader index="03" title={<span id="skills-title">Stack</span>} aside="TOOLS I SHIP WITH" />
    <div className="skills-grid">
      {skills.map((s, i) => (
        <Reveal key={s.group} className="skill-cell" delay={i * 0.04}>
          <h3 className="skill-group">
            <span className="muted">{String(i + 1).padStart(2, '0')} /</span> {s.group}
          </h3>
          <div className="chips">
            {s.items.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </Reveal>
      ))}
    </div>
  </section>
);

export default Skills;
