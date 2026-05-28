import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>SDE Intern (Web)</h4>
                <h5>Bluestock Fintech (Virtual)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              May 2025 – June 2025. Built and optimized scalable fintech modules. Led debugging 
              and testing to improve performance. Developed new features enhancing user experience, 
              following agile practices and development standards.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Intern</h4>
                <h5>1M1B, AICTE & IBM SkillsBuild</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              Completed a 6-week virtual internship focused on AI, sustainability, 
              and emerging technologies. Gained hands-on experience with AI/ML concepts, LLMs, and 
              real-world sustainability challenges while developing industry-relevant technical skills
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Certified Developer</h4>
                <h5>IBM & Udemy</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Data Analytics Using Python (IBM SkillBuild, Dec 2024 – Jan 2025). 
              Full Stack Development (Udemy, Oct 2024 – Jan 2025). Highly competent in 
              modern web stacks and data visualization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Core Member</h4>
                <h5>Mandsaur University</h5>
              </div>
              <h3>2024-25</h3>
            </div>
            <p>
              Core Member, Chancellor Brigade – Student Council 
              Promoted from Technical Committee Head (2023–24); led multimedia, event promotion, and 
              outreach initiatives for workshops and Spandan Fest. Also achieved Winner – Inter-Department Smart India Hackathon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
