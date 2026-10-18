// Single source of truth for portfolio content — mirrors RESUME (Shivansh).
// Update this file and every section of the site follows.
// Text wrapped in **double asterisks** is rendered as emphasis.

export const profile = {
  name: 'Shivansh',
  handle: '5VN5H',
  role: 'Software Engineer & ML Researcher',
  pitch:
    'I build backend systems that stay correct under concurrent load, and train deep learning models that hold up with very little labeled data.',
  location: 'Delhi, India',
  timeZone: 'Asia/Kolkata',
  status: 'Open to SDE & ML roles',
  email: 'contact2shiv4ansh@gmail.com',
  phone: '+91 88824-93607',
  phoneHref: 'tel:+918882493607',
  resumeFile: 'Shivansh_Resume.pdf',
};

export const socials = [
  {
    id: 'email',
    label: 'Email',
    handle: profile.email,
    url: `mailto:${profile.email}`,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    handle: 'linkedin.com/in/5vn5h',
    url: 'https://linkedin.com/in/5vn5h',
  },
  {
    id: 'github',
    label: 'GitHub',
    handle: 'github.com/5VN5H',
    url: 'https://github.com/5VN5H',
  },
  {
    id: 'codeforces',
    label: 'Codeforces',
    handle: 'codeforces.com/profile/5VN5H',
    url: 'https://codeforces.com/profile/5VN5H',
  },
];

export const experience = [
  {
    id: 'iit-mandi',
    role: 'Research Intern — ML / Software Engineering',
    org: 'IIT Mandi, CAIR Lab',
    location: 'Mandi, India',
    period: 'Dec 2025 – Aug 2026',
    bullets: [
      'Engineered an end-to-end **PyTorch training pipeline** for a large-scale ECG foundation model on a **45,152-patient dataset** (PhysioNet Ningbo), using a custom adversarial self-supervised objective (ASGMA + Gradient Reversal Layer) that outperforms random-masking baselines.',
      'Designed a Transformer with **Adaptive Shared Attention (ASA)** reaching **F1 0.73 / AUROC 0.94** on CPSC2018 and **F1 0.69 / AUROC 0.92** on PTB-XL, surpassing SimCLR, CMSC and 3KG.',
      'Extended the pipeline to EEG (Transformer + CBAM with contrastive augmentation), sustaining strong performance at **<10% labeled data**.',
    ],
    stack: ['PyTorch', 'Transformers', 'Self-Supervised Learning', 'ECG / EEG'],
  },
  {
    id: 'dtu-admin',
    role: 'Data Analyst Intern — Student Records & Reporting',
    org: 'DTU Administration',
    location: 'Delhi, India',
    period: 'Mar 2026 – May 2026',
    bullets: [
      'Cleaned and standardized **10,000+ student records** and automated recurring reporting workflows through formula-driven pipelines (VLOOKUP, QUERY).',
    ],
    stack: ['Data Cleaning', 'Spreadsheets', 'Reporting Automation'],
  },
  {
    id: 'blue-star',
    role: 'SDE Intern',
    org: 'Blue Star Publications',
    location: 'Delhi, India',
    period: 'Jun 2025 – Jul 2025',
    bullets: [
      'Built a secure admin dashboard (CRUD, **JWT auth, role-based access control**) on **idempotent MERN APIs** that safely handle concurrent writes without data corruption.',
      'Worked with a 5-member team across 2 sprints to gather requirements and **architect the database schema and design patterns** for a legacy codebase, shipping a feature that improved user engagement.',
      'Optimized query paths and cut redundant reads on high-traffic dashboard endpoints using data-structure and algorithmic reasoning.',
    ],
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'RBAC'],
  },
];

