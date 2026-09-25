import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { MAIN_SECTIONS, formatSectionEyebrow } from '../data/sections';
import { ArchitecturalImage } from './ArchitecturalImage';
import { EditorialSection } from './EditorialSection';

type CategoryFilter = 'ALL' | 'RESIDENTIAL' | 'VILLAS' | 'INTERIORS' | 'COMMERCIAL';

export const ProjectsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');

  const filters: CategoryFilter[] = ['ALL', 'RESIDENTIAL', 'VILLAS', 'INTERIORS', 'COMMERCIAL'];

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  // Curated editorial variations (Requirement 13: Vary image width, aspect ratio, subtle offset)
  const getEditorialVariation = (index: number) => {
    const variations = [
      { aspectRatio: '4 / 3', widthPercent: 58, offset: 0 },
      { aspectRatio: '16 / 11', widthPercent: 56, offset: 24 },
      { aspectRatio: '3 / 2', widthPercent: 57, offset: -16 },
      { aspectRatio: '16 / 10', widthPercent: 59, offset: 20 },
      { aspectRatio: '4 / 3', widthPercent: 56, offset: -20 },
      { aspectRatio: '16 / 11', widthPercent: 58, offset: 16 }
    ];
    return variations[index % variations.length];
  };

  return (
    <section
      id="projects-section"
      style={{
        backgroundColor: '#FAF8F3',
        paddingTop: 'clamp(130px, 13vw, 190px)',
        paddingBottom: 'clamp(100px, 10vw, 150px)',
        position: 'relative'
      }}
    >
      <div className="container-custom">
        {/* Section Header with Refined Right-Aligned Title Accent (Requirement 31) */}
        <div
          className="section-header-editorial"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '48px',
            flexWrap: 'wrap',
            gap: '24px'
          }}
        >
          <div>
            <span className="micro-label" style={{ marginBottom: '14px' }}>
              {formatSectionEyebrow(MAIN_SECTIONS.SELECTED_WORK)}
            </span>
            <h2
              className="heading-section"
              style={{
                color: 'var(--text-heading)',
                textTransform: 'uppercase'
              }}
            >
              PORTFOLIO
            </h2>
          </div>

          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '440px',
              lineHeight: 1.7
            }}
          >
            An alternating rhythm of residences shaped by purpose, climate and tectonic permanence.
          </p>
        </div>

        {/* Minimal Editorial Category Filter */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(12px, 2.2vw, 32px)',
            marginBottom: 'clamp(44px, 6vw, 80px)',
            flexWrap: 'wrap',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '4px'
          }}
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? 'var(--accent-bronze)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  padding: '12px 6px',
                  minHeight: '44px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  position: 'relative',
                  transition: 'color 0.3s ease'
                }}
              >
                {filter}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-5px',
                      left: 0,
                      width: '100%',
                      height: '2px',
                      backgroundColor: 'var(--accent-bronze)'
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Alternating Left / Right Editorial Layout (Requirements 1-17) */}
        <div className="portfolio-alternating-container">
          {filteredProjects.map((project: Project, index: number) => {
            const variation = getEditorialVariation(index);
            const projectNumber = String(index + 1).padStart(2, '0');
            const categoryLabel = project.category === 'VILLAS'
              ? 'PRIVATE VILLA'
              : project.category === 'RESIDENTIAL'
              ? 'PRIVATE RESIDENCE'
              : project.category;

            return (
              <EditorialSection
                key={project.id}
                index={index + 1}
                imageWidthPercent={variation.widthPercent}
                offsetY={variation.offset}
                spacingBottom="clamp(120px, 13vw, 170px)"
                imageSlot={
                  <Link
                    to={`/projects/${project.slug}`}
                    data-cursor-view="true"
                    className="project-card"
                    style={{
                      textDecoration: 'none',
                      display: 'block'
                    }}
                  >
                    <div className="img-zoom-container" style={{ borderRadius: '1px' }}>
                      <ArchitecturalImage
                        src={project.thumbnailImage}
                        fallbackSrc={project.heroImage}
                        alt={project.title}
                        aspectRatio={variation.aspectRatio}
                      />
                    </div>
                  </Link>
                }
                textSlot={
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '16px',
                      maxWidth: '420px'
                    }}
                  >
                    {/* Project Number (Requirement 14) */}
                    <div className="editorial-project-number">
                      {projectNumber} / PROJECT
                    </div>

                    {/* Project Title */}
                    <Link
                      to={`/projects/${project.slug}`}
                      style={{ textDecoration: 'none' }}
                      data-cursor-view="true"
                    >
                      <h3
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)',
                          color: 'var(--text-heading)',
                          letterSpacing: '0.02em',
                          textTransform: 'uppercase',
                          fontWeight: 400,
                          lineHeight: 1.15,
                          transition: 'color 0.3s ease'
                        }}
                      >
                        {project.title}
                      </h3>
                    </Link>

                    {/* Metadata Line */}
                    <div className="project-meta-line">
                      <span>{project.city.toUpperCase()}</span>
                      <span className="dot">·</span>
                      <span>{categoryLabel}</span>
                      <span className="dot">·</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Editorial Description (Requirement 7) */}
                    <p
                      style={{
                        fontFamily: 'var(--font-sans)',
                        fontSize: 'clamp(0.9375rem, 1.1vw, 1.0625rem)',
                        lineHeight: 1.8,
                        color: 'var(--text-secondary)',
                        marginTop: '4px'
                      }}
                    >
                      {project.subtitle || project.overview}
                    </p>

                    {/* Explore CTA */}
                    <div style={{ paddingTop: '8px' }}>
                      <Link
                        to={`/projects/${project.slug}`}
                        className="link-editorial"
                        data-cursor-view="true"
                      >
                        <span>VIEW PROJECT</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
