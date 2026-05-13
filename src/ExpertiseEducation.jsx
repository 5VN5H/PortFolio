import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const ExpertiseEducation = () => {
  return (
    <section className="exp-edu-section">
      <div className="exp-edu-grid">
        {/* LEFT — Experience */}
        <div className="exp-edu-col">
          <div className="bento-col-title">Experience</div>

          <motion.div
            className="edu-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0 }}
          >
            <div className="edu-card-top">
              <span className="year-pill">2025</span>
              <CheckCircle2 size={18} className="check-icon" />
            </div>
            <div className="edu-card-content">
              <span className="inst-name">Oil and Natural Gas Corporation (ONGC)</span>
              <h4 className="degree-title">Software Intern</h4>
              <span className="gpa-text">Systems & Software Development</span>
            </div>
          </motion.div>

          <motion.div
            className="edu-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.1 }}
          >
            <div className="edu-card-top">
              <span className="year-pill">2025</span>
              <CheckCircle2 size={18} className="check-icon" />
            </div>
            <div className="edu-card-content">
              <span className="inst-name">Indian Institute of Technology, Mandi</span>
              <h4 className="degree-title">Research Intern — EEG Signal Modeling</h4>
              <span className="gpa-text">AI/ML • Deep Learning • Clinical Pipeline</span>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Education */}
        <div className="exp-edu-col">
          <div className="bento-col-title">Education</div>

          <motion.div
            className="edu-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ delay: 0.1 }}
          >
            <div className="edu-card-top">
              <span className="year-pill">2024 – 2028</span>
              <CheckCircle2 size={18} className="check-icon" />
            </div>
            <div className="edu-card-content">
              <span className="inst-name">Delhi Technological University (DTU)</span>
              <h4 className="degree-title">B.Tech in Software Engineering</h4>
              <span className="gpa-text">GPA: 7.4/10</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseEducation;
