import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight } from 'lucide-react';
import { projects, Project } from '../data/projects';
import { ArchitecturalImage } from '../components/ArchitecturalImage';
import { EditorialSection } from '../components/EditorialSection';

type CategoryFilter = 'ALL' | 'RESIDENTIAL' | 'VILLAS' | 'INTERIORS' | 'COMMERCIAL';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filters: CategoryFilter[] = ['ALL', 'RESIDENTIAL', 'VILLAS', 'INTERIORS', 'COMMERCIAL'];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === 'ALL' || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getEditorialVariation = (index: number) => {
    const variations = [
      { aspectRatio: '4 / 3', widthPercent: 58, offset: 0 },
      { aspectRatio: '16 / 11', widthPercent: 56, offset: 20 },
      { aspectRatio: '3 / 2', widthPercent: 57, offset: -16 },
      { aspectRatio: '16 / 10', widthPercent: 59, offset: 20 },
      { aspectRatio: '4 / 3', widthPercent: 56, offset: -20 },
      { aspectRatio: '16 / 11', widthPercent: 58, offset: 16 }
    ];
    return variations[index % variations.length];
  };

  return (
    <main style={{ backgroundColor: '#FAF8F3', minHeight: '100vh', paddingTop: '160px', paddingBottom: '140px' }}>
      <div className="container-custom">
        {/* Page Title & Editorial Header */}
        <div style={{ maxWidth: '840px', marginBottom: '64px' }}>
          <span className="micro-label" style={{ marginBottom: '14px' }}>
            SELECTED ARCHITECTURE
          </span>
          <h1
            className="heading-section"
            style={{
              color: 'var(--text-heading)',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}
          >
            PORTFOLIO OF RESIDENCES
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1rem, 1.25vw, 1.1875rem)',
              lineHeight: 1.8,
              color: 'var(--text-secondary)'
            }}
          >
            A curated monograph of private residences, villas, and architectural spaces across Chennai, Bengaluru, Hyderabad, and coastal South India.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '4px',
            marginBottom: 'clamp(44px, 6vw, 80px)'
          }}
        >
          {/* Filter Categories */}
          <div style={{ display: 'flex', gap: 'clamp(12px, 2vw, 32px)', flexWrap: 'wrap' }}>
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
                    padding: '12px 4px',
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

          {/* Search Input */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '8px 0',
              minHeight: '44px',
              width: '100%',
              maxWidth: '320px'
            }}
          >
            <Search size={14} color="var(--accent-bronze)" />
            <input
              type="text"
              placeholder="Search by city or residence..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                background: 'transparent',
                border: 'none',
                outline: 'none',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                letterSpacing: '0.04em',
                width: '100%'
              }}
            />
          </div>
        </div>

        {/* Alternating Monograph Presentation */}
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--text-muted)' }}>
              No residences found matching your selection.
            </p>
          </div>
        ) : (
          <div className="portfolio-alternating-monograph">
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
                  index={index}
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
                      <div className="editorial-project-number">
                        {projectNumber} / MONOGRAPH
                      </div>

                      <Link
                        to={`/projects/${project.slug}`}
                        style={{ textDecoration: 'none' }}
                        data-cursor-view="true"
                      >
                        <h2
                          style={{
                            fontFamily: 'var(--font-serif)',
                            fontSize: 'clamp(1.75rem, 2.5vw, 2.5rem)',
                            color: 'var(--text-heading)',
                            letterSpacing: '0.02em',
                            textTransform: 'uppercase',
                            fontWeight: 400,
                            lineHeight: 1.15
                          }}
                        >
                          {project.title}
                        </h2>
                      </Link>

                      <div className="project-meta-line">
                        <span>{project.city.toUpperCase()}</span>
                        <span className="dot">·</span>
                        <span>{categoryLabel}</span>
                        <span className="dot">·</span>
                        <span>{project.year}</span>
                      </div>

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

                      <div style={{ paddingTop: '8px' }}>
                        <Link
                          to={`/projects/${project.slug}`}
                          className="link-editorial"
                          data-cursor-view="true"
                        >
                          <span>EXPLORE RESIDENCE</span>
                          <ArrowUpRight size={14} />
                        </Link>
                      </div>
                    </div>
                  }
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};