export const projects = [
  {
    id: 'vc-engine',
    title: 'AI-Powered VC Research Automation Engine',
    summary: 'Distributed async pipeline that turns enterprise data APIs into structured, CRM-safe deal research.',
    color: '#2563EB',
    year: '',
    tags: ['#SYSTEMS', '#AI'],
    bullets: [
      'Architected a **distributed, asynchronous pipeline** (FastAPI + Celery workers + Redis broker) that collects, deduplicates and structures data **in parallel across enterprise APIs** (Perplexity, Harmonic, AlphaSense), handling concurrent long-running jobs at scale.',
      'Built a **Safe-Write CRM layer** (Claude + Pydantic) with PostgreSQL audit trails that appends AI-generated insights **without overwriting concurrently-edited human data**.',
    ],
    stack: ['FastAPI', 'Celery', 'Redis', 'PostgreSQL', 'Claude API', 'Pydantic', 'n8n'],
    links: [{ label: 'Source', url: 'https://github.com/5VN5H/Eximius_VC_RA' }],
  },
  {
    id: 'smartcourt',
    title: 'SmartCourt — AI Football Tactical Analysis',
    summary: 'Graph neural networks that read a football match and simulate "what if" tactical alternatives.',
    color: '#EF4444',
    year: '2025',
    tags: ['#AI_ML', '#GNN'],
    bullets: [
      'Built a **GNN + Graph Attention Transformer** with **CVAE-based counterfactual simulation** on StatsBomb 360 tracking data.',
      'Processes a **full match end-to-end in under 3 minutes**.',
      '**Finalist, TechFest MAIT 2025.**',
    ],
    stack: ['PyTorch', 'GNN', 'GAT', 'CVAE', 'StatsBomb 360'],
    links: [],
  },
  {
    id: 'ecg-fm',
    title: 'Label-Efficient ECG / EEG Foundation Models',
    summary: 'Self-supervised Transformers for biosignals, built during my research at IIT Mandi.',
    color: '#10B981',
    year: '2025–26',
    tags: ['#RESEARCH', '#AI_ML'],
    bullets: [
      'Adversarial masking objective (ASGMA + Gradient Reversal Layer) for self-supervised pre-training on **45,152 patients**.',
      'Adaptive Shared Attention Transformer: **AUROC 0.94** (CPSC2018) and **0.92** (PTB-XL).',
      'Transfers to EEG with Transformer + CBAM, staying strong at **<10% labels**.',
    ],
    stack: ['PyTorch', 'Transformers', 'Contrastive Learning', 'CBAM'],
    links: [],
  },
];

// Earlier work — kept from the previous portfolio as a compact archive.
export const archive = [
  { title: 'DA_BOT — Data Structure Tutor Chatbot', tags: ['#FULLSTACK', '#AI_ML'] },
  { title: 'ONGC BESS — Rig Power Feasibility Report', tags: ['#DATA', '#SYSTEMS'] },
  { title: 'MahaKumbh 25 — Water Quality Analysis', tags: ['#DATA', '#UI_UX'] },
];

export const skills = [
  { group: 'Languages', items: ['C++', 'Python', 'JavaScript', 'SQL'] },
  {
    group: 'Systems & Concurrency',
    items: ['Multi-threading', 'Celery / Redis queues', 'Concurrent request handling', 'Idempotent API design'],
  },
  {
    group: 'Backend & Data',
    items: ['FastAPI', 'Node.js / Express', 'PostgreSQL', 'SQLAlchemy', 'MongoDB', 'REST', 'JWT Auth', 'Git', 'Linux'],
  },
  { group: 'ML / AI', items: ['PyTorch', 'Scikit-learn', 'Transformers', 'GNN', 'GAT', 'CVAE'] },
  { group: 'CS Fundamentals', items: ['Object-Oriented Programming', 'Data Structures & Algorithms'] },
];

export const education = [
  {
    degree: 'B.Tech, Software Engineering',
    school: 'Delhi Technological University, Delhi',
    period: '2024 – 2028 (expected)',
    score: '7.6 CGPA',
  },
  { degree: 'CBSE, Class XII', school: 'VCG SBV School', period: '2023', score: '80.8%' },
  { degree: 'CBSE, Class X', school: 'DAV Model School', period: '2021', score: '88.6%' },
];

export const leadership = [
  {
    title: 'Co-Head, Paryavarnam — DTU Environmental Society',
    period: 'Sep 2025 – Present',
    bullets: [
      'Led a **20-member team** for DTU’s sustainability drive (**2,000+ participants, 3 colleges**) and a campus waste audit across 10+ zones; findings submitted to DTU administration.',
      'Conducted AI/ML workshops for **200+ students** (Classes 10–12) across Delhi NCR.',
    ],
  },
  {
    title: 'Finalist, TechFest MAIT',
    period: '2025',
    bullets: ['SmartCourt — AI football tactical analysis.'],
  },
  {
    title: '2nd Place, Spiritual Play Competition — TOVP Mayapur',
    period: 'Jul 2024',
    bullets: [],
  },
];
