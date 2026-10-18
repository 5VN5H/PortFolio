import React, { useEffect, useState } from 'react';
import { Download, Moon, Sun } from 'lucide-react';
import { profile } from '../data/resume';
import { resumeHref } from './ui';

const LINKS = [
  { id: 'experience', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Stack' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

function useClock(timeZone) {
  const fmt = () =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date());
  const [time, setTime] = useState(fmt);
  useEffect(() => {
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  return time;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

const SECTION_IDS = LINKS.map((l) => l.id);

const Nav = ({ theme, onToggleTheme }) => {
  const time = useClock(profile.timeZone);
  const active = useActiveSection(SECTION_IDS);
  const progress = useScrollProgress();

  return (
    <nav className="nav" aria-label="Primary">
      <div className="nav-row">
        <a href="#top" className="nav-brand">
          ┌ SHIVANSH_CORE <span className="muted">// V2.0</span>
        </a>

        <ul className="nav-links">
          {LINKS.map((l, i) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={active === l.id ? 'is-active' : undefined}>
                <span className="nav-num">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-tools">
          <span className="nav-clock" title="Local time in Delhi">
            DEL {time} IST
          </span>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a className="nav-cta" href={resumeHref(profile.resumeFile)} download>
            <Download size={14} aria-hidden="true" />
            <span>Résumé</span>
          </a>
        </div>
      </div>
      <div className="nav-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
    </nav>
  );
};

export default Nav;
