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
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <section key={project.id} className="section3">
              <article className="section2Content">
                <h3 className="sectionContentSubTitle">{project.title}</h3>
                
                {/* Video embed */}
                {project.type === 'video' && (
                  <iframe 
                    width="420" 
                    height="315" 
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
                    className="hover-shadow project-thumbnail"
                    alt={project.title}
                    style={{ cursor: 'pointer' }}
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
              </article>
            </section>
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
