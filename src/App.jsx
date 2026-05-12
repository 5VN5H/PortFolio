import React, { useEffect, useRef } from 'react';
import './index.css';

function App() {
  const titleRef = useRef(null);

  useEffect(() => {
    const finalStr = 'shivansh';
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
    <div className="container">
      {/* 1. HEADER BLOCK */}
      <header>
        <div className="meta-bar">
          <div>┌ SYSTEM: SHIVANSH_CORE // V1.0</div>
          <div>STATUS: SECURE // OPEN_FOR_WORK ┐</div>
        </div>
        
        <div className="main-display">
          <div className="main-title">
            <span ref={titleRef}>shivansh</span> <span className="sys-tag">[SYS]</span>
          </div>
          
          <div className="contact-registry">
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

      {/* 2. EDUCATION BLOCK */}
      <section className="education-block hover-invert">
        <div className="edu-title">
          Delhi Technological University (DTU) — B.Tech in Software Engineering // Expected May 2028 // GPA: 7.4/10
        </div>
        <div className="edu-subtext">
          COURSEWORK: Data Structures & Algorithms, Machine Learning, Database Systems, Software Engineering, Computer Networks
        </div>
      </section>

      {/* 3. EXPERIENCE & PROJECTS */}
      <section>
        <table className="experience-table">
          <thead>
            <tr>
              <th className="id-col">[ID]</th>
              <th className="role-col">[MODULE / ROLE]</th>
              <th className="tech-col">[TECH STACK]</th>
              <th className="spec-col">[SPECIFICATIONS / IMPACT]</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover-invert">
              <td className="id-col">EXP-01</td>
              <td className="role-col">ONGC | Software Intern (Rig Power & BESS)</td>
              <td className="tech-col">Python, Pandas, NumPy</td>
              <td className="spec-col">Cleaned 10k+ records EDA; resolved sensor noise. Flagged 15-20% fuel efficiency gaps; delivered adopted BESS feasibility report.</td>
            </tr>
            <tr className="hover-invert">
              <td className="id-col">RND-01</td>
              <td className="role-col">IIT Mandi | Research Intern (EEG Signal Modeling)</td>
              <td className="tech-col">Transformers, CBAM, SSL</td>
              <td className="spec-col">Designed attention SSL model with contrastive pipelines. Achieved &lt;10% labeled data dependency across clinical tasks.</td>
            </tr>
            <tr className="hover-invert">
              <td className="id-col">PRJ-01</td>
              <td className="role-col">SmartCourt | AI Football Tactical Analysis</td>
              <td className="tech-col">PyTorch, GNN, GAT, CVAE</td>
              <td className="spec-col">Built GAT to model player interactions; CVAE for defensive simulation. Full match pipeline processes in &lt;3 minutes. [GIT]</td>
            </tr>
            <tr className="hover-invert">
              <td className="id-col">PRJ-02</td>
              <td className="role-col">DABOT | AI DSA Tutor Chatbot</td>
              <td className="tech-col">OpenAI, QWEN, RAG, FastAPI</td>
              <td className="spec-col">Multimodal step-by-step tutor. RAG integrated to cut hallucinations. Deployed web app with &lt;2s average response latency. [LINK]</td>
            </tr>
            <tr className="hover-invert">
              <td className="id-col">PRJ-03</td>
              <td className="role-col">MahaKumbh 25 | Water Quality Analysis</td>
              <td className="tech-col">WQI 1.0, Time-Series</td>
              <td className="spec-col">Evaluated 7 Ganga-Yamuna sites. Identified marginal bands (WQI 49-63); compiled policy-level environmental report. [PDF]</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 4. BOTTOM PANELS */}
      <section className="bottom-panels">
        {/* Node A */}
        <div className="panel hover-invert">
          <div className="panel-title">[NODE_A: SYSTEM_SKILLS]</div>
          <ul className="skill-list">
            <li><strong>[LANGUAGES]:</strong><br/>Python (primary), C++, SQL</li>
            <li><strong>[ML_DL_MODELS]:</strong><br/>PyTorch, Scikit-learn, GNN, GAT, CVAE, Transformers, CBAM, SSL</li>
            <li><strong>[DOMAINS]:</strong><br/>Computer Vision, NLP, Graph Networks, RAG</li>
          </ul>
        </div>
        
        {/* Node B */}
        <div className="panel hover-invert">
          <div className="panel-title">[NODE_B: LEADERSHIP]</div>
          <div style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
            <strong>Co-Head, Paryavarnam</strong><br/>
            (DTU Env Society)<br/><br/>
            Led 20-member team for sustainability drive (2,000+ participants). Initiated campus waste-audit report.
          </div>
        </div>

        {/* Node C */}
        <div className="panel hover-invert">
          <div className="panel-title">[NODE_C: VERIFICATION]</div>
          <ul className="verification-log">
            <li>Finalist, TechFest MAIT 2025 (SmartCourt AI)</li>
            <li>AI/ML Workshop Instructor for 200+ students</li>
            <li>2nd Place, Spiritual Play Competition, TOVP Mayapur</li>
          </ul>
          <div className="ascii-box">
            +-------------------+<br/>
            | [ASCII_SCHEMA_NODE] |<br/>
            +-------------------+
          </div>
        </div>
      </section>

      {/* 5. FOOTER TERMINAL */}
      <footer className="footer-terminal">
        └ // ARCHIVE LOG: COMPILED // SECURE • ENCRYPTED • STATIC_VERIFIED ┘
      </footer>
    </div>
  );
}

export default App;
