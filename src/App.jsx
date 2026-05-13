import React, { useEffect, useRef } from 'react';
import './index.css';
import CyberHudCursor from './CyberHudCursor';
import DynamicGreeting from './DynamicGreeting';
import ExpertiseEducation from './ExpertiseEducation';
import GetInTouch from './GetInTouch';

function App() {
  const titleRef = useRef(null);

  useEffect(() => {
    const finalStr = 'SHIVANSH';
    const chars = 'sS@#$%&*+-';
    let iteration = 0;
    const intervalTime = 50; 
    const maxIterations = 35; // 35 * 50 = 1750ms (1.75s)
    
    const intervalId = setInterval(() => {
      let result = '';
      iteration++;
      
      for (let i = 0; i < finalStr.length; i++) {
        const threshold = (maxIterations / finalStr.length) * (i + 1);
        if (iteration >= threshold) {
          result += finalStr[i];
        } else {
          result += chars[Math.floor(Math.random() * chars.length)];
        }
      }
      
      if (titleRef.current) {
        titleRef.current.innerText = result;
      }
      
      if (iteration >= maxIterations) {
        clearInterval(intervalId);
        if (titleRef.current) {
          titleRef.current.innerText = finalStr;
        }
      }
    }, intervalTime);
    
    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="container">
      {/* 1. HEADER BLOCK */}
      <header>
        <div className="meta-bar">
          <div>┌ SYSTEM: SHIVANSH_CORE // V1.0</div>
          <div>STATUS: SECURE // OPEN_FOR_WORK ┐</div>
        </div>
        
        <div className="main-display" style={{ position: 'relative', overflow: 'hidden' }}>
          <CyberHudCursor />
          <DynamicGreeting />
          <div className="main-title" style={{ position: 'relative', zIndex: 10 }}>
            <span ref={titleRef}>SHIVANSH</span> <span className="sys-tag">[SYS]</span>
          </div>
          
          <div className="contact-registry" style={{ position: 'relative', zIndex: 10 }}>
            <div className="contact-label">PHONE:</div>
            <div>+91 88824-93607</div>
            
            <div className="contact-label">EMAIL:</div>
            <div><a href="mailto:contact2shiv4ansh@gmail.com">contact2shiv4ansh@gmail.com</a></div>
            
            <div className="contact-label">NETWORK:</div>
            <div><a href="https://linkedin.com/in/shivansh" target="_blank" rel="noreferrer">linkedin.com/in/shivansh</a> [LINK]</div>
            
            <div className="contact-label">REGISTRY:</div>
            <div><a href="https://github.com/shivansh" target="_blank" rel="noreferrer">github.com/shivansh</a> [GIT]</div>
          </div>
        </div>
      </header>


      {/* 3. PROJECT(S) */}
      <section className="projects-section">
        <h2 className="section-title">Project(s)</h2>
        
        <div className="metadata-grid">
          <div className="meta-col">
            <span className="meta-label">TYPE</span>
            <div>Website, Visual / Brand, Ecommerce Platform, Web App, Mobile App.</div>
          </div>
          <div className="meta-col">
            <span className="meta-label">YEAR</span>
            <div>2024–Present.</div>
          </div>
          <div className="meta-col">
            <span className="meta-label">DISCIPLINE</span>
            <div>Full-Stack Dev, AI/ML Research, System Architecture, UI/UX Design.</div>
          </div>
          <div className="meta-action">
            <button className="brutal-btn">HIDE PREVIEWS</button>
          </div>
        </div>

        <div className="project-list">
          {/* Row 01 */}
          <div className="project-row hover-invert">
            <div className="proj-index">01</div>
            <div className="proj-color" style={{backgroundColor: '#2563EB'}}></div> {/* Blue */}
            <div className="proj-title">SmartCourt — AI Football Tactical Analysis</div>
            <div className="proj-tags">
              <span className="brutal-tag">#AI_ML</span>
              <span className="brutal-tag">#SYSTEMS</span>
            </div>
          </div>
          
          {/* Row 02 */}
          <div className="project-row hover-invert">
            <div className="proj-index">02</div>
            <div className="proj-color" style={{backgroundColor: '#EF4444'}}></div> {/* Red */}
            <div className="proj-title">DA_BOT — Data Structure Tutor Chatbot</div>
            <div className="proj-tags">
              <span className="brutal-tag">#FULLSTACK</span>
              <span className="brutal-tag">#AI_ML</span>
            </div>
          </div>

          {/* Row 03 */}
          <div className="project-row hover-invert">
            <div className="proj-index">03</div>
            <div className="proj-color" style={{backgroundColor: '#D97706'}}></div> {/* Tan/Amber */}
            <div className="proj-title">ONGC BESS — Rig Power Feasibility Report</div>
            <div className="proj-tags">
              <span className="brutal-tag">#DATA</span>
              <span className="brutal-tag">#SYSTEMS</span>
            </div>
          </div>

          {/* Row 04 */}
          <div className="project-row hover-invert">
            <div className="proj-index">04</div>
            <div className="proj-color" style={{backgroundColor: '#EAB308'}}></div> {/* Neon Yellow/Yellow */}
            <div className="proj-title">EEG Signal Modeler — SSL Clinical Pipeline</div>
            <div className="proj-tags">
              <span className="brutal-tag">#AI_ML</span>
              <span className="brutal-tag">#RESEARCH</span>
            </div>
          </div>
          
          {/* Row 05 */}
          <div className="project-row hover-invert">
            <div className="proj-index">05</div>
            <div className="proj-color" style={{backgroundColor: '#10B981'}}></div> {/* Green */}
            <div className="proj-title">MahaKumbh 25 — Water Quality Analysis</div>
            <div className="proj-tags">
              <span className="brutal-tag">#DATA</span>
              <span className="brutal-tag">#UI_UX</span>
            </div>
          </div>
        </div>
      </section>

      <ExpertiseEducation />

      <GetInTouch />
    </div>
    </>
  );
}

export default App;
