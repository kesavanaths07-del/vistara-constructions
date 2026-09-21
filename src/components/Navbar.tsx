import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  forceSolid?: boolean;
}

interface NavLinkItem {
  name: string;
  path: string;
  sectionId: string;
}

export const Navbar: React.FC<NavbarProps> = ({ forceSolid = false }) => {
  const [isScrolled, setIsScrolled] = useState(forceSolid);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (forceSolid) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [forceSolid]);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Updated navigation sequence: HOME | PROJECTS | ABOUT | EXPERTISE | JOURNAL | CONTACT
  const navLinks: NavLinkItem[] = [
    { name: 'HOME', path: '/', sectionId: 'hero-section' },
    { name: 'PROJECTS', path: '/projects', sectionId: 'projects-section' },
    { name: 'ABOUT', path: '/about', sectionId: 'about-section' },
    { name: 'EXPERTISE', path: '/expertise', sectionId: 'process-section' },
    { name: 'JOURNAL', path: '/journal', sectionId: 'journal-section' },
    { name: 'CONTACT', path: '/contact', sectionId: 'contact-cta-section' }
  ];

  // Smooth scroll handler for single-page experience and return-to-hero (Requirement 5)
  const handleNavClick = (e: React.MouseEvent, link: NavLinkItem) => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    if (link.name === 'HOME') {
      e.preventDefault();
      if (location.pathname !== '/') {
        navigate('/');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const heroEl = document.getElementById('hero-section');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth' });
      }
      // Signal hero canvas to reset frame to 001
      window.dispatchEvent(new CustomEvent('vistara-reset-hero'));
      return;
    }

    // When on the homepage, smoothly scroll to the corresponding section if present
    if (location.pathname === '/') {
      const sectionEl = document.getElementById(link.sectionId);
      if (sectionEl) {
        e.preventDefault();
        sectionEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
  };

  // Dynamic colors depending on whether navbar is scrolled over white/ivory or over hero
  const textColor = isScrolled || mobileMenuOpen ? '#28241F' : '#FAF8F3';
  const logoSubColor = isScrolled || mobileMenuOpen ? '#B08A52' : '#C5A875';
  const ctaBorderColor = isScrolled ? '#B08A52' : 'rgba(250, 248, 243, 0.4)';
  const ctaTextColor = isScrolled ? '#B08A52' : '#FAF8F3';

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'background 0.5s ease, border-color 0.5s ease, padding 0.5s ease, box-shadow 0.5s ease',
          background: isScrolled
            ? 'rgba(245, 241, 232, 0.94)'
            : 'linear-gradient(to bottom, rgba(30, 24, 15, 0.6) 0%, rgba(30, 24, 15, 0) 100%)',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(60, 50, 40, 0.12)' : '1px solid transparent',
          boxShadow: isScrolled ? '0 10px 30px rgba(45, 35, 25, 0.05)' : 'none',
          padding: isScrolled ? '18px 0' : '28px 0'
        }}
      >
        <div
          className="container-custom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Brand Wordmark */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            style={{
              textDecoration: 'none',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}
            aria-label="Vistara Constructions - Return to home"
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                fontWeight: 600,
                letterSpacing: '0.22em',
                color: textColor,
                lineHeight: 1,
                transition: 'color 0.3s ease'
              }}
            >
              VISTARA
            </span>
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.5625rem',
                fontWeight: 600,
                letterSpacing: '0.36em',
                color: logoSubColor,
                lineHeight: 1,
                transition: 'color 0.3s ease'
              }}
            >
              CONSTRUCTIONS
            </span>
          </Link>

          {/* Desktop Navigation Links (HOME | PROJECTS | ABOUT | EXPERTISE | JOURNAL | CONTACT) */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '36px'
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isHome = link.name === 'HOME';
              const isActive = isHome
                ? location.pathname === '/' && !isScrolled
                : location.pathname === link.path;

              const linkColor = isActive
                ? '#B08A52'
                : isScrolled
                ? '#28241F'
                : '#FAF8F3';

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  className="nav-link-item"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textDecoration: 'none',
                    color: linkColor,
                    position: 'relative',
                    padding: '6px 0',
                    transition: 'color 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#B08A52';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = linkColor;
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#B08A52',
                        borderRadius: '50%'
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <Link
              to="/contact"
              onClick={(e) => {
                if (location.pathname === '/') {
                  const contactEl = document.getElementById('contact-cta-section');
                  if (contactEl) {
                    e.preventDefault();
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="desktop-cta"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 22px',
                border: `1px solid ${ctaBorderColor}`,
                color: ctaTextColor,
                textDecoration: 'none',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.18em',
                borderRadius: '2px',
                transition: 'var(--transition-fast)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#B08A52';
                e.currentTarget.style.color = '#FFFFFF';
                e.currentTarget.style.borderColor = '#B08A52';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = ctaTextColor;
                e.currentTarget.style.borderColor = ctaBorderColor;
              }}
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight size={14} />
            </Link>

            {/* Architectural Mobile MENU Button (Requirement 4: No generic hamburger) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle-btn"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                background: mobileMenuOpen ? 'rgba(176, 138, 82, 0.08)' : 'transparent',
                border: `1px solid ${mobileMenuOpen ? 'var(--accent-bronze)' : (isScrolled ? 'rgba(50, 42, 32, 0.25)' : 'rgba(250, 248, 243, 0.35)')}`,
                color: mobileMenuOpen ? '#201D19' : textColor,
                padding: '10px 18px',
                cursor: 'pointer',
                borderRadius: '1px',
                display: 'none',
                alignItems: 'center',
                gap: '8px',
                minHeight: '44px',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.6875rem',
                  fontWeight: 600,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase'
                }}
              >
                {mobileMenuOpen ? 'CLOSE' : 'MENU'}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '5px',
                  height: '5px',
                  backgroundColor: mobileMenuOpen ? 'var(--accent-bronze)' : (isScrolled ? 'var(--accent-bronze)' : 'var(--accent-champagne)'),
                  borderRadius: '50%',
                  transition: 'background-color 0.3s ease'
                }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Warm Architectural Styling (Requirement 4 & 5) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(245, 241, 232, 0.985)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '100px 24px 48px 24px',
            overflowY: 'auto'
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(20px, 3.5vh, 32px)',
              alignItems: 'center',
              width: '100%',
              maxWidth: '360px',
              margin: 'auto 0'
            }}
          >
            {navLinks.map((link) => {
              const isHome = link.name === 'HOME';
              const isLinkActive = isHome
                ? location.pathname === '/' && !isScrolled
                : location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link)}
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(1.5rem, 5.5vw, 2rem)',
                    letterSpacing: '0.14em',
                    textDecoration: 'none',
                    color: isLinkActive ? 'var(--accent-bronze)' : 'var(--text-heading)',
                    padding: '8px 16px',
                    minHeight: '44px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {link.name}
                  {isLinkActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '2px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '4px',
                        height: '4px',
                        backgroundColor: 'var(--accent-bronze)',
                        borderRadius: '50%'
                      }}
                    />
                  )}
                </Link>
              );
            })}

            <div
              style={{
                width: '48px',
                height: '1px',
                background: 'var(--border-bronze)',
                margin: '8px 0'
              }}
            />

            <Link
              to="/contact"
              onClick={(e) => {
                setMobileMenuOpen(false);
                if (location.pathname === '/') {
                  const contactEl = document.getElementById('contact-cta-section');
                  if (contactEl) {
                    e.preventDefault();
                    contactEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="btn-primary"
              style={{
                width: '100%',
                maxWidth: '280px',
                justifyContent: 'center',
                minHeight: '48px',
                padding: '14px 24px'
              }}
            >
              <span>START A CONVERSATION</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      )}

      {/* Responsive & Accessibility Styles */}
      <style>{`
        .nav-link-item:focus-visible {
          outline: 1px solid var(--accent-bronze);
          outline-offset: 4px;
        }
        @media (max-width: 900px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
};
