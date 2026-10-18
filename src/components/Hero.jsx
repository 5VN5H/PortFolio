import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Download, MapPin } from 'lucide-react';
import CyberHudCursor from './CyberHudCursor';
import DynamicGreeting from './DynamicGreeting';
import { profile, socials } from '../data/resume';
import { resumeHref } from './ui';

const SCRAMBLE_CHARS = 'sS@#$%&*+-';

// Decodes the name from random glyphs over ~1.75s.
function useScramble(ref, finalStr) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const maxIterations = 35;
    let iteration = 0;
    const id = setInterval(() => {
      iteration++;
      let result = '';
      for (let i = 0; i < finalStr.length; i++) {
        const threshold = (maxIterations / finalStr.length) * (i + 1);
        result += iteration >= threshold ? finalStr[i] : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
      }
      if (ref.current) ref.current.textContent = result;
      if (iteration >= maxIterations) {
        clearInterval(id);
        if (ref.current) ref.current.textContent = finalStr;
      }
    }, 50);
    return () => clearInterval(id);
  }, [ref, finalStr]);
}

const Hero = () => {
  const titleRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const name = profile.name.toUpperCase();
  useScramble(titleRef, name);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const [, linkedin, github, codeforces] = socials;

  return (
    <header id="top" className="hero">
      <div className="hero-main">
        <CyberHudCursor />

        <div className="hero-copy">
          <DynamicGreeting />
          <h1 className="main-title">
            <span ref={titleRef} aria-label={profile.name}>{name}</span>
            <span className="sys-tag" aria-hidden="true">[SYS]</span>
          </h1>

          <p className="hero-role">{profile.role}</p>
          <p className="hero-pitch">{profile.pitch}</p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href={resumeHref(profile.resumeFile)} download>
              <Download size={16} aria-hidden="true" /> Download résumé
            </a>
            <a className="btn" href="#projects">
              View work <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <button type="button" className="btn btn-ghost" onClick={copyEmail}>
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              <span aria-live="polite">{copied ? 'Email copied' : 'Copy email'}</span>
            </button>
          </div>
        </div>

        <aside className="hero-card" aria-label="Status">
          <div className="hero-card-head">
            <img
              src={`${import.meta.env.BASE_URL}favicon.png`}
              alt="Illustrated avatar of Shivansh"
              width="88"
              height="88"
              className="avatar"
            />
            <div>
              <div className="status-line">
                <span className="pulse" aria-hidden="true" /> {profile.status}
              </div>
              <div className="muted small">
                <MapPin size={12} aria-hidden="true" /> {profile.location}
              </div>
            </div>
          </div>
          <dl className="registry">
            <dt>STUDY</dt>
            <dd>B.Tech SE @ DTU — 2028</dd>
            <dt>EMAIL</dt>
            <dd>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </dd>
            <dt>PHONE</dt>
            <dd>
              <a href={profile.phoneHref}>{profile.phone}</a>
            </dd>
            <dt>NET</dt>
            <dd>
              <a href={linkedin.url} target="_blank" rel="noreferrer">
                {linkedin.handle}
              </a>
            </dd>
            <dt>GIT</dt>
            <dd>
              <a href={github.url} target="_blank" rel="noreferrer">
                {github.handle}
              </a>
            </dd>
            <dt>CF</dt>
            <dd>
              <a href={codeforces.url} target="_blank" rel="noreferrer">
                {codeforces.handle}
              </a>
            </dd>
          </dl>
        </aside>
      </div>
    </header>
  );
};

export default Hero;
