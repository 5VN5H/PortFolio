import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { education, leadership } from '../data/resume';
import { Reveal, Rich, SectionHeader } from './ui';

const Education = () => (
  <section id="education" className="section" aria-labelledby="education-title">
    <SectionHeader index="04" title={<span id="education-title">Education & Leadership</span>} />

    <div className="edu-grid">
      <div className="edu-col">
        <span className="meta-label col-label">EDUCATION</span>
        <ul className="edu-list">
          {education.map((e, i) => (
            <Reveal as="li" key={e.degree} className="edu-row" delay={i * 0.05}>
              <div>
                <h3 className="edu-degree">{e.degree}</h3>
                <p className="muted">{e.school}</p>
              </div>
              <div className="edu-right">
                <span className="edu-score">{e.score}</span>
                <span className="muted small">{e.period}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <div className="edu-col">
        <span className="meta-label col-label">LEADERSHIP & ACHIEVEMENTS</span>
        <ul className="lead-list">
          {leadership.map((l, i) => (
            <Reveal as="li" key={l.title} className="lead-row" delay={i * 0.05}>
              <div className="lead-head">
                <h3 className="edu-degree">
                  {l.link ? (
                    <a href={l.link} target="_blank" rel="noreferrer" className="inline-link">
                      {l.title} <ArrowUpRight size={14} aria-hidden="true" />
                    </a>
                  ) : (
                    l.title
                  )}
                </h3>
                <span className="muted small nowrap">{l.period}</span>
              </div>
              {l.bullets.length > 0 && (
                <ul className="bullets">
                  {l.bullets.map((b) => (
                    <li key={b}>
                      <Rich text={b} />
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default Education;
