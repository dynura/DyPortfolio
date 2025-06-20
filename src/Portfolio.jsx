// Portfolio.jsx
import React from 'react';
import { useAnimations } from './hooks/useAnimations';
import { useCarousel } from './hooks/useCarousel';
import { portfolioData } from './data/portfolioData';
import './styles/Portfolio.css';

// Import images from src/assets folder
import mainImage from './assets/main.png';
import studyappImage from './assets/studyapp.png';
import foodshareImage from './assets/foodshare.png';
import neveroutImage from './assets/neverout.png';

// Create image mapping
const imageMap = {
  '/assets/main.png': mainImage,
  '/assets/studyapp.png': studyappImage,
  '/assets/foodshare.png': foodshareImage,
  '/assets/neverout.png': neveroutImage
};

const Portfolio = () => {
  const { visibleSections, sectionsRef, scrollToSection } = useAnimations();
  const { currentProject, nextProject, previousProject, goToProject } = useCarousel(portfolioData.projects.length);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">{portfolioData.personal.logo}</div>
          <ul className="nav-links">
            {portfolioData.navigation.map((item, index) => (
              <li key={index}>
                <a onClick={() => scrollToSection(item.href.substring(1))}>{item.label}</a>
              </li>
            ))}
          </ul>
          <button className="mobile-menu-toggle">☰</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-image">
            <div className="character-container">
              <div className="character-image">
                <img 
                  src={imageMap[portfolioData.personal.profileImage.src] || portfolioData.personal.profileImage.src}
                  alt={portfolioData.personal.profileImage.alt}
                  className="profile-image"
                  onError={(e) => {
                    console.error('Failed to load image:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
          <div className="hero-text">
            <h1>{portfolioData.personal.greeting}</h1>
            <div className="subtitle">{portfolioData.personal.subtitle}</div>
            <div className="tagline">{portfolioData.personal.tagline}</div>
            <div className="cta-buttons">
              {portfolioData.personal.ctaButtons.map((button, index) => (
                <a 
                  key={index}
                  onClick={button.onClick ? () => scrollToSection(button.onClick) : undefined}
                  href={button.href}
                  className={`btn ${button.variant}`}
                >
                  {button.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className={`section fade-in ${visibleSections.has('about') ? 'visible' : ''}`}
        ref={el => {
          if (el) sectionsRef.current[0] = el;
        }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-stats">
            {portfolioData.about.stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div>{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="about-text">
            {portfolioData.about.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className={`section fade-in ${visibleSections.has('skills') ? 'visible' : ''}`}
        ref={el => {
          if (el) sectionsRef.current[1] = el;
        }}
      >
        <h2 className="section-title">Area of Expertise</h2>
        <div className="skills-grid">
          {portfolioData.skills.map((skill, index) => (
            <div key={index} className="skill-category">
              <h3>{skill.title}</h3>
              <div className="skill-tags">
                {skill.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className={`section fade-in ${visibleSections.has('projects') ? 'visible' : ''}`}
        ref={el => {
          if (el) sectionsRef.current[2] = el;
        }}
      >
        <h2 className="section-title">Featured Works</h2>
        <div className="projects-carousel">
          <div 
            className="projects-container"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {portfolioData.projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="cta-buttons">
                    {project.links.map((link, linkIndex) => (
                      <a key={linkIndex} href={link.href} className={`btn ${link.variant}`}>
                        {link.text}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="project-image">
                  <img 
                    src={imageMap[project.image.src] || project.image.src}
                    alt={project.image.alt}
                    className="project-img"
                    onError={(e) => {
                      console.error('Failed to load project image:', e.target.src);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-indicators">
            {portfolioData.projects.map((_, index) => (
              <div 
                key={index}
                className={`indicator ${currentProject === index ? 'active' : ''}`}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact" 
        className={`section fade-in ${visibleSections.has('contact') ? 'visible' : ''}`}
        ref={el => {
          if (el) sectionsRef.current[3] = el;
        }}
      >
        <h2 className="section-title">Let's Connect!</h2>
        <div className="contact-content">
          <p>{portfolioData.contact.description}</p>
          <div className="contact-links">
            {portfolioData.contact.links.map((link, index) => (
              <a key={index} href={link.href} className="contact-link">
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;