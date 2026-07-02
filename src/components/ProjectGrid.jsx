import React, { useState } from 'react';
import Lightbox from './Lightbox';

function ProjectGrid({ projects }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);

  const openLightbox = (images) => {
    setLightboxImages(images);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImages([]);
  };

  return (
    <>
      <section id="projects" className="section-card projects-section">
        <div className="section-heading">
          <h2>Projects</h2>
          <p>Selected work across software, data, and immersive experiences.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-media">
                
                {/* Video embed */}
                {project.type === 'video' && (
                  <iframe 
                    className="project-frame"
                    src={project.videoUrl}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}

                {/* Lightbox thumbnail */}
                {project.type === 'lightbox' && (
                  <img 
                    src={project.thumbnailImage} 
                    onClick={() => openLightbox(project.images)}
                    className="project-thumbnail"
                    alt={project.title}
                  />
                )}

                {/* Single image with link */}
                {project.type === 'image' && project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img 
                      src={project.image} 
                      className="project-thumbnail"
                      alt={project.title}
                    />
                  </a>
                )}

                {/* Single image without link */}
                {project.type === 'image' && !project.link && (
                  <img 
                    src={project.image} 
                    className="project-thumbnail"
                    alt={project.title}
                  />
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox 
        images={lightboxImages}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
      />
    </>
  );
}

export default ProjectGrid;
