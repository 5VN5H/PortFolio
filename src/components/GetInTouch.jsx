import React from 'react';
import { ArrowUp, ArrowUpRight, Download } from 'lucide-react';
import { profile, socials } from '../data/resume';
import { BrandIcon, resumeHref, SectionHeader } from './ui';

const GetInTouch = () => (
  <footer id="contact" className="section contact" aria-labelledby="contact-title">
    <SectionHeader index="05" title={<span id="contact-title">Get In Touch</span>} aside="OPEN_FOR_WORK" />

    <div className="contact-lead">
      <p className="contact-pitch">
        Hiring for an SDE or ML internship, or building something that has to be correct at scale? Let’s talk.
      </p>
      <div className="contact-actions">
        <a className="btn btn-primary btn-large" href={`mailto:${profile.email}`}>
          Say hello <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        <a className="btn btn-large" href={resumeHref(profile.resumeFile)} download>
          <Download size={18} aria-hidden="true" /> Résumé (PDF)
        </a>
      </div>
    </div>

    <div className="git-grid">
      {socials.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target={link.id === 'email' ? undefined : '_blank'}
          rel="noreferrer"
          className={`git-card git-card-${link.id}`}
        >
          <div className="git-card-top">
            <BrandIcon id={link.id} size={36} />
            <ArrowUpRight size={18} className="git-arrow" aria-hidden="true" />
          </div>
          <div className="git-card-bottom">
            <div className="git-label">{link.label}</div>
            <div className="git-divider" />
            <div className="git-handle">{link.handle}</div>
          </div>
        </a>
      ))}
    </div>

    <div className="skyline" aria-hidden="true">
      <img src={`${import.meta.env.BASE_URL}footer.png`} alt="" loading="lazy" width="1200" height="222" />
    </div>

    <div className="footer-bar">
      <span>© {new Date().getFullYear()} {profile.name} — Built with React + Vite</span>
      <a href="#top" className="footer-top">
        Back to top <ArrowUp size={14} aria-hidden="true" />
      </a>
    </div>
  </footer>
);

export default GetInTouch;
